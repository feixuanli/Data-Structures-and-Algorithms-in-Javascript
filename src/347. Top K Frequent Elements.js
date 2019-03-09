/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 
 Input: nums = [1,1,1,2,2,3], k = 2
 Output: [1,2]
 

 */
var topKFrequent = function(nums, k) {
    //sanity check 
    if(!nums || nums.length === 0 || k <= 0) return [];
    
    var map = new Map();
    for(var i = 0; i < nums.length; i++) {
        if(!map.has(nums[i])) {
             map.set(nums[i], 1);
        } else {
            map.set(nums[i], map.get(nums[i]) + 1);
        }
    }
    
    var sortedMap = [...map].sort((b, a) =>a[1] - b[1])
    
    var res = [];
    
    for(var i = 0; i < k; i++) {
        res.push(sortedMap[i][0]);
    }
    return res; 
    
};