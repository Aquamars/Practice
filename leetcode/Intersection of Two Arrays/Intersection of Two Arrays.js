/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    return inter(nums1, nums2);
};

const inter = (nums1, nums2) => {
    const len1 = nums1.length;
    const len2 = nums2.length;
    let res = new Set;
    if(len1 > len2){
        nums2.forEach(e=>{
            if(nums1.indexOf(e)>-1) res.add(e);
        });
    }else{
        nums1.forEach(e=>{
            if(nums2.indexOf(e)>-1) res.add(e);
        });
    }
    
    return Array.from(res);
}