// Given a function that generates perfectly random numbers between 1 and k (inclusive), 
// where k is an input, write a function that shuffles a deck of cards represented as an array using only swaps.

const generateArray = k => {
  return Array.from(Array(k).keys()).map(num => num + 1);
}

// taking k number of cards => array<?> (shuffle)
const shuffle = (array) => {
    array.forEach((item, i) => {
        let j = generateRandomNumber(array.length) - 1; // random index to switch with i
        let temp = item;
        array[i] = array[j];
        array[j] = temp;
    })
    return array;
}

// generate a number betweeen (1,k)
const generateRandomNumber = k => {
  return Math.ceil(Math.random() * k);
}

function main() {
  let deck = generateArray(52);
  console.log(deck);
  console.log(shuffle(deck));
}

main()