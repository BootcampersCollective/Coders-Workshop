import { isPrime } from '.isPrime';

describe("IsPrime", () => {
    it ('should check prime numbers', () => {
        [2,3,5,7,11,13,19,23,29,31].forEach( num => {
            expect(isPrime(num)).toEqual(true);
        })
    })

})