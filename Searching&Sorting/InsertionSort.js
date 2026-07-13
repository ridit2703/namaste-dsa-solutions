let arr=[25,56,34,87,90,12]
function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let cur=arr[i];
        let prev=i-1;
        while(arr[prev]>cur && prev>=0){
            arr[prev+1]=arr[prev];
            prev--;
        }
        arr[prev+1]=cur
    }
    return arr
}
let result=insertionSort(arr);
console.log(result)