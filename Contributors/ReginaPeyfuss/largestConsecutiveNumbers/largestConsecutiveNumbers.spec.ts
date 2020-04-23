import { largestConsecutiveNumbers } from './largestConsecutiveNumbers'

describe('LargestConsecutiveNumbers', () => {
    it ('should check largest consecutive numbers [2, 200, 3, 100, 4]', () => {
        let consecutiveNumbers = largestConsecutiveNumbers([2, 200, 3, 100, 4]);
        expect(consecutiveNumbers).toEqual(3)
    });
    it ('should check largest consecutive numbers [2, 200, 5, 100, 4]', () => {
        let consecutiveNumbers = largestConsecutiveNumbers([2, 200, 5, 100, 4]);
        expect(consecutiveNumbers).toEqual(2)
    });
    it ('should check largest consecutive numbers [2,5,6,3,4]', () => {
        let consecutiveNumbers = largestConsecutiveNumbers([2,5,6,3,4]);
        expect(consecutiveNumbers).toEqual(5)
    });
    it ('should check largest consecutive numbers []', () => {
        let consecutiveNumbers = largestConsecutiveNumbers([]);
        expect(consecutiveNumbers).toEqual(0)
    });
    
})