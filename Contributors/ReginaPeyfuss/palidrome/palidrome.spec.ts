
describe('Palidrome', () => {
    it('should check if number is a paladrome', () => {
        let isPaladrome = Palidrome.isPalindrome(121);
        expect (isPaladrome).toEqual(true);

        isPaladrome = Palidrome.isPalindrome(123);
        expect (isPaladrome).toEqual(false);

        isPaladrome = Palidrome.isPalindrome(12321);
        expect (isPaladrome).toEqual(true);

        isPaladrome = Palidrome.isPalindrome(undefined);
        expect (isPaladrome).toEqual(false);

        isPaladrome = Palidrome.isPalindrome(null);
        expect (isPaladrome).toEqual(false);

        isPaladrome = Palidrome.isPalindrome(3);
        expect (isPaladrome).toEqual(false);
    })
});