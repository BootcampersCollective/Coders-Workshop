// Create a data structure that performs all the following operations in O(1) time:
// `plus`: Add a key with value 1. If the key already exists, increment its value by one.  
// `minus`: Decrement the value of a key. If the key's value is currently 1, remove it.  
// `get_max`: Return a key with the highest value.  
// `get_min`: Return a key with the lowest value.

// { apples: 12 }
// constructor - starts as empty dictionary: this.min and this.max to keep track of current
// plus/minus: see if we need to adjust the key and value
// functions to update minimum and maximum

class MinMaxStruct {
	constructor() {
		this.struct = {};
		this.min = Infinity;
		this.max = -Infinity; // "this" binds the variable to the class
		this.minKey = '';
		this.maxKey = '';
	}
	plus(key) {
		if (key in this.struct) {
			this.struct[key] += 1;
		} else {
			this.struct[key] = 1;
		}

		if (this.struct[key] > this.max) {
			this.max = this.struct[key];
			this.maxKey = key;
		}
		if (this.min === Infinity) {
			this.min = this.struct[key];
			this.minKey = key;
		}
	}
	minus(key) {
		if (key in this.struct) {
			this.struct[key] -= 1;
			if (this.struct[key] === 0) {
				delete this.struct[key];
			}
		}

		if (this.struct[key] < this.min) {
			this.min = this.struct[key];
			this.minKey = key;
		}
		if (this.max === -Infinity) {
			this.max = this.struct[key];
			this.maxKey = key;
		}
	}
	getMin() {
		return this.minKey;
	}
	getMax() {
		return this.maxKey;
	}
}

const myStruct = new MinMaxStruct();

myStruct.plus('apples')
myStruct.plus('apples')
myStruct.plus('bananas')
myStruct.plus('bananas')
myStruct.plus('bananas')
myStruct.plus('bananas')
myStruct.plus('kittens')

// this *kind of* works, revisit at another time before 8 pm :)
console.log(myStruct.struct)
console.log(myStruct.getMin())
console.log(myStruct.getMax())
