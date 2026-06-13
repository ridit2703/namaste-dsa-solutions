array=[0,0,1,2,3,3,4]
let value=4
function removeElement(){
    let x=0;

    for(let i=0;i<array.length;i++){
      if(array[i]!==value){
        array[x]=array[i]
        x++;
    }
    
  }
  return x;
    
}
console.log(removeElement(array,value))