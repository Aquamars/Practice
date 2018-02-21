/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const [len1,len2] = [nums1.length, nums2.length];
    let ans =[];
    let [ary1,ary2]=[nums1, nums2];
    if(nums2 > nums1)[ary1,ary2]=[nums2, nums1];    
    let count = 0;
    while(count < ary1.length){            
        for(let i=0;i<ary2.length;i++){
            if(ary1[count]===ary2[i]){                    
               ans.push(ary2.splice(i,1)[0]);
               break;
            }
         }
         count++;
    }
    return ans
};
