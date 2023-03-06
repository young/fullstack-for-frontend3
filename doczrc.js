export default {
  base: '/fullstack-for-frontend3/',
  src: './src/pages',
    // Set output folder to read from GH pages
    dest: '/docs',
    themeConfig: {
      initialColorMode: 'dark',
    },
    menu: [
      {
        name: "Getting Started",
        menu: [
          "Getting Started",
          "Welcome to your terminal"
        ],
      },

    ]    
  }