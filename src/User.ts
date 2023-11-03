export default class User {
  public id: string;

  private initials: string;

  private name: string;

  private email: string;

  constructor(data: any) {
    this.id = data.id;
    this.initials = data.initials;
    this.name = data.name;
    this.email = data.email;
  }

  getAvatar() {
    return null;
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
