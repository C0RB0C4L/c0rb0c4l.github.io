import { Player } from './rpg_player.js';
import { Monster } from './rpg_monster.js';
import { Item } from './rpg_item.js';
import { bestiary } from './rpg_tables.js';
import { items } from './rpg_tables.js';

const playerNameDisplay = document.getElementById('js-player-name');
const playerLifeDisplay = document.getElementById('js-lifebar-value');
const playerManaDisplay = document.getElementById('js-manabar-value');
const playerAmountReceived = document.getElementById('js-amount-received');
const playerPortrait = document.getElementById('js-picture-container');
const cssBar = document.querySelector(':root');

document.querySelector('#js-dmg').addEventListener('click', randomDamage);
document.querySelector('#js-heal').addEventListener('click', randomHeal);
document.querySelector('#js-amount-received').addEventListener('animationend', removeValueOnPortrait)

let player = new Player('Hero');
playerNameDisplay.innerText = player.getName();
playerLifeDisplay.innerText = player.getLife() + '/' + player.getMaxLife();
playerManaDisplay.innerText = '0/20';
cssBar.style.setProperty('--mana', '0%');
let count = 0;
setInterval(restoreManaOverTime, 1000);


function randomDamage() {
  if (player.getLife() > 0) {

    const rand = getRandomNumberBetween(17, 35);

    if (rand < player.getLife()) {
      player.setLife(player.getLife() - rand);
    } else {
      player.setLife(0);
    }

    playerLifeDisplay.innerText = player.getLife() + '/' + player.getMaxLife();
    cssBar.style.setProperty('--life', player.getLife().toString() + '%');
    displayValueOnPortrait(-rand)

  } else {

  }
}

function randomHeal() {
  if (player.getLife() !== player.getMaxLife()) {

    const rand = getRandomNumberBetween(17, 35);

    if ((rand + player.getLife()) > player.getMaxLife()) {
      player.setLife(player.getMaxLife());
    } else {
      player.setLife(player.getLife() + rand);
    }

    playerLifeDisplay.innerText = player.getLife() + '/' + player.getMaxLife();
    cssBar.style.setProperty('--life', player.getLife().toString() + '%');
    displayValueOnPortrait(+rand);

  } else {

  }
}



function displayValueOnPortrait(param) {

  playerAmountReceived.style.animation = "none";
  playerAmountReceived.offsetHeight;
  playerPortrait.style.animation = "none";
  playerPortrait.offsetHeight;

  if (param > 0) {
    playerAmountReceived.innerText = '+' + param;
    playerAmountReceived.className = 'app-green-text'
    playerAmountReceived.style.animation = "animate-heal 1.5s linear";
    playerPortrait.style.animation = "fade-portrait 1.5s linear";

  } else {
    playerAmountReceived.innerText = param;
    playerAmountReceived.className = 'app-red-text'
    playerAmountReceived.style.animation = "animate-damage 1.5s linear";
    playerPortrait.style.animation = "fade-portrait 1.5s linear";
  }
}

function removeValueOnPortrait() {
  playerAmountReceived.innerText = '';
  playerAmountReceived.removeAttribute('style');
  playerAmountReceived.removeAttribute('class');

}



function restoreManaOverTime() {
  if (count < 20) {
    count++;
    playerManaDisplay.innerText = count.toString()+'/20';
    cssBar.style.setProperty('--mana', (count*5).toString() + '%');
  }

}


function getRandomNumberBetween(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}




// test fonctions
/* let monstre = new Monster(bestiary[3]);
console.log(monstre);

let objet = new Item(items[0]);
player.addToInventory(objet); */

/* console.log(player.getInventory()[0].getBonus());
player.setWeapon(objet);
console.log(player); */

/* player.addToInventory(obj);
console.log(player);
console.log(player.getDefense());
player.setDefense(player.getInventory()[0].bonus['defense']);
console.log(player.getDefense()); */

/* player.addToInventory(obj);
player.addToInventory(ob);
player.addToInventory(obo); */

/* test tableau
let test = ["banane", "fraise"];
console.log(test);
test.push('framboise');
player.getInventory().splice(0,1);
console.log(test);
console.log('oui');
test.splice(1,1);
console.log(test);
//console.log(player); */


/**
 *
 * function commbat
 *while (player.life <0 or )
 *
 *
 *
 *
 */