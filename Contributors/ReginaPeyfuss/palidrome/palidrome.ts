
export class Palidrome {

    static isPalindrome(num: number): boolean {
        if (num === undefined || num === null || num < 10) return false;
        let x = num;
        while (x > 9){
            let lastDigit = x % 10;
            let totalNumDigits = Math.trunc(Math.log10(x));
            let firstDigit = Math.trunc(x / Math.pow(10, totalNumDigits));
            x = Math.trunc(x/10);
            x = Math.trunc(x/(Math.pow(10, totalNumDigits-1)));
            if (firstDigit !== lastDigit) return false;
        }
        return true;
    }
}

