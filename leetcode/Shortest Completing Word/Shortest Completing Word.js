/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    return short(licensePlate, words)
};

const short = (license, words) => {
    let set = new Set();
    let map = {};
    
    const licen = license.toLowerCase().replace(' ','');
    for(let i=0;i<licen.length;i++){
        map[licen[i]] = (map[licen[i]] == undefined) ? 1 : map[licen[i]]+1;
    }
    // console.log(set);
    let maxStr = '';
    let max = 0;
    words.forEach(e=>{
        let count = 0;
        let mapLicense = Object.assign({},map);
        // console.log(mapLicense)
        for(let i=0;i<e.length;i++){
            if(mapLicense[e[i]]>0){
                mapLicense[e[i]]--;                
                count++;
            }
        }
        if(max<count){
            max = count;
            maxStr = e; 
        }
        if(max==count && maxStr.length > e.length){                
            max = count;
            maxStr = e;    
         }
    });
    return maxStr;
}