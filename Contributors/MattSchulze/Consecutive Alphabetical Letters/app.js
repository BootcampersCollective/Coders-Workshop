const alphabet = "abcdefghijklmnopqrstuvwxyz";

function checkAlphabetical(string) {
    let found = alphabet.search(string);

    (found !== -1) ? console.log('Alphabetical') : console.log('Not Alphabetical')
    
}