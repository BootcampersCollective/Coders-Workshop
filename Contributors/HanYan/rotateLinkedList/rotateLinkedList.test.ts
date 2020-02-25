import {LinkedList} from './rotateLinkedList'

describe('LinkedList Rotate should work', () => {

  
  it('Should work in the first example', (done) => {
    const expected = new LinkedList();
    expected.add(3);
    expected.add(5);
    expected.add(7);
    expected.add(7);

    const actual = new LinkedList();
    actual.add(7);
    actual.add(7);
    actual.add(3);
    actual.add(5);
    actual.rotate(2);
    
    expect(actual.print()).toBe(expected.print())
    done();
  }),

  it('Should rotate in the correct direction (right)', (done) => {
    const expected = new LinkedList();
    expected.add(3);
    expected.add(4);
    expected.add(5);
    expected.add(1);
    expected.add(2);

    const actual = new LinkedList();
    actual.add(1);
    actual.add(2);
    actual.add(3);
    actual.add(4);
    actual.add(5);
    actual.rotate(3);
    
    expect(actual.print()).toBe(expected.print())
    done();
  })

})