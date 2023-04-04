/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * param {number[]} nums
 * return {number}
 */
var removeDuplicates = function(nums) {

    var current=0 , counter=0 ;

    for(var i=0 ;i<nums.length ; i++)
    {
        if(nums[current]==nums[current+1])
        {
            nums[current] = "_" ;
            current++;
            counter++;
        }
        else
        {
            current++;
        }
    }
    
    
    for(var j=0 ;j<nums.length ; j++)
    {
        if(isFinite(nums[j]) == false)
        {
            for(var k=j+1 ;k<nums.length ; k++)
            {
                if(isFinite(nums[k]) == true)
                {
                    const temp = nums[k];
                      nums[k] = nums[j];
                      nums[j] = temp;
                      break;
   
                }
            }
        }
    }
    for( var l=0 ;l<counter; l++)
    {
        nums.pop();
    }

    return nums.length ;
};