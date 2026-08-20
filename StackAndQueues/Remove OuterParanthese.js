// removeOuterParentheses.js

var removeOuterParentheses = function(s) {
    let stack = [];
    let ans = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            ans += (stack.length > 0) ? s[i] : "";
            stack.push(s[i]);
        } else {
            stack.pop();
            ans += (stack.length > 0) ? s[i] : "";
        }
    }

    return ans;
};

// Example
let s = "(()())(())";

console.log(removeOuterParentheses(s));
// Output: ()()()