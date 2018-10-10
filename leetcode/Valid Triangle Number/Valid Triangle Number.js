/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    return findTri(nums);
};

const findTri = nums => {
    const ary = nums.sort((a,b) => a-b);
    let res = 0;
    // console.log(ary);
    for(let i=0; i<ary.length-2;i++){
        for(let j = i+1; j<ary.length-1;j++){
            let num = ary[i] + ary[j];
            let count = 1;
            while(count+j<ary.length){
                if(num > ary[j+count]) res++;
                // console.log(i,j,j+count,":",num,ary[j+count]);
                count++;                
            }
        }
    }    
    return res;
}