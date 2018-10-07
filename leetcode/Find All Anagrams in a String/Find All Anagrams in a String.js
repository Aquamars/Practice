/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    return findA(s,p);
};

const findA = (s, p) => {
    const ary = s.split('');
    const pattern = p.split('');
    
    let mapP = {};
    let setP = new Set(pattern);
    pattern.forEach(e=> {        
        if(mapP[e] === undefined){ 
            mapP[e] = 1; 
        }else{
            mapP[e] += 1;
        }
    });
    let res = [];
    let tmpP = {};
    let count = 0;
    for(let i=0; i<ary.length;i++){
        let jump = 0;
        let e = ary[i];
        if(i < pattern.length-1){
            if(tmpP[e] === undefined){ 
                tmpP[e] = 1; 
            }else{
                tmpP[e] += 1;
            }
            count ++;
        }else{
            // console.log(i,e,tmpP)
            if(tmpP[e] === undefined){ 
                tmpP[e] = 1; 
            }else{
                tmpP[e] += 1;
            }
            
            // console.log(i,e,tmpP)
            if(isMatch(mapP, tmpP))res.push(i-(pattern.length-1));
            tmpP[ary[i-count]] -= 1;
        }
    }
    
    return res;    
};

const isMatch = (mapP, tmpP) => {    
    for(let e in mapP){
        if(tmpP[e] !== mapP[e]) return false;
    }
    return true;
}
