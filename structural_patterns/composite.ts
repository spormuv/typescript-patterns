abstract class DeliveryItem {
  items: DeliveryItem[] = [];

  addItem(item: DeliveryItem) {
    this.items.push(item);
  }

  getItemPrices(): number {
    return this.items.reduce(
      (acc: number, i: DeliveryItem) => (acc += i.getPice()),
      0
    );
  }
  abstract getPice(): number;
}

class DeliveryShop extends DeliveryItem {
  constructor(private deliveryFee: number) {
    super();
  }

  getPice(): number {
    return this.getItemPrices() + this.deliveryFee;
  }
}

class Package extends DeliveryItem {
  getPice(): number {
    return this.getItemPrices();
  }
}

class Product extends DeliveryItem {
  constructor(private price: number) {
    super();
  }

  getPice(): number {
    return this.price;
  }
}

// implementation
const shop = new DeliveryShop(100);
shop.addItem(new Product(1000));

const pack1 = new Package();
pack1.addItem(new Product(250));
pack1.addItem(new Product(300));
shop.addItem(pack1);

const pack2 = new Package();
pack2.addItem(new Product(30));
shop.addItem(pack2);

console.log(shop.getPice());
