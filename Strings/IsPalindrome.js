


// // approach 1
// function  isPalindrome(s){
//     s=s.toLowerCase();
//     let filterString="";
//     let revString="";
//     for(let i=0;i<s.length;i++){
//         if (s[i].match(/[a-z0-9]/i)){
//             filterString=filterString+s[i];
//             revString=s[i]+revString;
//         }
//     }
//     return filterString===revString;
// }
// let result =isPalindrome("race a car");
// console.log(result)


//approach 2

function isPalindrome(s){
    s=s.toLowerCase();
    let i=0;
    let j=s.length-1;
    while(i<j){
        if(!s[i].match(/[a-z0-9]/i)){
            ++i;

        }
        else if(!s[j].match(/[a-z0-9]/i)){
            --j
        }
        else if(s[i]===s[j]){
            ++i,--j;
        }
        else{
            return false;
        }
    }
    return true


}

let result=isPalindrome("a man , nama")
console.log(result)
