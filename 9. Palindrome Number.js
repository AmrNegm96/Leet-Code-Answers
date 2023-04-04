/**
 * https://leetcode.com/problems/palindrome-number/
 * param {number} x
 * return {boolean}
 */
var isPalindrome = function(x) {
    return x.toString().split('').reverse().join('') == x ;
  };