let nums = [2,3,0,1,5];

function missingNumber(){
    let n=nums.length;
    let totalSum=n*(n+1)/2;
    let partialSum=0;
    for(let i=0;i<n;i++){
        partialSum=partialSum+nums[i]
    }
    return totalSum-partialSum
}
console.log(missingNumber(nums))