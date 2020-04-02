
export class Palidrome {

    static isPalindrome(num: number): boolean {
        let x = num;
        while (x !== 0){
            let lastDigit = x % 10;
            let totalNumDigits = Math.log10(x);
            let firstDigit = Math.trunc(x / Math.pow(10, totalNumDigits));
            if (firstDigit !== lastDigit) return false;
        }
        return true;
    }
}

