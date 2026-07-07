let arr=[21,54,65,89];
    let f=0;
    let l=arr.length-1
function binarySearch(arr,target){
   
    while(l>=f){
        let m=Math.floor((l+f)/2)
        if(target==arr[m]){
            return m
        }
        else if(target<arr[m]){
            l=m-1;
        }
        else if(target>arr[m]){
            f=m+1;
            
        }
    }
    return -1;
}
let result=binarySearch(arr,89)
console.log(result)