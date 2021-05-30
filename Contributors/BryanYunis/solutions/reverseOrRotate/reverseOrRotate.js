const assert = require('assert');
const take = (n) => (str) => str.slice(0, n);
const drop= (n) => (str) => str.slice(str.length - n);
const rotateOneLeft = (str) => drop(str.length - 1)(str).concat(take(1)(str));
const cube = (n) => Math.pow(n, 3);
const cubeSumReducer = (a, c) => Number(a + cube(c));
const stringReduce = (str, reducer, init = '') => toArray(str).reduce(reducer, init);
const sumCubed = (str) => stringReduce(str, cubeSumReducer).toString();
const isEven = (n) => n % 2 === 0;
const sumCubedIsEven = (str) => isEven(sumCubed(str));
const toArray = (str) => str.split('');
const reverseString = (str) => toArray(str).reverse().join('');


const revrot = (numString, interval, result = '') => {
    if (interval === 0) return '';
    const chunk = take(interval)(numString);
    return numString.length === 0 || numString.length < interval
        ? result
        : revrot(
            drop(numString.length - interval)(numString),
            interval,
            sumCubedIsEven(chunk)
                ? result.concat(reverseString(chunk))
                : result.concat(rotateOneLeft(chunk)
        ));
}

// main function test
assert.strictEqual(revrot("123456987654", 6), "234561876549");
assert.strictEqual(revrot("123456987653", 6), "234561356789");
assert.strictEqual(revrot("66443875", 8),"64438756");
assert.strictEqual(revrot("", 8),"");
assert.strictEqual(revrot("123456779", 0),"" );
assert.strictEqual(revrot("563000655734469485", 4),"0365065073456944");
assert.strictEqual(revrot("66443875", 4),"44668753");
assert.strictEqual(revrot("664438769", 8),"67834466");
assert.strictEqual(revrot("123456779", 8),"23456771");

// utils test
const take5 = take(5);
const drop2 = drop(2);
assert.strictEqual(take5('kitten'), 'kitte');
assert.strictEqual(drop2('kitten'), 'en');
assert.strictEqual(sumCubed('123'), '36');
assert.strictEqual(reverseString(take(3)('12345')), '321');
assert.strictEqual(sumCubedIsEven('12'), false);
assert.strictEqual(sumCubedIsEven('123'), true);
assert.strictEqual(rotateOneLeft('12345'), '23451');

console.log('All tests passed!');
    
