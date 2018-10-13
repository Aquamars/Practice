/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    return getR(rowIndex);
};

const getR = rowIdx => {
    let count = 0;
    let ary = [1];
    while(count < rowIdx){
        if(ary.length > 1){
            let tmp = ary[0];            
            for(let i=1;i<ary.length;i++){
                let nextTmp = ary[i];
                ary[i] = tmp + ary[i];
                tmp = nextTmp;
            }            
        }
        ary.push(1);
        count++;
    }
    return ary;
}