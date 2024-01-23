import { getAuth, signOut } from 'firebase/auth';
import User from './User';
import { getFirebaseUser } from './getFirebaseUser';

export default class Backend {
  private static instance: Backend | null = null;

  private url: string;

  private user: User | null;

  private constructor() {
    const config = useRuntimeConfig();
    this.url = config.public.API_URL;
  }

  static getInstance(): Backend {
    if (!Backend.instance) {
      Backend.instance = new Backend();
    }
    return Backend.instance;
  }

  async getUser(): Promise<User | null> {
    if (!this.user) {
      try {
        const firebaseUser = await getFirebaseUser();
        this.accessToken = firebaseUser.accessToken;
        this.user = new User(firebaseUser);
      } catch (e) {
        // ts-ignore
      }
    }

    return this.user;
  }

  async signOut() {
    const auth = getAuth();
    await signOut(auth);
    this.user = null;
  }

  async getApiKey(refresh = false) {
    const body: any = {};
    body.refresh = refresh;
    const token = await getAuth().currentUser?.getIdToken(true) as string;
    const response: any = await $fetch(`${this.url}/partner/api-key`, {
      method: 'POST',
      body,
      headers: {
        'x-api-key': token,
      },
    });
    return response.data?.apiKey;
  }
}
