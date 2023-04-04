/**
 * https://leetcode.com/problems/roman-to-integer/
 * param {string} s
 * return {number}
 */
var romanToInt = function(s) {
    var assocArray = new Array();

    assocArray["I"] = 1 ; 
    assocArray["V"] = 5 ; 
    assocArray["X"] = 10 ; 
    assocArray["L"] = 50 ; 
    assocArray["C"] = 100 ; 
    assocArray["D"] = 500 ; 
    assocArray["M"] = 1000 ; 

    var romanNum = s.split('');
    
    var sum = 0 ;
    var temp= 0 ;

    for(var i=0 ; i<romanNum.length ; i++)
    {
     if (assocArray[romanNum[i]] < assocArray[romanNum[i+1]] )  
     {
        temp = - assocArray[romanNum[i]] + assocArray[romanNum[i+1]];
        i++;
     } 
     else
     {
        temp = assocArray[romanNum[i]] ;
     }
        sum = sum + temp;  
    }
    return sum;

};