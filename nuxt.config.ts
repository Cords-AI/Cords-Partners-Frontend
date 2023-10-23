export default defineNuxtConfig({
  css: [`~/style.scss`],
  modules: [
    'nuxt-quasar-ui'
  ],
  components: [
    { path: '~/lib/kit/components', prefix: 'Kit' },
    '~/components',
  ],
  alias: {
    "kit": "~/lib/kit",
  },
  app: {
    buildAssetsDir: '/_app/cords-partner-portal/_nuxt/',
    rootId: 'app',
  },
  runtimeConfig: {
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
      FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
      FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    }
  },
})
