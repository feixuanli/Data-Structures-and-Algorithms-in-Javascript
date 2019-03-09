/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 
arr = []
 
 */


var preorderTraversal = function(root) {
    var arr = [];
    preorderHelper(root, arr);
    
    return arr;
};

var preorderHelper= function(root, arr) {
    //base case 
    if(root === null) return;
    
    //recursive rule 
    arr.push(root.val);
    preorderHelper(root.left, arr);
    preorderHelper(root.right, arr);
}


