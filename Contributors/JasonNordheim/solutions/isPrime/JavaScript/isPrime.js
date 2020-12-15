
/**
 * determines if the provided number is a prime number 
 * @param {number} number 
 * @returns {boolean} 
 */
const isPrime = (number) => {
  /* Eliminate edge cases ....*/

  //  must be a whole number  
  if (typeof(number) !== 'number' && number !== Math.floor(number)) return false
  // must be greater than 3 
  else if (number < 3) return false  
  // if dividing by 2 has no remainder, it is not a prime number  
  else if (number % 2 === 0) return false 
  // if it is the first prime number return true 
  else if (number === 3) return true 


  /* check each number less than the half provided number 
   * to see if it can be divided without a remainder  */
  let denominator = 4 
  const half = Math.floor(number / 2)
  do {
    // if it can be divided evenly by a smaller 
    // number, it cannot be prime 
    if(number % denominator === 0) return false 
    
    // go to the next possible number
    denominator++;  
  } while (denominator < half);
  
  /* must be a prime number */
  return true 
}

module.exports = { isPrime }


