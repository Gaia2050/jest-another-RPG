const Potion = require('../lib/Potion')
jest.mock('./lib/POtion');
module.exports = function() {
    this.name = 'health';
    this.value = 20;
};