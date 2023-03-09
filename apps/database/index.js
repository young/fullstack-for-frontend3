const express = require('express');
const server = require('http').createServer();
const app = express();

app.get('/', function(req, res) {
  res.sendFile('index.html', {root: __dirname});
});

server.on('request', app);

process.on('SIGINT', () => {
  server.close(() => {
    shutdownDB(); 
  });
});

server.listen(3000, function () { console.log('Listening on 3000'); });

/** Websocket **/
const WebSocketServer = require('ws').Server;

const wss = new WebSocketServer({ server: server });

wss.on('connection', function connection(ws) {
  const numClients = wss.clients.size;

  console.log('clients connected: ', numClients);

  // Log number of visitors at current moment
  db.run(`INSERT INTO visitors (count, time)
    VALUES (${numClients}, datetime('now'))`);

  wss.broadcast(`Current visitors: ${numClients}`);

  if (ws.readyState === ws.OPEN) {
    ws.send('welcome!');
  }

  ws.on('close', function close() {
    wss.broadcast(`Current visitors: ${wss.clients.size}`);
    console.log('A client has disconnected');
  });

  ws.on('error', function error() {
 
  });
});

/**
 * Broadcast data to all connected clients
 * @param  {Object} data
 * @void
 */
wss.broadcast = function broadcast(data) {
  console.log('Broadcasting: ', data);
  wss.clients.forEach(function each(client) {
    client.send(data);
  });
};
/** End Websocket **/

/** Database stuff **/

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

// .seralize ensures DB is set up before any queries
db.serialize(() => {
    db.run(`CREATE TABLE visitors (
      count INTEGER,
      time TEXT
      )`);
});

function getCounts() {
    db.each("SELECT * FROM visitors", (err, row) => {
      console.log(row);
    });
}

function shutdownDB() {
  getCounts();
  console.log('shutting down DB');
  db.close();
}



/** End Database stuff **/
