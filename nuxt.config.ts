// https://nuxt.com/docs/api/configuration/nuxt-config

import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import vm from 'node:vm'

import {metA} from './content/meta.js';

export default defineNuxtConfig({
  ssr: true,

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          key: 'favicon-ico',
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
        {
          key: 'favicon-png',
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png'
        }
      ],
      titleTemplate: '%s - Built by the Cruzat',
      title: 'Web Portfolio of Dan Cruzat',
      htmlAttrs: {
        lang: 'en-US'
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: metA.desc
        },
        {
          name: 'keywords',
          content: metA.keywords
        },
        {
          name: 'author',
          content: metA.name
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:url',
          content: metA.url
        },
        {
          name: 'twitter:site',
          content: metA.handle
        },
        {
          name: 'twitter:creator',
          content: metA.handle
        },
        {
          name: 'twitter:title',
          content: metA.title
        },
        {
          name: 'twitter:description',
          content: metA.desc
        },
        {
          name: 'twitter:image',
          content: metA.image
        },
        {
          name: 'twitter:image:alt',
          content: metA.name
        },
        {
          property: 'og:url',
          content: metA.url
        },
        {
          property: 'og:title',
          content: metA.title
        },
        {
          property: 'og:site_name',
          content: metA.url
        },
        {
          property: 'og:description',
          content: metA.desc
        },
        {
          property: 'og:image',
          content: metA.image
        }
      ],
      script: [
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            // 1. Set Default Consent Immediately
            var savedChoice = (typeof localStorage !== 'undefined'
            ? localStorage.getItem('consent_choice')
            : null) || 'denied';
            gtag('consent', 'default', {
              'analytics_storage': savedChoice,
              'ad_storage': savedChoice,
              'wait_for_update': 500
            });

            // 2. Load GTM Only After Consent is Initialized
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NBNWMM86');
          `,
          type: 'text/javascript'
        }
      ],
    }
  },

  modules: [
    '@nuxtjs/google-fonts',
    async (options, nuxt) => {
      try {
        const response = await fetch('https://thecruzat.com/the-names.js')
        const scriptText = await response.text()

        // 1. Strip 'export' and 'const' so the variable becomes a global in the VM
        // This transforms "export const THE_NAMES = [...]" into "THE_NAMES = [...]"
        const cleanScript = scriptText
          .replace(/export /g, '')
          .replace(/const /g, '')

        // 2. Create a context and run the script
        const context = {}
        vm.createContext(context)
        vm.runInContext(cleanScript, context)

        // 3. Verify and Inject
        if (context.THE_NAMES) {
          console.log('Successfully fetched names:', context.THE_NAMES.length)
          nuxt.options.runtimeConfig.public.theNames = context.THE_NAMES
        } else {
          console.warn('THE_NAMES not found in script context. Checking alternative patterns...')
          // Fallback: If VM fails, regex the array directly as a last resort
          const match = scriptText.match(/\[([\s\S]*?)\]/)
          if (match) {
             // Basic parsing if the VM approach fails
             const names = eval(match[0])
             nuxt.options.runtimeConfig.public.theNames = names
             console.log('Regex fallback success:', names.length)
          }
        }
      } catch (e) {
        console.error('Build-time fetch failed:', e)
      }
    }
  ],

  googleFonts: {
    families: {
      Khand: true
    },
    display: 'swap',
    prefetch: true
  },

  css: [
    './styles/global.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ]
})
