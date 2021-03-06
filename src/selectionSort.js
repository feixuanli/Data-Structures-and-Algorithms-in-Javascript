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
    var globalMin, temp; // declare outside loop to save space 
    // for(var i = 0; i < nums.length; i++) {
    for(var i = 0; i < nums.length - 1; i++) {
        globalMin = i;  
        for(var j = i + 1; j < nums.length; j++) {
            if(nums[j] < nums[globalMin]) globalMin = j;
        }
        //swap(nums, i, globalMin);
        temp = nums[i];
        nums[i] = nums[globalMin];
        nums[globalMin] = temp;
    }
    
    return nums;
};