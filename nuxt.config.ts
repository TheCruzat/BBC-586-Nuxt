// https://nuxt.com/docs/api/configuration/nuxt-config

import vm from "node:vm";
import type { Nuxt } from "nuxt/schema";
import { defineNuxtConfig } from "nuxt/config";

// @ts-ignore - no declaration file for meta.js
import { metA } from "./content/meta.js";

interface ContextWithNames {
  THE_NAMES?: string[];
  [key: string]: unknown;
}

export default defineNuxtConfig({
  ssr: true,

  // Imported images land in the Vite/Nuxt manifest as page assets; Nuxt then
  // injects <link rel="prefetch" as="image"> for every one of them. That races
  // the LCP hero and undoes lazy / IntersectionObserver deferral — strip them.
  hooks: {
    "build:manifest": (manifest) => {
      for (const item of Object.values(manifest)) {
        if (!item.assets) continue;
        item.assets = item.assets.filter(
          (asset: string) =>
            !/\.(png|jpe?g|gif|svg|webp|avif)$/i.test(asset),
        );
      }
    },
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          key: "favicon-ico",
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        {
          key: "favicon-png",
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
      ],
      titleTemplate: "%s - Built by the Cruzat",
      title: "Web Portfolio of Dan Cruzat",
      htmlAttrs: {
        lang: "en-US",
      },
      meta: [
        {
          name: "description",
          content: metA.desc,
        },
        {
          name: "keywords",
          content: metA.keywords,
        },
        {
          name: "author",
          content: metA.name,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:url",
          content: metA.url,
        },
        {
          name: "twitter:site",
          content: metA.handle,
        },
        {
          name: "twitter:creator",
          content: metA.handle,
        },
        {
          name: "twitter:title",
          content: metA.title,
        },
        {
          name: "twitter:description",
          content: metA.desc,
        },
        {
          name: "twitter:image",
          content: metA.image,
        },
        {
          name: "twitter:image:alt",
          content: metA.name,
        },
        {
          property: "og:url",
          content: metA.url,
        },
        {
          property: "og:title",
          content: metA.title,
        },
        {
          property: "og:site_name",
          content: metA.url,
        },
        {
          property: "og:description",
          content: metA.desc,
        },
        {
          property: "og:image",
          content: metA.image,
        },
      ],
      // GTM is loaded only after analytics consent (see CookieConsent + utils/loadGtm.js)
    },
  },

  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Khand: true,
        },
        display: "swap",
        prefetch: true,
      },
    ],
    async (_options: unknown, nuxt: Nuxt) => {
      try {
        const response = await fetch("https://thecruzat.com/the-names.js");
        const scriptText = await response.text();

        // 1. Strip 'export' and 'const' so the variable becomes a global in the VM
        // This transforms "export const THE_NAMES = [...]" into "THE_NAMES = [...]"
        const cleanScript = scriptText
          .replace(/export /g, "")
          .replace(/const /g, "");

        // 2. Create a context and run the script
        const context: ContextWithNames = {};
        vm.createContext(context);
        vm.runInContext(cleanScript, context);

        // 3. Verify and Inject
        if (context.THE_NAMES) {
          // console.log('Successfully fetched names:', context.THE_NAMES.length)
          nuxt.options.runtimeConfig.public.theNames = context.THE_NAMES;
        } else {
          // console.warn('THE_NAMES not found in script context. Checking alternative patterns...')
          // Fallback: If VM fails, regex the array directly as a last resort
          const match = scriptText.match(/\[([\s\S]*?)\]/);
          if (match) {
            try {
              const names = JSON.parse(match[0]);
              nuxt.options.runtimeConfig.public.theNames = names;
            } catch (err) {
              console.error("Failed to parse names:", err);
            }
          }
        }
        if (!nuxt.options.runtimeConfig.public.theNames) {
          nuxt.options.runtimeConfig.public.theNames = [];
        }
      } catch (e) {
        console.error("Build-time fetch failed:", e);
      }
    },
  ],

  css: ["./styles/global.scss", "@fortawesome/fontawesome-svg-core/styles.css"],
});
