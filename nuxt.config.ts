export default defineNuxtConfig({
  css: [`~/style.scss`],
  ssr: false,
  modules: [
    'frontendkit',
    'cordsfrontendkit'
  ],
  i18n: {
    locales: [
      { code: "en" },
      { code: "fr" }
    ],
    strategy: 'prefix',
    defaultLocale: 'en',
    detectBrowserLanguage: false,
  },
  quasar : {
    plugins: ['Notify']
  },
  components: [
    { path: '~/lib/kit/components', prefix: 'Kit' },
    '~/components',
  ],
  alias: {
    "kit": "~/lib/kit",
  },
  app: {
    buildAssetsDir: '/_app/partner-portal/_nuxt/',
    rootId: 'app',
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/_app/partner-portal/favicon.png' },
      ]
    }
  },
  runtimeConfig: {
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
      FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
      FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
      API_URL: process.env.API_URL,
      PLATFORM_API_URL: process.env.PLATFORM_API_URL,
      ACCOUNT_URL: process.env.ACCOUNT_URL,
      FEATURE_MULTIPLE_KEYS: process.env.FEATURE_MULTIPLE_KEYS
    }
  },
})
