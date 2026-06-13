// if array is sorted and want to print only no of originals 

array=[0,0,1,2,3,3,4]
let x=0;
for(let i=0;i<array.length;i++){
    if(array[i]>array[x]){
        x=x+1;
        array[x]=array[i]
    }
}
console.log(x+1)





// if array is sorted and you have to remove just duplicates and print the deduplicate array
let arr=[0,0,1,2,2,3,4,4]
let unique=[]
unique[0]=arr[0]
let k=1;
for(let i=1;i<arr.length;i++){
    if(arr[i]!==arr[i-1]){
        unique[k]=arr[i];
        k++
    }
}
console.log(unique)