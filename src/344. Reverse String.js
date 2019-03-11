/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 
 oolleh
  j i
 swap ij 
 */
var reverseString = function(s) {
    if(!s || s.length < 2) return s;
    
    var i = 0, j = s.length - 1;
    
    while(i < j) {
        swap(s, i++, j--);
    }
    
    return s;
};

var swap = function(s, i, j) {
    const temp = s[i];
    s[i] = s[j];
    s[j] = temp;
}