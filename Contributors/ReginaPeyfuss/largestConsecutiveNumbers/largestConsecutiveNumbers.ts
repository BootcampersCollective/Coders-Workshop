
export const largestConsecutiveNumbers = (arr: number[]) => {
    let hashMap = {};
    arr.forEach(item => hashMap[item] = item);
    let count = 1;
    let answer = 0;
    let i = 0;
    const keys = Object.keys(hashMap).map( item => parseInt(item));

    while (i < keys.length-1) {
        while (keys[i]+1 == keys[i+1]) {
            count++;
            i++;
        }
        if (count > answer) {
            answer = count;
            count = 1;
            i--;
        }
        i++;
    }
    return answer;

}