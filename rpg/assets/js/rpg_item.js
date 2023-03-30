console.log('item.js loaded');


export class Item {

  constructor(Object) {
    this.name = Object.name;
    this.bonus = Object.bonus;
    this.price = Object.price;
  }

  getName() {
    return this.name;
  }

  getBonus() {
    return this.bonus;
  }

  getPrice() {
    return this.price;
  }


}

