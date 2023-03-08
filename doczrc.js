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
        bg: 'yellow',
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
    {
      name: "Exercises",
      menu: [
        "Welcome to your terminal",
        "VIM",
        "Shell configuration",
        "Buying VPS",
        "SSH Key",
        "Logging In",
        "Network Tools",
        "DNS",
        "Buying a domain",
        "Nginx",
        "Application setup",
        "Git",
        "Nmap",
        "UFW",
        "Application updates",
        "CI/CD",
        "Finding things",
        "Databases",
        "Login page",
        "HTTPS",
        "Docker",
      ],
    },
  ]    
  }