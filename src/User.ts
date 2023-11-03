export default class User {
  private static instance: User;

  public id: string;

  public static getInstance(): User {
    if (!User.instance) {
      User.instance = new User();
    }
    return User.instance;
  }
}
