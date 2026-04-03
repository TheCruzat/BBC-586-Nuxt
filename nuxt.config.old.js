const metaName = "Dan Cruzat",
      metaFings = {
        name: metaName,
        url: "https://builtby.thecruzat.com",
        title: "Built by the Cruzat : Web Portfolio of Dan Cruzat",
        description: "Dan Cruzat is a front end engineer with over 20 years\' experience in digital, currently focused on React and Vue. Located in Portland OR.",
        image: "https://builtby.thecruzat.com/builtbythecruzat.png",
        twitter: "@_Cruzat",
      };

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: metaFings.title,
    htmlAttrs: {
      lang: 'en',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: metaFings.description },
      { name: 'keywords', content: 'front end, developer, engineer, wordpress, vue, react, html, css, javascript, portland, oregon' },
      { name: 'author', content: metaName },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: metaFings.url },
      { name: 'twitter:site', content: metaFings.twitter },
      { name: 'twitter:creator', content: metaFings.twitter },
      { name: 'twitter:title', content: metaFings.title },
      { name: 'twitter:description', content: metaFings.description },
      { name: 'twitter:image', content: metaFings.image },
      { name: 'twitter:image:alt', content: metaName },
      { property: 'og:url', content: metaFings.url },
      { property: 'og:title', content: metaFings.title },
      { property: 'og:site_name', content: metaFings.url },
      { property: 'og:description', content: metaFings.description },
      { property: 'og:image', content: metaFings.image },
      // { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~plugins/ga.js', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  },

  router: {
    base: '/',
    routeNameSplitter: '/'
  },

  googleFonts: {
    families: {
      'Khand': true,
    },
    display: 'swap',
    prefetch: true,
  }
}
