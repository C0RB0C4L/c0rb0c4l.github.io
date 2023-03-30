console.log('player.js loaded');


export class Player {

  constructor(name) {
    this.name = name;
    this.maxLife = 100;
    this.life = this.maxLife;
    this.experience = 0;
    this.minDamage = 10;
    this.maxDamage = 15;
    this.defense = 0;
    this.initiative = 2
    this.weapon;
    this.armor;
    this.inventory = [];
  }

  getName() {
    return this.name;
  }

  getLife() {
    return this.life;
  }

  setLife(value) {
    this.life = value;
  }

  getMaxLife() {
    return this.maxLife;
  }

  setMaxLife(value) {
    this.maxLife = value;
  }

  getExperience() {
    return this.experience;
  }

  setExperience(value) {
    this.experience = value;
  }

  getMinDamage() {
    return this.minDamage;
  }

  setMinDamage(value) {
    this.minDamage = value;
  }

  getMaxDamage() {
    return this.maxDamage;
  }

  setMaxDamage(value) {
    this.maxDamage = value;
  }

  getDefense() {
    return this.defense;
  }

  setDefense(value) {
    this.defense = value;
  }

  getInitiative() {
    return this.initiative;
  }

  getWeapon() {
    return this.weapon;
  }

  setWeapon(Object) {
    this.weapon = Object;
  }

  getArmor() {
    return this.armor;
  }

  setArmor(Object) {
    this.armor = Object;
  }

  getInventory() {
    return this.inventory;
  }
  
  addToInventory(Object) {
    this.inventory.push(Object);
  }

  removeFromInventory(index) {
    this.inventory.splice(index, 1);
  }

}


