/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    m--;
    n--;
    
    while(m+n>=-1){
        // console.log(m,nums1,n,nums2)
        if(nums1[m]>nums2[n] || n<0){
            nums1[m+(n+1)] = nums1[m];
            m--;
        }else{
            nums1[m+(n+1)] = nums2[n];
            n--;
        }
    }
};