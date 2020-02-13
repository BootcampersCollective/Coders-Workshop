import {closestCartesianPoints, findDistance} from './closestCartesianPoints';

describe('Closest Cartesian Points should work', () => {

  it('should have a working findDistance subfunction', (done) => {
    const expected = Math.sqrt(2);
    const actual = findDistance([-1,-1], [0,0]);
    expect(actual).toBe(expected);
    done()
  }),

  it('should work with the example provided', (done) => {
    const expected = [[1,1], [-1,-1]];
    const actual = closestCartesianPoints([[1, 1], [-1, -1], [3, 4], [6, 1], [-1, -6], [-4, -3]]);
    expect(actual).toEqual(expected);
    done();
  })
})