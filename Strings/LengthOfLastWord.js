
// let result=lastWord("hey my name is romeo");


//     let n=s.length-1//start from last char
//     while(n>=0){
//         if(s[n]===" "){
//             --n;
//         }
//         else{
//             break;
//         }
//     }
    
//     let count=0;
//     while(n>=0){
//         if(s[n]!==" "){
//             --n;
//             count++;
//         }
//         else{
//             break;
//         }
        
//     }
//     return count;
// }
let result=lastWord("w ");
console.log(result)

function lastWord(s){
    let n=s.length-1;
    let count=0;
    while(n>=0){
        if(s[n]!==" ") ++count;
        else if(count>0) break;
        --n;
    }
    return count;
}