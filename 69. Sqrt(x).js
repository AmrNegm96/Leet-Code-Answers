/**
 * https://leetcode.com/problems/sqrtx/
 * param {number} x
 * return {number}
 */
var mySqrt = function(x) {

    var start = 1 ;
    var end = x ;
    var result = 0;
  
    while(start <= end)
    {
      var mid = parseInt((end+start)/2)
  
      if(mid*mid <= x)
      {
          start = mid+1 ;
          result= mid ;
      }
      else 
      {
          end = mid-1 ;
      }
  
      
    }
    return result ;
  };