/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    return group(strs);
};

const group = strs => {
    let map = {};

    strs.forEach(e=>{

        const words = e.split('').sort();

        if(map[words] == undefined){
            map[words] = [e];
        }else{
            map[words].push(e);
        }
    });
    return Object.values(map);
}