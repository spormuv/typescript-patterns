"use strict";
class DeliveryItem {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    getItemPrices() {
        return this.items.reduce((acc, i) => (acc += i.getPice()), 0);
    }
}
class DeliveryShop extends DeliveryItem {
    constructor(deliveryFee) {
        super();
        this.deliveryFee = deliveryFee;
    }
    getPice() {
        return this.getItemPrices() + this.deliveryFee;
    }
}
class Package extends DeliveryItem {
    getPice() {
        return this.getItemPrices();
    }
}
class Product extends DeliveryItem {
    constructor(price) {
        super();
        this.price = price;
    }
    getPice() {
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
