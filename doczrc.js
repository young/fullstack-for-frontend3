export default {
  base: '/fullstack-for-frontend3/',
  src: './src/pages',
  // Set output folder to read from GH pages
  dest: '/docs',
  htmlContext: {
    favicon: "/src/images/favicon.ico",
  },
  themeConfig: {
    initialColorMode: 'dark',
    colors: {
      header: {
        bg: 'tomato',
      }
    },
  },
  menu: [
    {
      name: "Introduction",
      menu: [
        "Introduction",
        "Diving In"
      ],
    },
  ]    
  }