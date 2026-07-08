let arr=[56,34,89,21,54,6];
let n=arr.length;

function selectionSort(arr){
    for(let i=0;i<n-1;i++){
        let min=i;
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[min]){
                min=j;
            }
        }
       if(min!=i){
            let temp=arr[i];
        arr[i]=arr[min];
        arr[min]=temp
       }
        
    }
  
    return arr
}
let result=selectionSort(arr)
console.log(result)