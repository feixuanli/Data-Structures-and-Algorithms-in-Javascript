/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 levels candidates.length 
 2,3,   8 
 0   2    0,      1,       2, 3, 4
 1   3         0, 1, 2, 
 2             
 remain 6   1, 2
 ..[2, ]
 candidates.length -1 
 */
var combinationSum = function(candidates, target) {
    let res = [];
    dfsHelper(candidates, 0, target, [], res);
    return res; 
};

const dfsHelper = (candidates, level, remain, solu, res) => {
    if(level === candidates.length) {
        if(remain === 0) res.push([...solu]);
        return;
    }
    
    let curVal = candidates[level];
    for(let i = 1; i * curVal <= remain; i++) {
        solu.push(curVal);
        dfsHelper(candidates, level + 1, remain - curVal * i, solu, res);
    }
    for(let i = 1; i * curVal <= remain; i++) {
        solu.pop();
    }
    dfsHelper(candidates, level + 1, remain, solu, res);
}