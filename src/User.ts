export default class User {
  public id: string;

  private initials: string;

  private name: string;

  private email: string;

  private avatar: string;

  constructor(data: any) {
    this.id = data.id;
    this.initials = data.initials;
    this.name = data.name;
    this.email = data.email;
    this.avatar = data.avatar;
  }

  getAvatar() {
    return this.avatar;
  }

  getInitials() {
    return this.initials;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }
}
