const path = require('path');
const axios = require('axios');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - PHPカンファレンス関西2018',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: 'apple-touch-icon-152x152.png',
      },
      //issue #32　実装の記述です。
      // {
      //   rel: 'apple-touch-startup-image',
      //   sizes: '512x512',
      //   href: 'launch-512x512.png',
      //   media:
      //     '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
      // },
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
  modules: ['@nuxtjs/font-awesome', '@nuxtjs/pwa'],
  plugins: [
    // '~/plugins/gmap_plugin.js'
    '~/plugins/lazyload.js',
  ],
  generate: {
    routes: [
      '/session/hishida_hiromi',
      '/session/takahasi_yugo',
      '/session/sugita_sota',
      '/session/goto_hidenori',
      '/session/usami_kenta',
      '/session/matuhuzi_hideharu',
      '/session/suzuki_siniti',
      '/session/kisida_kenitiro',
      '/session/nakasima_rin',
      '/session/sakakibara_masahiko',
      '/session/takahasi_kunihiko',
      '/session/saita_sinya',
      '/session/wakaba_akira'
    ]
  },
};
