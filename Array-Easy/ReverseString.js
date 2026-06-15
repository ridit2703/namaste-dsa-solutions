// reverse a string using temp but not use another array 

let arr=["h","e","l","l","o"];

function reverseString(arr){
    let n=arr.length;
    for(let i=0;i<Math.floor(n/2);i++){
    
        let temp=arr[i]
        arr[i]=arr[n-i-1]
        arr[n-i-1]=temp
   
    }
    return arr
}
let result=reverseString(arr)
console.log(result)