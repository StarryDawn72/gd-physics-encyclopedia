import { defineConfig } from 'vitepress'
import sidebar from './sidebar.mts'

export default defineConfig({
  base: "/gd-physics-encyclopedia/",
  title: "GDPE",
  description: "Official documentation for Geometry Dash's player physics!",
  themeConfig: {

    logo: '/logo.png',

    search: { provider: 'local' },

    nav: [ { text: 'Home', link: '/' }, ],

    sidebar: sidebar,

    socialLinks: [ { icon: 'github', link: 'https://github.com/StarryDawn72/gd-physics-encyclopedia' } ],

  },
  markdown: {
    theme: {
      light: 'nord',
      dark: 'nord'
    }
  }
})
