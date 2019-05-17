class SubscriberLog {
    constructor(log) {
        this.log = log
    }

    update(hour, value) {
        this.log[hour] = value
    }

    query(start, end) {
        let sum = 0
        for (let i = start; i <= end; i++) {
            sum += this.log[i]
        }
        return sum
    }
}

const tues = new SubscriberLog([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

tues.update(9, 2)
console.log(tues.query(6, 12))