/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const s1 = s.split('').sort();
    const s2 = t.split('').sort();
    
    if(s1.length !== s2.length) return false;
    
    for(let i=0; i<s1.length; i++){
        if(s1[i] !== s2[i]) return false;
    }
    
    return true;
};
