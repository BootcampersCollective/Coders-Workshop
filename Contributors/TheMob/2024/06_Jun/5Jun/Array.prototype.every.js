const assert = require('assert');
/*
E.g. `every([1, 2, 3], (val) => val < 4)` should return `true`. `every([1, 2, 3], (val) => val < 3)` should return `false`.

create result variable
loop through array
run function at every step
	dependent on the output, modify result
	false: --

if any one is false, return false
otherwise: keep going

*/

class CashRegister {
    constructor(maxTransaction){
        this.amount = 0;
        this.transactions = [];
		this.maxTransaction = maxTransaction;
    }

    makeTransaction(amount){
        this.transactions.push(amount);
        this.amount += amount;
    }

}

function areAllTransactionsValid(cashReg){

    return every(cashReg.transactions, function (e) { return e < this.maxTransaction }, cashReg)

}

// tests for this-bound `every`
const bryansCashReg = new CashRegister(500);
bryansCashReg.makeTransaction(1);
bryansCashReg.makeTransaction(2);
bryansCashReg.makeTransaction(3);
console.log(areAllTransactionsValid(bryansCashReg));

function every(arr, func, thisArg = null) {
    let index = 0;
    if (!arr.length) return true;
	const boundFunction = func.bind(thisArg)
    do {
        elementStatus = boundFunction(arr[index]);
        if (!elementStatus) {
            return false;
        }
        index++;
    } while (elementStatus && (index <= arr.length-1));
    return true;
}

// tests for non-this-bound `every`
/*
assert.deepStrictEqual(every([1, 2, 3], (val) => val < 4), true)
assert.deepStrictEqual(every([1, 2, 3], (val) => val > 4), false)
assert.deepStrictEqual(every([], (val) => val > 4), true)
console.log('all tests passed!')
*/
