/**
 * @param {number} n
 * @return {string[]}
 
 '(' has ( left 
 ')' has ) left && has a C to match with it ie. has more ( 
 */
var generateParenthesis = function(n) {
    if(!n) return [];
    let res = [];
    dfsHelper(0, 0, 0, n, [], res);
    return res;
};

const dfsHelper = (level, l, r, n, solu, res) => {
    if(level === n * 2) {
        res.push(solu.join(''));
        return;
    }
    
    // add (
    if (l < n) {
        solu.push('(');
        dfsHelper(level + 1, l + 1, r, n, solu, res);
        solu.pop();
    }
    // add )
    if(r < n && l > r) {
        solu.push(')');
        dfsHelper(level + 1, l, r + 1, n, solu, res);
        solu.pop();
    }
        
}