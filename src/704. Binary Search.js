var search = function(nums, target) {
    if(!nums || nums.length === 0) return -1;
    var left = 0
    var right = nums.length - 1;
    var mid = 0;
    while(right >= left) { // >=
        //mid = Math.floor((right - left)/2) + left;
        mid = Math.floor((left + right)/2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return -1; 
};

