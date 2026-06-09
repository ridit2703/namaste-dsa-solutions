function reverseInteger(no){
    let noCopy=no;
    let rev=0;
    let rem=0;
    no=Math.abs(no)
    while(no>0){
         rem=no%10;
         rev=(10*rev)+rem;
         no=Math.floor(no/10)
    }
    // for limit 
    let limit=2**31
    if(rev < -limit || rev > limit) return 0;

    return (noCopy<0) ? -rev:rev;

}

let result=reverseInteger(-3272);
console.log(result)