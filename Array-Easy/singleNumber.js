let nums = [2,2,3,3,4,5,5,1,1];
function singleNumber(nums){
    let xor=0;
    for (let i=0;i<nums.length;i++){
        xor=xor^nums[i]
    }
    return xor;
}
console.log(singleNumber(nums))
