// Build a vending machine

// Needs
// * Take money
// * Give correct change back
// * Update inventory
// * Items
//     Price, location, quantity, title, SKU
// * Slots
// * Inventory
// * Money Inputs
// * Prevent dispensing if there is no item there
// * Some kind of view

// Methods:
// * Dispense and decrement inventory count Does it dispense if nothing is there
// * Take in money
// * Give out money
// * Keep track of money in/out
// * Take input from user
// * Way to calculate and validate currency
// * Anti-shake method

// User: Trying to get something, what is the user purchasing

// Full stack? Or just stay in RAM?

// Item: {
//     name: String,
//     price: Number,
//     id: Number,
//     quantity?,
// }

// Slot {
//     item: <Item>,
//     location: String,
//     quantity: Number,
// }

// VendingMachine: {
//     slots: {<Slot>},
//     bank: Number,
// }

// Display: {
//     item: <Item>,
// }

class Item {
  constructor(id, name, price) {
    // have some other function handling IDs, which will generate and pass into Item constructor
    this.id = id
    this.name = name
    this.price = price
  }
}

class Slot {
  constructor(item, location, quantity) {
    this.item = item
    this.location = location
    this.quantity = quantity
  }
}

class VendingMachine {
  // method to dispense
  constructor(slots, bank) {
    this.slots = slots
    this.bank = bank
  }
  // make method, send it an id(location), give item back item
  dispense(location) {
    const currentSlot = this.slots[location]
    return currentSlot.quantity > 0 ? currentSlot.item.name : 'empty slot' //const buttercup = new Item(id, 'Buttercup', 9.99)
    //return buttercup
    //return something.getItemFor(id)
  }
}

class Display {
  constructor() {}
}

// Creating an item:
// id, price, name
const buttercup = new Item(1, 'Buttercup', 9.99)
const snickers = new Item(2, 'Snickers', 3.99)
const milkyWay = new Item(3, 'Milky Way', 4.33)
// Creating a slot:
// item, location, quantity
const A1Slot = new Slot(buttercup, 'A1', 0)
const B2Slot = new Slot(snickers, 'B2', 3)
const C4Slot = new Slot(milkyWay, 'C4', 1)

const theVendingMachine = new VendingMachine({ A1: A1Slot, B2: B2Slot, C4: C4Slot }, 2000)

console.log(theVendingMachine.dispense('A1'))
