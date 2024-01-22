import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

declare const window: any;

export function getFirebaseUser() {
  return new Promise((resolve) => {
    if (!window.firebaseApp) {
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
      window.firebaseApp = firebaseApp;
    }

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user);
      }
      resolve(null);
    });
  });
}
