/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    return findDif(s, t);
};

const findDif = (s,t) => {
    let a = s.split('').sort();
    let b = t.split('').sort();
    for(let i=0;i<b.length;i++){
        if(a[i]!==b[i])return b[i];
    }
    return b[b.length-1];
}