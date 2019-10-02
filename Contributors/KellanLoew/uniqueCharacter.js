var myString = "Kelan";

myArray = new Array(128).fill(null);

function unique(myString){
    result = true;
    for(var i = 0; i < myString.length; i++){
        var code = myString.charCodeAt(i);
        if (!myArray[code] && result !== false){
            myArray[code] = code;
            result = true;
        }
        else
            result = false;
    }
    return result
}

console.log(unique(myString))