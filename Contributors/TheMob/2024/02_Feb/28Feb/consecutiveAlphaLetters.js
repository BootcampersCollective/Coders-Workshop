
// For example, input `abc` should return `true`, since it contains a, b, c consecutively in that order.
// Input `abd` should return false, since c is missing.

const isConsecutive = (str) => {
    for(let i=0; i < str.length -1; i++){
        const char1 = str.charCodeAt(i);
        const char2 = str.charCodeAt(i+1);
        
        if(char2 - char1 === 1){
            return false; 
        }
    }

    return true;
}
console.log(isConsecutive('abc'))
console.log(isConsecutive('abd'))
