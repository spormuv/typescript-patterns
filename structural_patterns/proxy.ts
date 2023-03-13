interface IPaymentAPI {
  getPaymentDetail(id: number): IPaymentDetail | undefined;
}

interface IPaymentDetail {
  id: number;
  sum: number;
}

class PaymentAPI implements IPaymentAPI {
  private data = [{ id: 1, sum: 1000 }];
  getPaymentDetail(id: number): IPaymentDetail | undefined {
    return this.data.find((d) => d.id === id);
  }
}

class PaymentAccessProxy implements IPaymentAPI {
  constructor(private api: PaymentAPI, private userID: number) {}

  getPaymentDetail(id: number): IPaymentDetail | undefined {
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
