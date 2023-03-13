interface Prototype<T> {
  clone(): T;
}

class UserHistory implements Prototype<UserHistory> {
  createdAt: Date;
  constructor(public email: string, public name: string) {
    this.createdAt = new Date();
  }

  clone(): UserHistory {
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
