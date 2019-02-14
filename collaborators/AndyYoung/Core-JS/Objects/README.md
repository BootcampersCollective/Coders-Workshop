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

