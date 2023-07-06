/*
- Deletes all vowels
	create array of items to exclude, see if each item is in array
- Inserts a character `.` before each consonant
	create an array of consonants (whatever isn't a vowel)
- Replaces all uppercase consonants with corresponding lowercase ones
	convert to ascii, subtract (or add) a value to each one
	or use toLowercase()

For example, given `tour`, return `.t.r`. `aBAcAba` should return `.b.c.b`

*/

const stringTask=(str)=>{
    
    const vowels=['a', 'e', 'i', 'o', 'u']
	const vowelSet = new Set(['a', 'e', 'i', 'o', 'u'])
    let output=""
    for (let i=0; i<str.length; i++){
        if (!vowels.includes(str[i].toLowerCase())){
            
            output+="."+str[i].toLowerCase()
        }
    }
    return output
}

console.log(stringTask('aBAcAba'))
