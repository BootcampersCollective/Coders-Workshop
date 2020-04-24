import { isPrime } from './isPrime';

describe("IsPrime", () => {
    it ('should check prime numbers', () => {
        [2,3,5,7,11,13,19,23,29,31].forEach( num => {
            expect(isPrime(num)).toEqual(true);
        });

        [1,4,8,16,18,15,12,20,21,30,27].forEach( num => {
            expect(isPrime(num)).toEqual(false);
        });
    });

})