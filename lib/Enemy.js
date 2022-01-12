const Potion = require('./Potion');


class Enemy extends Character {
    constructor(name, weapon) {
        super(name);
        // this.name = name;
        this.weapon = weapon;
        this.potion = new Potion();


        // this.health = Math.floor(Math.random() * 10 + 85);
        // this.strength = Math.floor(Math.random() * 5 + 5);
        // this.agility = Math.floor(Math.random() * 5 + 5);

    this.inventory = [new Potion('health'), new Potion()];

    }
    getDescription() {
        return `A ${this.name} holding a ${this.weapon} has appeared`;
    };
    
}

Enemy.prototype = Object.create(Character.prototype);

    const Character = require('./Character');


// function Enemy(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
//     this.potion = new Potion();

//     this.health = Math.floor(Math.random() * 10 + 85);
//     this.strength = Math.floor(Math.random() * 5 + 5);
//     this.agility = Math.floor(Math.random() * 5 + 5);

//     this.inventory = [new Potion('health'), new Potion()];
// }

// Enemy.prototype = Object.create(Character.prototype);

// const Character = require('./Character');
// Enemy.prototype.getHealth = function () {
//     return `The ${this.name}'s health is now ${this.health}!`;
// };


// const Character = require('./Character');
// Enemy.prototype.isAlive = function () {
//     if (this.health === 0) {
//         return false;
//     }
//     return true;
// };


// const Character = require('./Character');
// Enemy.prototype.getAttackValue = function () {
//     const min = this.strength - 5;
//     const max = this.strength + 5;

//     return Math.floor(Math.random() * (max - min) + min);
// };



// const Character = require('./Character');
const Player = require('./Player');
// Enemy.prototype.reduceHealth = function (health) {
//     this.health -= health;

//     if (this.health < 0) {
//         this.health = 0;
//     }
// };

// Enemy.prototype.getDescription = function() {
//     return `A ${this.name} holding a ${this.weapon} has appeared`;
// };

module.exports = Enemy;