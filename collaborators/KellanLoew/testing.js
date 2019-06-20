var assert = require('assert');

function Add(string){
    
    if(string == ""){
        return 0;
    }

    var numbers = string.split(",");
    var num1 = parseInt(numbers[0]);
    
    if(numbers.length == 1)    {
        return num1;
    }
    var num2 = parseInt(numbers[1]);
    return num1 + num2;
}

//console.log(Add("4,0"));

assert.equal(Add(""), 0);
assert.equal(Add("3"), 3);
assert.equal(Add("4,2"), 6);
//assert.equal(Add("4,2,8"), 14);