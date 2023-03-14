class User_ {
  githubToken: string;
  jwtToken: string;
}

interface AuthStrategy {
  auth(user: User_): boolean;
}

class Auth {
  constructor(private strategy: AuthStrategy) {}

  setStrategy(strategy: AuthStrategy) {
    this.strategy = strategy;
  }

  public authUser(user: User_): boolean {
    return this.strategy.auth(user);
  }
}

class JWTStrategy implements AuthStrategy {
  auth(user: User_): boolean {
    if (user.jwtToken) {
      // ...
      return true;
    }
    return false;
  }
}

class GithubStrategy implements AuthStrategy {
  auth(user: User_): boolean {
    if (user.githubToken) {
      // ...
      return true;
    }
    return false;
  }
}

// implementation
const user_ = new User_();
user_.jwtToken = 'token';
const auth_ = new Auth(new JWTStrategy());
console.log(auth_.authUser(user_));
auth_.setStrategy(new GithubStrategy());
console.log(auth_.authUser(user_));
