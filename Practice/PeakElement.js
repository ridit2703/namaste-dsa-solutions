// Time: O(log n)
// Space: O(1)

function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}

// Example
const nums2 = [1, 2, 3, 1];

const peakIndex = findPeakElement(nums2);

console.log("Peak Index:", peakIndex);
console.log("Peak Value:", nums2[peakIndex]);