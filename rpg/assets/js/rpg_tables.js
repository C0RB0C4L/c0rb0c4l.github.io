console.log('tables.js loaded');

export const items = [
  {
    "name": "potion de soins",
    "bonus": {
      "life": 50
    },
    "price": 20
  },
  {
    "name": "épée courte",
    "bonus": {
      "minDamage": 5,
      "maxDamage": 10
    },
    "price": 50
  },
  {
    "name": "hache",
    "bonus": {
      "minDamage": 1,
      "maxDamage": 15
    },
    "price": 50
  },
  {
    "name": "gilet de cuir",
    "bonus": {
      "defense": 10
    },
    "price": 50
  },
  {
    "name": "chemise de mailles",
    "bonus": {
      "defense": 25
    },
    "price": 150
  },
]



export const bestiary = [
  {
     "name": "gobelin",
     "maxLife": 20,
     "minDmg": 5,
     "maxDmg": 10,
     "initiative" : 1,
     "ability" : [],
     "gold" : 10
  },
  {
     "name": "orque",
     "maxLife": 40,
     "minDmg": 10,
     "maxDmg": 15,
     "initiative" : 1,
     "ability" : [],
     "gold" : 25
  },
  {
     "name": "araignée géante",
     "maxLife": 30,
     "minDmg" : 5,
     "maxDmg" : 15,
     "initiative" : 3,
     "ability" : [],
     "gold" : 20
  },
  {
     "name": "troll",
     "maxLife": 100,
     "minDmg" : 15,
     "maxDmg" : 30,
     "initiative" : 1,
     "ability" : [],
     "gold" : 200
  }
]