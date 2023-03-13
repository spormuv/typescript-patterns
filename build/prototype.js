"use strict";
class UserHistory {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.createdAt = new Date();
    }
    clone() {
        let target = new UserHistory(this.email, this.name);
        target.createdAt = this.createdAt;
        return target;
    }
}
// implementation
let user = new UserHistory('email', 'Peter');
console.log(user);
let user2 = user.clone();
user2.email = 'email2';
console.log(user2);