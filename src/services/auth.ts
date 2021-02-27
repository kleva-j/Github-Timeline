interface Auth  {
  authenticated: Boolean;
}

class Auth implements Auth {
  constructor() {
    this.authenticated = true;
  }

  login(cb: Function): void {
    this.authenticated = true;
    cb();
  }

  logout(cb: Function): void {
    this.authenticated = false;
    cb();
  }

  isAuthenticated(): Boolean {
    return this.authenticated;
  }
}

export default new Auth();