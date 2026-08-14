function largestCommonPrefix(str){
    let x=0;
    while(x<str[0].length){
        let ch=str[0][x];
        for(let i=1;i<str.length;i++){
            if(ch!=str[i][x]||x==str[i].length){
                return str[0].substring(0,x)
            }
        }
        ++x;
    }
   
    return 


}

let result=largestCommonPrefix(["flower","flo"])
console.log(result)