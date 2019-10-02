# Objects

JavaScript's fundamental datatype is the _object_. An object is a composite value: it aggregates
multiple values (primitive values or other objects) and allows you to store and retrieve those values by name.
An object is an unordered collection of _properties_, each of which has a name and a value. Property
names are strings, so we can say that objects map strings to values. This string-to-value mapping goes
by various names: you are probably already familiar with the fundamental data structure under the
name "hash", "hashtable", "dictionary," or "associative array." An object is more than a simple
string-to-value map, however. In addition to maintaining its own set of properties, a JavaScript
object also inherits the properties of another object, known as its "prototype." The methods of
an object are typically inherited properties, and this "prototypal inheritance" is a key feature
of JavaScript.

JavaScript objects are dynamic--properties can usually be added and deleted--but they can be used
to simulate the static objects and "structs" of statically typed languages. They can also be used
(by ignoring the value part of the string-to-value mapping) to represent sets of strings.

Any value in JavaScript that is not a string, a number, `true`, `false`, `null`, or `undefined`
is an object.

Objects are _mutable_ and are manipulated by reference rather than by value: if the variale `x`
refers to an object, and the code `let y = x;` is executed, te variable `y` holds a reference to
the same object, not a copy of that object. Any modifications made to the object through the
variable `y` are also visible through the variable `x`.

## Creating Objects

Object literals can be created with `new` key-word, or with the `Object.create()` function.

### Object Literals

An _object literal_ is a comma-separated list of colon-separated `name:value` pairs,
enclosed within curly braces. A property name is a JavaScript identifier or a string literal
(the empty string is allowed). A property value is any javaScript expression; the value of the
expression (it may be a primitive value or an object value) becomes the value of the property.

```javascript
const empty = {};   // An object with no properties.
const point = {     // Two properties.
    x: 0,
    y: 0
};

const point2 = {    // Another object literal with complex properties.
    x: point.x,
    y: point.y + 1
};

const shape = { // Non-identifier property names are quoted
    "main shape": "round",  // space in property name
    'sub-dimensions': 'multiple to infinite',    // punctuation in name
    "void": "the key to this value is a reserved word"  // reserved word name
};

console.log(shape); // {main shape: "round", sub-dimensions: "multiple to infinite",
                    //  void: "the key to this value is a reserved word"}
```

### Creating Objects with `new`

The `new` operator creates and initializes a new object. The `new` keyword must be
followed by a function invocation. A function used in this way is called a _constructor_ and
serves to initialize a newly created object. Core JavaScript includes built-in constructors
for native types.

```javascript
let o = new Object();    // An empty object: same as {}.
let a = new Array();     // An empty array: same as [].
let d = new Date();      // A Date for the current time.
let r = new Regex("js"); // A pattern matching object.
```

We can make our own constructor functions to initialize
newly create objects. We'll talk about that later.

### Prototypes

Every JavaScript object has a second JavaScript object
associated with it. This second object is known as a _prototype_,
and the first object inherits properties from the prototype.
All objects created by object literals have the same prototype object,
and we cn refer to this prototype object in JavaScript code as `Object.prototype`.
Objects created using the `new` key-word and a constructor invocation use the value of the `prototype` property of the
constructor function as their prototype. So the object created by `new Object()` inherits from `Objects.prototype`
just as the object created by`{}` does. Similarly, the object created by `new Array()` uses `Array.prototype` as its prototype, and the object created by `new Date()` uses
`Date.prototype` as its prototype.

`Object.prototype` is one of the rare objects that has no prototype: it does not inherit any properties.
Other prototype objects are normal ojects that do have a prototype.
All of the built-in constructors (and most user-defined constructors) have a prototype that inherits from `Object.prototype`.
For example, `Date.prototype` inherits properties from `Object.prototype`, so a Date object created by `new Date()` inherits properties from both `Date.prototype` and `Object.prototype`.
This link series of prototype objects is known as a _prototype chain_.

## Object.create()

`Object.create() is a static function, not a method invoked on individual objects. To use it, simply pass the desire prototype object:

```javascript
// o1 inherits properties x and y.
const o1 = Object.create({x: 1, y: 2});
```

We can pass `null` to create a new object that does not have a prototype, but if we do this, the newly created object will not inherit anything, not even basic methods like `toString()`.

```javascript
// o2 inherits no properties or methods.
const o2 = Object.create(null);
```

If we want to create an ordinary empty object (like the object returned by `{}` or `new Object`), pass `Object.prototype`:

```javascript
// o3 is like {} or new Object().
const o3 = Object.create(Object.prototype);
```

The ability to create a new object with an arbitrary prototype (put another way: the ability to create an
'heir' for any object) is a powerful one.

```javascript
// Creating a new object that inherits from a prototype

/*
inherit() returns a newly created object that inherits
properties from the prototype object p. Is uses the
Object.create if it is defined, and otherwise falls back to an older technique.
*/

function inherit(p) {
    if (p == null)          // p must be a non-null
       throw TypeError();

    if (Object.create)      // use Object.create()
        return Object.create(p);    // if it is defined

    let t = typeof p;       // Make sure p is an object

    if (t !== "object" && t !== "function")
        throw TypeError();

    function f() {};    // Define a dummy constructor.

    f.prototype = p;    // Set its prototype property
        return new f(); // Use it to create an 'heir' of p.
}
```
