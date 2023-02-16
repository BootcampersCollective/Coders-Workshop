
// Given a function that generates perfectly random numbers between 1 and k (inclusive),
// where k is an input, write a function that shuffles a deck of cards represented as an array using only swaps.


function shuffle(arr) {
	// go through the array, swap each item with the item at a random index
    arr.forEach((e, index) => {
        let temp = e
        let tempIndex = rndNum(arr.length - 1)
        arr[index] =  arr[tempIndex]
        arr[tempIndex] = temp
        })
}

function shuffleWithSort(arr) {
    arr.sort((a,b) => 0.5 - Math.random())
}

function rndNum(k) {return Math.floor(Math.random() * k)}

const deck = Array.from(Array(36).keys())


console.log(deck)
shuffle(deck)
console.log(deck)
