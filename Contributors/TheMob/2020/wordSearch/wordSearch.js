// Given a 2D matrix of characters and a target word, write a function that returns whether the word can be found in the matrix by going left-to-right, or up-to-down.

// For example, given the following matrix:

// ```js
[['F', 'A', 'C', 'I'],
 ['O', 'B', 'Q', 'P'],
 ['A', 'N', 'O', 'B'],
 ['M', 'A', 'S', 'S']]
// ```

// and the target word `'FOAM'`, you should return `true`, since it's the leftmost column. Similarly, given the target word `'MASS'`, you should return `true`, since it's the last row.

// string might be too long, fail right away
// for every character, 

const wordSearch = (array, word) => {
    const wordLength = word.length
    if(array.length < wordLength && array[0].length < wordLength) {
        console.log('here1')
        return false
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            // finding a pivot
            if (array[i].length - j < wordLength && array[j].length - j < wordLength) {
        console.log('here2')

                return false
            }
            if(array[i][j] === word[0]) {
                // pivot found
               const horizontalWord =  array.slice(i, i + wordLength).join('')
               console.log('horizontal word', horizontalWord)
               if (horizontalWord.match(word)) {
                   return true
               }
               let verticalWord = ''
               for (let k = 1; k < array.length; k++) {
                   verticalWord += array[i+ k][j]
               }
               if (verticalWord.match(word)) {
                   return true
               }
            }
        console.log('here3')

            return false
        }
    }
}

console.log(wordSearch([
['F', 'A', 'C', 'I'],
['O', 'B', 'Q', 'P'],
['A', 'N', 'O', 'B'],
['M', 'A', 'S', 'S']
], 'FOAM'))