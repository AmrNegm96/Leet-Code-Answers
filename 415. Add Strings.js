/**
 * https://leetcode.com/problems/add-strings/
 * param {string} num1
 * param {string} num2
 * return {string}
 */

function fun(num1,num2){
    var A1 = num1.split("");
    var A2 = num2.split("");

    var result = [] ; 
    var carry = 0 ;

    var shift = num1.length - num2.length
    
    for(i=0 ; i<shift ; i++)
    {
        A2.unshift("0");
    }
    for(i=num1.length-1 ; i>=0 ; i--)
    {
        var x = carry + parseInt(A1[i])+parseInt(A2[i])
        if(x>=10)
        {
            carry = Math.floor(x/10) ;
            result.push(x%10)
        }
        else
        {
            result.push(x);
            carry=0;
        }
    }
    if(carry!=0)
    {
        result.push(carry);
    }
    return result.reverse().join("");
}
var addStrings = function(num1, num2) {
if (num1.length > num2.length) 
{
    return fun(num1,num2)
}
else if(num1.length < num2.length)
{
    return fun(num2,num1);
}
else
{
    return fun(num1,num2) ;
}
};



