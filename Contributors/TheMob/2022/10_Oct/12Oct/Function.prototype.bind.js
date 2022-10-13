// `bind(fn, context, arg1, arg2, /*...*/, argN)`

// context = this = `this` context

function sayGreetingWithName(greeting, anotherGreeting) {
	return greeting + " " + anotherGreeting + " " + this.name;
}

class Kitten {
	constructor() {
		this.name = 'fluffy'
	}

}

function bind(fn, context, ...args) {
	return (...moreArgs) => {
		return fn.call(context, ...args, ...moreArgs)
	}
}

const kitty = new Kitten();

const boundFunction = bind(sayGreetingWithName, kitty, "Recursion")

console.log(boundFunction("Queue"))
