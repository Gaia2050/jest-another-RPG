// const Player = require('../lib/Player');
const Player = require('../lib/Player');
const Potion = require('../lib/Potion');
jest.mock('../lib/Potion');
test('test', () => {
    const player = new Player('BugBear');
    expect(player.name).toBe('BugBear');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)]))
});
    


test('Gets player stats as an object',() => { 
    const player = new Player('BugBear');

    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');

});

test('gets inventory from player or return false', () => {
    const player = new Player('BugBear');

    expect(player.getInventory()).toEqual(expect.any(Array));

    player.inventory = [];

    expect(player.getInventory()).toEqual(false);
});

// test("gets player's health value", () => {
//     const player = new Player('BugBear');

//     expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
// });

test('checks if player is alive or not', () => {
    const player = new Player('BugBear');

    expect(player.isAlive()).toBeTruthy();

    player.health = 0;

    expect(player.isAlive()).toBeFalsy();
});


test('subtracts from players health', () => {
    const player = new Player('BugBear');
    const oldHealth = player.health;

    player.reduceHealth(5);

    expect(player.health).toBe(oldHealth - 5);

    player.reduceHealth(99999);
    
    expect(player.health).toBe(0);
});

// test('adds a potion to the inventory', () => {
//     const player = new Player('BugBear');
//     const oldCount = player.inventory.length;

//     player.addPotion(new Potion());

//     expect(player.inventory.length).toBeGreaterThan(oldCount);
// });

test('uses a potion from inventory', () => {
    const player = new Player('BugBear');
    player.inventory = [new Potion(), new Potion(), new Potion()];
    const oldCount = player.inventory.length;

    player.usePotion(1);

    expect(player.inventory.length).toBeLessThan(oldCount);
});