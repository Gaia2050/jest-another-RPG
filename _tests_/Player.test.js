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