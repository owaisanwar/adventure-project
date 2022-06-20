
// FILL THIS OUT
const { Item } = require('./item');
class Food extends Item {
  constructor(name, descripttion) {
    super(name, descripttion);
  }
}

module.exports = {
  Food,
};
