
let arr=[56,34,89,21,54,6];
let n=arr.length-1;

function bubbleSort(arr){
    letisSwap=false;
    for(let i=0;i<n;i++){
        for(j=0;j<=n-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                isSwap=true;
                
            }
        }
        if(!isSwap) break;
    }
    return arr
}
let result=bubbleSort(arr)
console.log(result)