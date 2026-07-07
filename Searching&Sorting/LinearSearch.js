let arr=[21,54,65,34,89];
function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1
}
let result=linearSearch(arr,89)
console.log(result)