var myPow = function(x, n) {
    if(x === 0) return 0;
    // base case
    if(n === 0) return 1;
    if(n === 1) return x;
    
    if(n > 0) {
        var half =  myPow(x, Math.floor(n/2));
        return n%2 === 1 ? half * half* x : half * half;
    } else {
        return myPow(1/x, -n); 
    }
    
};

console.log(myPow(2, 3));