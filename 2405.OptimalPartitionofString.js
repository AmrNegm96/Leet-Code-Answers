/**
 * https://leetcode.com/problems/optimal-partition-of-string/description/
 * param {string} s
 * return {number}
 */

// In JavaScript, the space complexity of a Map is O(n), where n is the number of key-value pairs stored in the Map. This means that the amount of memory used by a Map is proportional to the number of elements stored in it.
// The time complexity of various operations on a Map in JavaScript depends on the specific operation being performed:
// get(key) has a time complexity of O(1)
// set(key, value) has a time complexity of O(1)
// delete(key) has a time complexity of O(1)
// has(key) has a time complexity of O(1)
// entries(), keys(), and values() have a time complexity of O(n), where n is the number of elements in the Map.
// It's worth noting that these time complexities are valid in average case, and may not hold true in all scenarios as the performance can depend on the implementation, size of the Map and other factors.
var partitionString = function(s) {

    //random
    // let map = new Map();
    // for(var i=0 ; i<s.length ; i++){
    //     if(map.has(s[i])){
    //         map.set(s[i] , (parseInt(map.get(s[i])))+1);
    //     }
    //     else{
    //         map.set(s[i],1);
    //     }
    // }
    // return Math.max(...map.values())

    //by order
    let map = new Map();
    let maxSubstrings = 0;
    for(var i=0 ; i<s.length ; i++){
        if(!map.has(s[i])){     //hdklq //kcs //sgxlveh //va
            map.set(s[i] , i);
            console.log(map);
        }
        else{  
            map.clear();
            maxSubstrings++;
            map.set(s[i],i);
        }
    }
    return maxSubstrings+1;
};

console.log(partitionString("hdklqkcssgxlvehva"));
console.log(partitionString("ssssss"));
console.log(partitionString("abacaba"));

