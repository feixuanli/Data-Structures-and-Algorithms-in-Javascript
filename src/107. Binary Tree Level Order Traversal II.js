/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrderBottom = function(root) {
    if(!root) return [];
    let queue = [];
    let res = [];
    queue.push(root);
    while(queue.length) {
        let size = queue.length;
        let level = [];
        while(size) {
            let expand = queue.shift();
            level.push(expand.val);
            if(expand.left) queue.push(expand.left);
            if(expand.right) queue.push(expand.right);
            size--;
        }
        res.unshift(level);
    }
  
    return res;
};



var levelOrderBottom1 = function(root) {
    if(!root) return [];
    let queue = [];
    let res = [];
    queue.push(root);
    while(queue.length) {
        let size = queue.length;
        let level = [];
        while(size) {
            let expand = queue.shift();
            level.push(expand);
            if(expand.left) queue.push(expand.left);
            if(expand.right) queue.push(expand.right);
            size--;
        }
        res.push(level);
    }
    // reverse res 
    for(let i = 0, j = res.length - 1; i <= j; i++, j--) {
        [res[i], res[j]] = [res[j], res[i]];
        res[i] = res[i].map(ele => ele.val);
        if(i !== j) res[j] = res[j].map(ele => ele.val);
    }
    return res;
};