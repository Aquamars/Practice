/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const ary = s.split('');
    const uni = ary.filter(n=> ary.indexOf(n)===ary.lastIndexOf(n));
    return ary.indexOf(uni[0]);
};
