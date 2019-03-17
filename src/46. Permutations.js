/**
 * @param {number[]} nums
 * @return {number[][]}
    1,2,3
0     1,        2,     213    swap level vs. i   3     321 
1   2   3     1    3   213  231               321 312   
2   3   2               
 */
var permute = function(nums) {
    if(!nums || !nums.length) return nums;
    let res = [];
    dfsHelper(nums, 0, res);
    return res;
};

const dfsHelper = (nums, level, res) => {
    if(level === nums.length - 1) {
        res.push([...nums]);
        return;
    }
    
    for(let i = level; i < nums.length; i++) {
        [nums[level],  nums[i]] = [nums[i], nums[level]];
        dfsHelper(nums, level + 1, res);
        [nums[level],  nums[i]] = [nums[i], nums[level]];
    }
    
}
