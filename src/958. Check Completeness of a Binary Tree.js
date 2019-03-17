/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    if(!root) return true;
    let queue = [];
    let flag = true;// had null node before 
    queue.push(root);
    while(queue.length) {
        let cur = queue.shift();
        if(flag) {
            cur.left ? queue.push(cur.left) : flag = false;     
        } else {
            if(cur.left) return false;
        }
        if(flag) {
            cur.right ? queue.push(cur.right): flag = false;
        } else {
            if(cur.right) return false;
        }        
    }
    return true;
};
