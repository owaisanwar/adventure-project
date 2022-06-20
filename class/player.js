const { Food } = require("./food");
const { Item } = require("./item");

class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {
        // Fill this in
        this.items.push(this.currentRoom.getItemByName(itemName));
        let indexOf = this.currentRoom.items.indexOf(this.currentRoom.getItemByName(itemName));
        this.currentRoom.items.splice(indexOf,1);
    }

    dropItem(itemName) {
        // Fill this in
        this.currentRoom.items.push(this.getItemByName(itemName));
        let indexOf = this.items.indexOf(this.getItemByName(itemName));
        this.items.splice(indexOf, 1);
    }

    eatItem(itemName) {
        // Fill this in
        let indexOf = this.items.indexOf(this.getItemByName(itemName))
        if(this.getItemByName(itemName) instanceof Food) {
            this.items.splice(indexOf, 1);
        }

    }

    getItemByName(name) {
        // Fill this in
        return this.items.find((el) => el.name === name);
    }
}

module.exports = {
  Player,
};
