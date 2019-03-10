var sortColors = function(nums) {
    if(!nums || nums.length < 2) return nums;
    mergeHelper(nums, 0, nums.length -1, []);
    return nums;
};

const mergeHelper = (nums, l, r, temp) => {
    if(l === r) return;
    const mid = Math.floor((l + r)/2);
    mergeHelper(nums, l, mid, temp);
    mergeHelper(nums, mid + 1, r, temp);
    //combine left solution and right solution 
    var i = l, k = l, j = mid + 1;
    for(k = l; k <= r; k++) {
        if(i > mid || j > r) break;
        if(nums[i] <= nums[j]) {
            temp[k] = nums[i];
            i++;
        } else {
            temp[k] = nums[j];
            j++; 
        }
    }
    while(i <= mid) {
        temp[k++] = nums[i++];
    }
    while(j <= r) {
        temp[k++] = nums[j++];
    }
    for(k = l; k <= r; k++) {
        nums[k] = temp[k];
    }
    return; 
}

sortColors([2,0,2,1,1,0]);
