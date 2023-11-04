export default defineNuxtConfig({
  css: [`~/style.scss`],
  ssr: false,
  modules: [
    'nuxt-quasar-ui',
    '@vueuse/nuxt',
  ],
  components: [
    { path: '~/lib/kit/components', prefix: 'Kit' },
    { path: '~/lib/cordskit/nuxt-components', prefix: 'CordsKit' },
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
      API_URL: process.env.API_URL
    }
  },
})
