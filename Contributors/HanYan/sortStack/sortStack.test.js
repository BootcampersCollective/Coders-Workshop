const peek = (list) => list[list.length-1];
const isEmpty = (list) => list.length === 0;

const sortStack = (unsortedStack) => {
  const length = unsortedStack.length;
  const stackB = [];
  let temp;
  // first move all items to stackB in a sorted state
  while (stackB.length < length) {
    temp = unsortedStack.pop();
    if (isEmpty(stackB) || temp < peek(stackB)) { // this is where we flip between > and < for ascending or descending
      stackB.push(temp);
    } else {
      while (temp >= peek(stackB) && !isEmpty(stackB)) { // this is where we flip between > and < for ascending or descending
        unsortedStack.push(stackB.pop());
      }
      stackB.push(temp);
    }
  }
  // now move all items back to unsortedStack.  It'll be sorted in the reverse order as stackB
  while (!isEmpty(stackB)) {
    unsortedStack.push(stackB.pop());
  }
  return unsortedStack;
}

describe('Sort Stack works', () => {
  it('sorts', done => {
    const randomList = (new Array(1000).fill(0)).map(zero => Math.random());
    const copy = [...randomList];
    expect(sortStack(copy)).toEqual(randomList.sort());
    done();
  })
});