const express = require('express');
const WebSocketServer = require('ws').Server;
const server = require('http').createServer();

const wss = new WebSocketServer({ server: server });
const app = express();

const PORT = 3000;

/** ROUTES **/
app.get('/', function(req, res) {
  res.sendFile('index.html', {root: __dirname});
});

/** END ROUTES **/

wss.on('connection', function connection(ws) {
   console.log('clients connected: ', wss.clients.size);
    wss.broadcast(`Current visitors: ${wss.clients.size}`);

  if (ws.readyState === ws.OPEN) {
    ws.send('welcome!');
  }

  ws.on('close', function close() {
    wss.broadcast(`Current visitors: ${wss.clients.size}`);
    console.log('disconnected');
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


server.on('request', app);
server.listen(PORT, function () { console.log('Listening on ' + PORT); });