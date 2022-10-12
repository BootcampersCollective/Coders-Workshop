# Function.prototype.bind

Reimplement [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).

Instead of modifying the Function prototype chain, create a standalone function with the following signature:

`bind(fn, context, arg1, arg2, /*...*/, argN)`
