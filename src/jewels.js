/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 
 J: "aA"
      j
    {0: a, 1: A}
 S: "aAAbbbb""
       i
 count = 0 1 3
 
 O(m*n)
 */
var numJewelsInStones0 = function(J, S) {
    if(!S || S.length === 0 || !J || J.length === 0) return 0;
    var count = 0;
    for(var i = 0; i < S.length; i++) {
        for(var j = 0; j < J.length; j++) {
            if(J[j] === S[i]) {
                count++;
                break;
            }
        }
    }
    return count;
};
//O(mn)
numJewelsInStones0("aA", "aAAbbbb");

var numJewelsInStones = function(J, S) {
    let count =0
    
    for(let i=0; i < S.length; i++){

        if(J.indexOf(S[i]) != -1){
            count++
        }
    }
    return count
}
//O(mn)

var numJewelsInStones = function(J, S) {
    let total = 0;
    const JSet = new Set();
    
    for(let i = 0; i < J.length; i++)
        JSet.add(J[i]);
    
    for(let i = 0; i < S.length; i++)
        if(JSet.has(S[i])) total++;
    
    return total;
};
//O(m+n)



var numJewelsInStones = function(J, S) {
    var jewels = J.split(''); //split string into comma separated array
    var stones = S.split(''); //split string into comma separated array
    var returnArr = []
    returnArr = stones.filter(e => jewels.indexOf(e) > -1) //only return stone elems that are jewels
    return returnArr.length;
};

//O(mn)