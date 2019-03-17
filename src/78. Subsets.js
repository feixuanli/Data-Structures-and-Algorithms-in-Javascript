/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if(!nums || !nums.length) return [];
    let res = [], subset = [];
    dfsHelper(nums, 0, subset, res);
    return res;
};

const dfsHelper = (nums, level, subset, res) => {
    if(level === nums.length) {
        res.push([...subset]);
        return;
    }
    
    subset.push(nums[level]);
    dfsHelper(nums, level + 1, subset, res);
    subset.pop();
    dfsHelper(nums, level + 1, subset, res);
    
    // dfsHelper(nums, level + 1, subset, res);
    // subset.push(nums[level]);
    // dfsHelper(nums, level + 1, subset, res);
}