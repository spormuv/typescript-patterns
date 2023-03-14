"use strict";
class User_ {
}
class Auth {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    authUser(user) {
        return this.strategy.auth(user);
    }
}
class JWTStrategy {
    auth(user) {
        if (user.jwtToken) {
            // ...
            return true;
        }
        return false;
    }
}
class GithubStrategy {
    auth(user) {
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
