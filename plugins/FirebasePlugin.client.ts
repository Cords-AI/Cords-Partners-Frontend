import { initializeApp } from 'firebase/app';

export default defineNuxtPlugin({
  hooks: {
    'app:created': function () { // eslint-disable-line
      const nuxtApp = useNuxtApp();
      const config = useRuntimeConfig();
      const firebaseConfig: any = {
        apiKey: config.public.FIREBASE_API_KEY,
        authDomain: config.public.FIREBASE_AUTH_DOMAIN,
        projectId: config.public.FIREBASE_PROJECT_ID,
        storageBucket: config.public.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: config.public.FIREBASE_MESSAGING_SENDER_ID,
        appId: config.public.FIREBASE_APP_ID,
      };
      const firebaseApp = initializeApp(firebaseConfig);
      nuxtApp.vueApp.provide('firebaseApp', firebaseApp);
    },
  },
});
