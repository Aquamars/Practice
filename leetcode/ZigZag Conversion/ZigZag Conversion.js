/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    return rebuild(s, numRows);
};

const rebuild = (s, numRows) => {
    if(numRows === 1) return s;
    const ary = s.split('');
    let flag = true;
    let c1 = 0;
    let c2 = numRows-2;
    let result = [];
    for(let i=0; i < ary.length; i++){        
        if(flag){
            result[c1] = ((result[c1] == null) ? ary[i] : result[c1] + ary[i]);
            c1 ++;
            if(c1 === numRows){
                flag =false;
                c1 = 0;
                if((numRows-2) ===0) flag = true;
            }
        }else{
            result[c2] += ary[i];
            c2--;
            if(c2 === 0){
                flag =true;
                c2 = numRows-2;
            }
        }
    }
    return result.reduce((pre,last)=>pre+last);
};