var sortColors = function(nums) {
    if(!nums || nums.length < 2) return nums;
    quickSortHelper(nums, 0, nums.length - 1);
    console.log(nums);
    return nums;
};

var quickSortHelper = function(nums, l, r) {
    if(l >= r) return;
    if(l === r - 1) {
        if(nums[r] >= nums[l]) {
            return;
        }
        swap(nums, l, r);
        return;
    }
    
    var pivot = Math.floor(Math.random() * (r - l)) + l;
    //cur level processing 
    swap(nums, pivot, r);
    var i = l, j = r - 1; 
    while(i <= j) {
        if(nums[i] <= nums[r]) {
            i++;
        } else {
            swap(nums, i, j);
            j--; 
        }
    }
    swap(nums, i, r); 
    //update pivot value
    pivot = i; 
    //next level 
    quickSortHelper(nums, l, pivot - 1);
    quickSortHelper(nums, pivot + 1, r); 
}

const swap = (nums, i, j) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

sortColors([2,0,2,1,1,0]);