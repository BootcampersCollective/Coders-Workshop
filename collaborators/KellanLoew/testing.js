var assert = require('assert'); //Access Node's 

function Add(string){

    var numbers = string.split(",");
    var sum = 0; 
    
    for(var i = 0; i < numbers.length; i++){
        if(numbers[i] != "") sum += parseInt(numbers[i]);
    }
    console.log(sum)
    return sum;
}

//Test cases
assert.equal(Add(""), 0);
assert.equal(Add("34"), 34);
assert.equal(Add("3,"), 3);
assert.equal(Add("4,2"), 6);
assert.equal(Add("4,2,8,5"), 19);