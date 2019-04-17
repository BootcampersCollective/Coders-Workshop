
function product_array(params) {
    var numZeroes = 0;
    var product = 1;
    var returnArray = [];

    for(i = 0; i < params.length; i++){
        if (params[i] != 0){
            product = product * params[i];
        }
        else{
            numZeroes ++;
        }
    }
    for(i = 0; i < params.length; i++){
        if((numZeroes > 1) || ((params[i] != 0) && (numZeroes == 1))){
            returnArray.push(0);
        }
        else if((params[i] != 0) && (numZeroes == 0)){
            var curElement = product / params[i];
            returnArray.push(curElement);
        }
        else if((params[i] == 0) && (numZeroes == 1)){
            returnArray.push(product);
        }
    }
    return returnArray;
}

myList = [8, 6, 0, 6];
console.log(product_array(myList));