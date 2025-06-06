import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  i18n: {
    locales: [
      { code: 'en-US', name: 'English', files: ['en-US/common.json'] },
      { code: 'zh-CN', name: 'Chinese', files: ['zh-CN/common.json'] }
    ],
    defaultLocale: "zh-CN",
    strategy: "prefix",
    lazy: true,
    detectBrowserLanguage: {
    },
  },

  ui: {
    fonts: false,
  },

  app: {
    pageTransition: { name: "layout", mode: "out-in" },
    head: {
      title: "Nuxt",
      htmlAttrs: {
        lang: "zh-CN",
      },
      charset: "utf-8",
      viewport:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no,viewport-fit=cover",
      meta: [{ name: "description", content: "My custom description" }],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  routeRules: {
    "/": {
      // Generated at build time for SEO purpose
      prerender: true,
    },
    "/api/*": { cache: { maxAge: 60 * 10 } },
  },

  vue: {
    propsDestructure: true,
  },

  runtimeConfig: {
    public: {
      env: process.env.NODE_ENV,
      apiBase: "/api",
    },
  },

  nitro: {
    preset: "node-server",
  },

  css: ["~/assets/css/base.css"],
  postcss: {},

  vite: {
    plugins: [tailwindcss()],
    css: {
      preprocessorMaxWorkers: true,
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/variables.scss" as *;',
        },
      },
    },
  },

  modules: [
    // '@nuxt/content',
    "@nuxt/eslint",
    // "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "@nuxtjs/i18n",
  ],

  // $development: {
  //   //
  // },
  // $production: {
  //   //
  // },
  // $env: {
  //   //
  // },
});
