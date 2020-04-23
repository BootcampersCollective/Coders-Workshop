
export const smallestWindow = (arr: number[]) => {
    let startIndex = 0;
    let endIndex = arr.length-1;
    let answer = [];
    let diff = arr.length-1;
    let i = 0;

    while (i < arr.length-1) {
        while(arr[startIndex] <= arr[i+1]){
            i++;
            startIndex = i;
        }
        while (arr[startIndex] > arr[i+1]){
            i++;
            endIndex = i;
        }

        if (startIndex < endIndex && (endIndex - startIndex) < diff){
            diff = endIndex - startIndex;
            answer[0] = startIndex;
            answer[1] = endIndex;
        }
    }
    return answer;
}