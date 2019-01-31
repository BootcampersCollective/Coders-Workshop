const toString = (input) => input.toString();

const deleteZero = (input) => toString(input).split('').filter(value => value > 0 )

const reverse = (number) => +toString(deleteZero(number).reverse().join(''));

console.log(reverse(1048));

