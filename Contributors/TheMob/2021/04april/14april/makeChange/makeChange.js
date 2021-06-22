// Write a function that takes a `price` and `amountGiven` from a hypothetical customer
// and returns the appropriate change that should be returned.
// The return value should be an object with the following properties and their respective values:
// `dollars`, `quarters`, `dimes`, `nickels`, `pennies`.
// Your function should return the least number of items possible,
// however assume you only have dollar bills to give back, but have all change.

// For example, given price `9.49` and amountGiven `10`, your function should return
// `{ dollars: 0, quarters: 2, dimes: 0, nickels: 0, pennies: 1 }`.

// Given price `1` and amountGiven `10`, return
// `{ dollars: 9, quarters: 0, dimes: 0, nickels: 0, pennies: 0 }`

// questions we might ask: can we be certain of our inputs? will price always be less than amountGiven?

// `5.50` would be represented as
/*
{
  dollars: 5,
  quarters: 2,
  dimes: 0,
  nickels: 0,
  pennies: 0,
}
*/
// convert change to pennies
// modulo 10
// modulo 5
// take down to next denomination
// get the difference
//
// 151 % 100 = 51

const makeChange = (price, amountGiven) => {
  let difference = amountGiven * 100 - price * 100
  const dollars = Math.floor(difference / 100)
  difference = difference % 100
  const quarters = Math.floor(difference / 25)
  difference = difference % 25
  const dimes = Math.floor(difference / 10)
  difference = difference % 10
  const nickels = Math.floor(difference / 5)
  difference = difference % 5
  const pennies = difference

  return { dollars, quarters, dimes, nickels, pennies }
}

//Solution Using While Loop
// const makeChange = (price, amountGiven) => {
//   const output = {}
//   let remainder = amountGiven * 100 - price * 100
//   output['$1'] = Math.floor(remainder / 100)
//   remainder = remainder % 100
//   let coins = [25,10,5,1]

//   for(let i = 0; i < coins.length; i++){
//     while(remainder >= coins[i]){
//       output[coins[i]] = Math.floor(remainder / coins[i])
//       remainder = remainder % coins[i] 
//     }  
//   }
//   return output
// }


console.log(makeChange(9.49, 10))
console.log(makeChange(29.97, 75.38)) // 45.41
