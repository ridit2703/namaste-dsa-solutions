let arr=[12,4,0,22,0,45,3,0]
let x=0;
function moveZero(arr){
    
    for(let i=0;i<arr.length;i++){
    if(arr[i]!==0){
        arr[x]=arr[i]
        x++;
    }
}
for(let i=x;i<arr.length;i++){
    arr[i]=0
}
return arr
}

console.log(moveZero(arr))