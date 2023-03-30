console.log('monster.js loaded');


export class Monster {

  constructor(Object) {
    this.name = Object.name;
    this.maxLife = Object.maxLife
    this.life = Object.maxLife;
    this.minDmg = Object.minDmg;
    this.maxDmg = Object.maxDmg;
    this.initiative = Object.initiative;
    this.ability = Object.ability;
    this.gold = Object.gold;
  }

  getName() {
    return this.name;
  }

  getMaxLife() {
    return this.maxLife;
  }

  getLife() {
    return this.life;
  }

  setLife(value) {
    this.life = value;
  }

  getMinDmg() {
    this.minDmg = value;
  }

  getMaxDmg() {
    this.maxDmg = value;
  }

  getInitiative() {
    return this.initiative;
  }

  getAbility() {
    return this.ability;
  }

  getGold() {
    return this.gold;
  }


}

