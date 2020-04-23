
export const largestConsecutiveNumbers = (arr: number[]) => {
    let hashMap = {};
    arr.forEach(item => hashMap[item] = item);
    let count = 0;
    let answer = 0;
    let i = 0;
    let checkedItems = 0;

    while (i < arr.length && checkedItems < arr.length) {
        let num = arr[i];
        while (hashMap[--num]) {
            checkedItems++;
            count++;
        }
        while (hashMap[++num]) {
            checkedItems++;
            count++;
        }

        if (count > answer) {
            answer = count;
            count = 0;
        }
    }
    return answer;
}