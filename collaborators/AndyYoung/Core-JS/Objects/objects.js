// let empty = {};   // An object with no properties.
let point = {     // Two properties.
    x: 0,
    y: 0
};

let point2 = {    // Another object literal with complex properties.
    x: point.x,
    y: point.y + 1
};

let shape = { // Non-identifier property names are quoted
    "main shape": "round",  // space in property name
    'sub-dimensions': 'multiple to infinite',    // punctuation in name
    "void": "the key to this value is a reserved word"  // reserved word name
};

console.log(shape);

