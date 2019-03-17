/**
 * @param {string} s
 * @return {boolean}
 0 1 2 3 
 ( ... [ ...  ]... )
        i 
 if right parentheses, check left , if match pop up, otherwise invalid 
 stack: ( 
 {[]}[[
 */
var isValid = function(s) {
    if(!s || !s.length ) return true;
    let stack = [];
    for(let i = 0; i < s.length; i++) {
        switch (s.charAt(i)) {
            case '(':
            case '{' :
            case '[':
                stack.push(s.charAt(i));
                break;
            case ')':
                if(stack[stack.length - 1] === '(') {
                    stack.pop();
                } else {
                    return false;
                }
                break;
            case ']':
                if(stack[stack.length - 1] === '[') {
                    stack.pop();
                } else {
                    return false;
                }
                break;
            case '}':
                if(stack[stack.length - 1] === '{') {
                    stack.pop();
                } else {
                    return false;
                }
                break;
            default: 
                break;
        }
    }
    return !stack.length ? true : false;
};