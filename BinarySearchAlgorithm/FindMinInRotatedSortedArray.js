let findMin = function(arr) {
    let l = 0;
    let r = arr.length - 1;

    while (l <= r) {
        // Already sorted
        if (arr[l] <= arr[r]) {
            return arr[l];
        }

        let m = l + Math.floor((r - l) / 2);

        
        if (arr[m] <arr[m-1]) {
            return arr[m]
        }

        if(arr[l]>arr[m]){
            r=m-1
        }
        // Minimum is in the left half
        else {
            l=m+1;
        }
    }

    //return arr[l];
};

console.log(findMin([8, 7, 6, 1, 2, 3, 4, 5]));
// 1