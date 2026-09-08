
let findClosestElements = function(arr, k, x) {
    let l = 0;
    let r = arr.length - k;
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if ((arr[m + k] - x) < (x - arr[m])) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    let ans = [];
    for(let i = l; i < l + k; i++) {
        ans.push(arr[i]);
    }
    return ans;
};

console.log(findClosestElements([1,2,3,4,5,6,],2,3))
 