// For example, suppose we are given the string `daily`. The best we can create in this case is `ailyd`.
// split the string into an array
// item at index of 0, move it to the end
// repeat last step many times to generate words
// find the word that comes earliest alphabetically
function rotate(string) {
    // split the string into an array
    var arr = string.split('');
    // item at index of 0, move it to the end
    var deletedItem = arr.splice(0, 1);
    arr.push(deletedItem[0]); // ['a', 'i', 'l', 'y', 'd']
    return arr.join(''); // 'ailyd'
}
function rotateToSmallestString(string) {
    // rotate times: length of string - 1
    var rotations = [string];
    var lastRotatedString = string;
    for (var i = 0; i < string.length - 1; i++) {
        var rotated = rotate(lastRotatedString);
        lastRotatedString = rotated;
        rotations.push(rotated);
    }
    var sorted = rotations.sort();
    return sorted[0];
}
console.log(rotateToSmallestString('daily'));
console.log(rotateToSmallestString('lexicographically'));
