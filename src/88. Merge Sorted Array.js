/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // sanity check 
    
    for(var i = m + n - 1; i >= 0; i--) {
        if(n - 1 < 0) break;
        if(m - 1 < 0) {
            nums1[i] = nums2[n-1];
            n--;
            continue;
        }
        if(n - 1 < 0) {
            break;
        }
        if(nums1[m-1] > nums2[n-1]) {
            nums1[i] = nums1[m-1];
            m--;
        } else {
            nums1[i] = nums2[n-1];
            n--;
        }
    }
    
    return nums1; 
};