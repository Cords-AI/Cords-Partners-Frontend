import User from "./User";

export default class Backend {
  private static instance: Backend | null = null;

  private url: string;

  private user: User;

  private constructor() {
    const config = useRuntimeConfig();
    this.url = config.API_URL_SSR || config.public.API_URL;
  }

  static getInstance(): Backend {
    if (!Backend.instance) {
      Backend.instance = new Backend();
    }
    return Backend.instance;
  }

  async getUser(): Promise<User> {
    if(!this.user) {
      const response = await $fetch(`${this.url}/user`);
      this.user = new User(response);
    }

    return this.user;
  }
}
