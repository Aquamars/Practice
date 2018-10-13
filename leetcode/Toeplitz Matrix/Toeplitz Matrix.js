/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    return isToeplitz(matrix);
};

const isToeplitz = matrix => {
    let tmp = [];
    let leng = matrix[0].length;
    for(let i=0;i<matrix.length;i++){
        if(tmp.length != 0){
            if(!matchAry(tmp, matrix[i])) return false;
        }
        tmp = Array.from(matrix[i]);        
    }
    return true;
}

const matchAry = (ary1,ary2) => {    
    for(let i=0;i<ary1.length-1;i++){
        if(ary1[i]!==ary2[i+1]) return false;
    }
    return true;
};