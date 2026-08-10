function searchRange(nums,target){

    function findFirst(){

        let left=0;
        let right=nums.length-1;
        let ans=-1;

        while(left<=right){

            let mid=Math.floor((left+right)/2);

            if(nums[mid]===target){
                ans=mid;
                right=mid-1;
            }else if(nums[mid]<target){
                left=mid+1;
            }else{
                right=mid-1;
            }
        }

        return ans;
    }

    function findLast(){

        let left=0;
        let right=nums.length-1;
        let ans=-1;

        while(left<=right){

            let mid=Math.floor((left+right)/2);

            if(nums[mid]===target){
                ans=mid;
                left=mid+1;
            }else if(nums[mid]<target){
                left=mid+1;
            }else{
                right=mid-1;
            }
        }

        return ans;
    }

    return [findFirst(),findLast()];
}

console.log("\nFirst and Last Position:");
console.log(searchRange([5,7,7,8,8,10],8));