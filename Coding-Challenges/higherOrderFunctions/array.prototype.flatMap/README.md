# Array.prototype.flatMap

Implement the [`flatMap`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap) function on the JavasScript Array prototype.

For example, given:

```
const arr1 = [1, 2, 1];

const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));

```

result is expected to be `[1, 2, 2, 1]`, since the `[2, 2]` array was flattened after it was mapped into the result.


