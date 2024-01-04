/*
* `record(timestamp)`: records a hit that happened at timestamp  
* `total()`: returns the total number of hits recorded  
* `range(lower, upper)`: returns the number of hits that occurred between timestamps lower and upper (inclusive)

console.log(new Date('2024-01-03T18:29:28') - new Date('2024-01-03T14:29:28') )

how often do we call range() and record()?
*/

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length -1;

    while(left <= right){
        const mid = Math.floor((left+right)/2);

        if(arr[mid] === target){
            console.log(arr[mid])
            return mid;
        } else if(arr[mid] > target){
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
} 

class HitCounter {
    constructor() {
        this.timestamps = [];
    }

    total() {
        return this.timestamps.length;
    }

    record(timestamp){
        this.timestamps.push(new Date(timestamp));
        this.timestamps.sort((a, b) => a-b)
    }

    range(lower, upper){
        // return this.timestamps.filter(t => t >= new Date(lower) && t <= new Date(upper)).length;
        return binarySearch(this.timestamps,upper) - binarySearch(this.timestamps,lower) + 1 // -1 - -1 + 1
    }

}

const counter = new HitCounter();

counter.record('2024-01-03T18:29:28')
counter.record('2023-01-03T19:29:28')
counter.record('2024-01-03T12:29:28')
counter.record('2023-02-23T12:29:28')

// console.log(counter.total()) // 4
console.log(counter.range('2024-01-01T00:00:00', '2025-01-01T00:00:00' )) // 2
console.log(counter.range('2024-01-01T00:00:00', '2024-01-03T12:29:28' )) // 1
