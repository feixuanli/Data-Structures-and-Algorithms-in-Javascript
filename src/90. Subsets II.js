var subsetsWithDup = function(nums) {
    if(!nums || !nums.length) return [];
    let res = [], solu = [];
    let map = new Map();
    nums.sort((a, b) => a - b);
    nums.forEach(ele => {
        map.set(ele, map.has(ele) ? map.get(ele) + 1 : 1);
    });
    dfsHelper(nums, 0, map, solu, res);
    return res;
};

const dfsHelper = (nums, index, map, solu, res) => {
    if(index === nums.length) {
        res.push([...solu]);
        return;
    }
    
    // 0b, 1b, 2b, 3b, 
    let count = map.get(nums[index]);  //3 
    for(let i = 0; i < count; i++) {
        solu.push(nums[index]);
        dfsHelper(nums, index + count, map, solu, res);
    }
    for(let i = 0; i < count; i++) {
        solu.pop();
    }
    dfsHelper(nums, index + count, map, solu, res);
}