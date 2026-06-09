function isPalindrome(num) {
    // Handle negative numbers (not palindrome)
    if (num < 0) return false;

    let original = num;
    let reversed = 0;

    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }

    return original === reversed;
}

let result = isPalindrome(121);
console.log(result); 