
import { smallesWindow } from './smallestWindow'

describe('SmallestWindow', () => {

    it ('should return smallest window to sort for [3,4,5,7,6,9]', () => {
        let smallestWindow = smallestWindow([3,4,5,7,6,9]);
        expect(smallestWindow).toEqual([3,4])
    });

    it ('should return smallest window to sort for [7,6,5,4,9]', () => {
        let smallestWindow = smallestWindow([7,6,5,4,9]);
        expect(smallestWindow).toEqual([0,3])
    });

    it ('should return smallest window to sort for [7,6,5,8,9,10,4,5]', () => {
        let smallestWindow = smallestWindow([7,6,5,8,9,10,4,5]);
        expect(smallestWindow).toEqual([0,2])
    });


})