let arr=[2,42,45,6,56,34];
function arraySum(n){
    if(n==0) return arr[0];
    return arr[n]+arraySum[n-1]

}
console.log(arraySum(arr.length-1))