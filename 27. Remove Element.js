/**
 * https://leetcode.com/problems/remove-element/
 * param {number[]} nums
 * param {number} val
 * return {number}
 */
var removeElement = function(nums, val) {

    console.log(nums.length)
    for(var i=0 ; i<nums.length ; i++)
    {
        if(val===nums[i])
        {
            nums.splice(i,1);
            i=i-1;
        }
    }
    console.log(nums) ;
};