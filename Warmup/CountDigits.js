function countDigit(no){
    if(no===0)return 1;   //for 0 no

    no=Math.abs(no);

    let count=0;
    while(no>0){
        no=Math.floor(no/10);
        count++;
    }
    return count;


}

let result=countDigit(43542);

console.log(result)