/**
 * https://leetcode.com/problems/minimum-operations-to-make-array-equal/
 * param {number} n
 * return {number}
 */
var minOperations = function(n) {

    //     {4}
    // 1, 3 ,5 , 7
    // 1, 3 ,{5} , 7 , 9

    let midIndex = Math.floor(n/2);
    let midValue = (2 * midIndex) + 1
    let counter = 0;

    if(n%2!==0){
        for(let i=0 ; i<midIndex ; i++){
            counter = counter + midValue - ((2 * i) + 1)
        }
    }

    else{
        counter = counter + 1;
        for(let i=0 ; i< (midIndex-1) ; i++){
            counter = counter + (midValue - 1) - ((2 * i) + 1)
        }
    }
    return counter;

    /**               
     * 1 , 3 , 5 , 7 ,  9
     * 2                8
     * 3                7
     * 4                6
     * 5                5
     *     4       6
     *     5       5
     *          5
     * 
     * 1 = 0
     * 2 = 1
     * 3 = 2
     * 4 = 4
     * 5 = 6
     * 6 = 9
     * 7 = 12
     * 8 = 16
     * 9 = 20
     */
};
// var minOperations = function (n) {
//     return (n*n)/4;
// }

// var minOperations = function (n) {
//     return ;
// }


console.log(minOperations(9));
console.log(minOperations(6));