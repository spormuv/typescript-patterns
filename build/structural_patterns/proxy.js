"use strict";
class PaymentAPI {
    constructor() {
        this.data = [{ id: 1, sum: 1000 }];
    }
    getPaymentDetail(id) {
        return this.data.find((d) => d.id === id);
    }
}
class PaymentAccessProxy {
    constructor(api, userID) {
        this.api = api;
        this.userID = userID;
    }
    getPaymentDetail(id) {
        if (this.userID === 1) {
            return this.api.getPaymentDetail(id);
        }
        console.log('Attempt to get data of a payment!');
        return undefined;
    }
}
// implementation
const proxy = new PaymentAccessProxy(new PaymentAPI(), 1);
console.log(proxy.getPaymentDetail(1));
const proxy2 = new PaymentAccessProxy(new PaymentAPI(), 2);
console.log(proxy2.getPaymentDetail(1));
