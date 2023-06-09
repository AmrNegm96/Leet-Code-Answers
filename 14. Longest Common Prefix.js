/**
 * https://leetcode.com/problems/longest-common-prefix/
 * param {string[]} strs
 * return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length == 1) 
        return strs[0];
    var commonPrefix = "";
    strs.sort();
    var common = true;
    for (i = 0; (i < strs[0].length) && (common == true); i++) {
        var subString = strs[0].substring(0, i+1);

        for (j = 1; (j < strs.length) && (common == true); j++) {
            if (strs[j].startsWith(subString) == 0)
                common = false;
        }
        if(common)
            commonPrefix = subString;
    }
    return commonPrefix;
};
