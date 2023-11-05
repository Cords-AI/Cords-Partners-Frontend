import User from './User';

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
        const response = await useFetch(`${this.url}/user`, {
          credentials: 'include',
        });
        this.user = new User(unref(response.data));
      } catch (e) {
        // ts-ignore
      }
    }

    return this.user;
  }

  async signIn(token: string) {
    const response = await useFetch(`${this.url}/user/sign-in`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  async signOut() {
    await useFetch(`${this.url}/user/sign-out`, {
      method: 'POST',
      credentials: 'include',
    });
    this.user = null;
  }

  async getApiKey(refresh = false) {
    const body: any = {};
    body.refresh = refresh;
    const response = await $fetch(`${this.url}/api-key`, {
      method: 'POST',
      credentials: 'include',
      body: body
    });
    return response.data?.apiKey;
  }
}
