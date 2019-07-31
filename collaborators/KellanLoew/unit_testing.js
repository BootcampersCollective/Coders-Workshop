var assert = require('assert'); //Access Node's test library

function Add(string){

    var numbers = string.split(",");
    var length = numbers.length;
    
    for(var i = 0; i < length; i++){
        if(numbers[i].includes("\n")){
            newLine = numbers[i].split("\n");
            for(var j = 1; j < newLine.length; j++){
                numbers.push(newLine[j]);
                length ++;
            }
        }
    }

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
assert.equal(Add("1\n4,2"), 7);
assert.equal(Add("4,2\n8\n5"), 19);
assert.equal(Add("4,2\n8\n5,1"), 20);