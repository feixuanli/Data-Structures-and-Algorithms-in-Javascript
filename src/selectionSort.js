/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// nums = [-3, 1, 2, 5]
//                   i
//                       j   
//                   g
// selection sort 
var sortColors = function(nums) {
    if(!nums || nums.length === 0) return nums;
    for(var i = 0; i < nums.length; i++) {
        var globalMin = i;  
        for(var j = i + 1; j < nums.length; j++) {
            if(nums[j] < nums[globalMin]) globalMin = j;
        }
        //swap(nums, i, globalMin);
        const temp = nums[i];
        nums[i] = nums[globalMin];
        nums[globalMin] = temp;
    }
    
    return nums;
};