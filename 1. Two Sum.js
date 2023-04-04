/**
 * https://leetcode.com/problems/two-sum/
 * param {number[]} nums
 * param {number} target
 * return {number[]}
 */
var twoSum = function(nums, target) {
    for(var i = 0; i< nums.length; i++){
		// work out the complement
		// eg. nums[i] === 3, target === 7, the complement will be 4
        var complement = target - nums[i];
		
		// Iterate the rest of the number and check if the complement of nums[i] exists
		// This part takes a lot of time
        var found = nums.indexOf(complement, i + 1);
        if(found !== -1){
            return [i, found];
        }
    }
    return [0, 0];
};