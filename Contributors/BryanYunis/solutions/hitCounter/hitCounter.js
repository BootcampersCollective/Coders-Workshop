const assert = require('assert')
/*
Class-based approach
*/

class HitCounter {
    constructor() {
        this.timestamps = [];
    }
    record(timestamp) {
        this.timestamps.push(timestamp);
    }
    total() {
        return this.timestamps.length;
    }
    range(lower, upper) {
        this.timestamps.sort((a, b) => a - b);
        return this.timestamps.findIndex((ts) => ts === upper)
            - this.timestamps.findIndex((ts) => ts === lower)
            + 1
    }
}


const myCounter = new HitCounter();

/*
Function to take a few milliseconds between creating JS Dates
*/
const takeALittleTime = () => {
    const stash = [];
    for (let i = 0; i < 100000; i++) {
        stash.push(i)
    }
}

const ts1 = new Date()
takeALittleTime()
const ts2 = new Date()
takeALittleTime()
const ts3 = new Date()

myCounter.record(ts1);
myCounter.record(ts2);
myCounter.record(ts3);
assert.strictEqual(myCounter.total(), 3)
assert.strictEqual(myCounter.range(ts2, ts3), 2)


/*
Functional approach
*/
function record(hitCounter, timestamp) {
    return hitCounter.concat(timestamp);
}

function total(hitCounter) {
    return hitCounter.length;
}

function range(hitCounter, lower, upper) {
    hitCounter.sort((a, b) => a - b);
    return hitCounter.findIndex((ts) => ts === upper)
        - hitCounter.findIndex((ts) => ts === lower)
        + 1
}


function createHitCounter() {
    return [];
}

let counter = createHitCounter();
counter = record(counter, ts1)
counter = record(counter, ts2)
counter = record(counter, ts3)
assert.strictEqual(total(counter), 3)
assert.strictEqual(range(counter, ts2, ts3), 2)

console.log('All tests passed')

