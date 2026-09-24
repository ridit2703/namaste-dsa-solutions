let twoSum = function(nums, target) {
    let n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            let sum = nums[i] + nums[j];
            if (sum === target) {
                return [i, j];
            }
        }
    }
}   

console.log(twoSum([2,7,11,15],9))