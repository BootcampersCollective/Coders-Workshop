// Implement a stack that has the following methods:

// push(val), which pushes an element onto the stack
// pop(), which pops off and returns the topmost element of the stack. If there are no elements in the stack, then it should throw an error or return null.
// max(), which returns the maximum value in the stack currently. If there are no elements in the stack, then it should throw an error or return null.
// Each method should run in constant time.

const stack = () => {
    const items = []
    let max = []
    let length = 0


   function push (item) {
        if (!max.length) {
            max.push(item)
        } else if(item > max[max.length - 1]) {
            max.push(item)
        }
        length++
        return items.push(item)
    }
    function pop() {
        if (!length) return null
        const popped = items.pop()
        if (popped === max()) {
            max.pop()
        }
        return popped
    }
    function max() {
        return max[max.length - 1]
    }
}