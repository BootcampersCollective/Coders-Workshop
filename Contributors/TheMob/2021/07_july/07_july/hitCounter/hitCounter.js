// Design and implement a HitCounter class that keeps track of requests (or hits). It should support the following operations:

// * `record(timestamp)`: records a hit that happened at timestamp
// * `total()`: returns the total number of hits recorded
// * `range(lower, upper)`: returns the number of hits that occurred between timestamps lower and upper (inclusive)

class HitCounter {
  // keep track of hits
  // keep track of total
  constructor() {
    this.hits = []
  }

  record(timestamp) {
    this.hits.push(timestamp)
  }

  total() {
    return this.hits.length
  }

  range(lower, upper) {
	  const inRange = []
    this.hits.forEach((hit) => {
      inRange.push(hit)
    })
	  return isRange.length
  }
}

const exampleCounter = new HitCounter()
console.log(exampleCounter)
exampleCounter.record(1)
exampleCounter.record(8)
exampleCounter.record(11)
exampleCounter.record(20)
exampleCounter.record(5)
console.log(exampleCounter)
console.log(exampleCounter.total())

const niceCounter = new HitCounter()
niceCounter.hits // []
