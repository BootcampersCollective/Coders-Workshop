# Make Change

Write a function that takes a `price` and `amountGiven` from a hypothetical customer and returns the appropriate change that should be returned. The return value should be an object with the following properties and their respective values: `dollars`, `quarters`, `dimes`, `nickels`, `pennies`. Your function should return the least number of items possible, however assume you only have dollar bills to give back.

For example, given price `9.49` and amountGiven `10`, your function should return `{ dollars: 0, quarters: 2, dimes: 0, nickels: 0, pennies: 1 }`.

Given price `1` and amountGiven `10`, return `{ dollars: 9, quarters: 0, dimes: 0, nickels: 0, pennies: 0 }`
