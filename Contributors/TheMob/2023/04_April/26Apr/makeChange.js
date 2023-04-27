/*

For example, given price `9.49` and amountGiven `10.00`, your function should return `{ dollars: 0, quarters: 2, dimes: 0, nickels: 0, pennies: 1 }`.

Given price `1` and amountGiven `10`, return `{ dollars: 9, quarters: 0, dimes: 0, nickels: 0, pennies: 0 }`

*/

//input Price and amount given 
// units we can return: dollars(100cents): 0, quarters: 2(25cents), dimes(10cents): 0, nickels(5cents): 0, pennies(1cent): 1
//return the least about of dollars and coins for the given change needed

// create data structure of what we're returning
// assign numeric value to variables that represent denominations (dollars, coins)
// get the change needed  given - price
//   change /dollar > take remander / quarters > take remander / dimes...

const makeChange = (given, price) => {
        const output = { dollars: 0, quarters: 0, dimes: 0, nickels: 0, pennies: 0 }

        let change = (given - price) * 100; // 0.51 * 100 = 51 // (10 -1) * 100 = 900 =? 900/100 = 9 X 900-900
        const dollar = 100 
        const quarter = 25
        const dime = 10
        const nickel = 5
        const penny = 1 


        output.dollars = Math.floor(change/dollar); //0
        change = Math.round(change - output.dollars * 100); //50-52
        output.quarters = Math.floor(change/quarter); //2 remander of 1
        change = output.quarters ? Math.round((change - output.quarters * 25)) : change; 

        output.dimes = Math.floor(change/dime) //0
        change = output.dimes ?  (change - output.dimes * 10) : change;
        output.nickels = Math.floor(change/nickel) //0
        change = output.nickels ? (change - output.nickels * 5) : change;
        console.log({output, change})
        output.pennies = Math.floor(change/penny) //1
         
    
		return output;
}

// console.log(makeChange(10,1) )
//console.log(makeChange(10,9.49) ) 
//console.log(makeChange(10,9.30) )
console.log(makeChange(10,5.34) ) // { dollars: 4, quarters: 2, dimes: 1, nickels: 1, pennies: 1 }





