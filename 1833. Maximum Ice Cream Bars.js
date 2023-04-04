/**
 * https://leetcode.com/problems/maximum-ice-cream-bars/
 * param {number[]} costs
 * param {number} coins
 * return {number}
 */
var maxIceCream = function(costs, coins) {
    costs.sort(function(a, b){return a - b})

    var counter = 0;

    if(coins < costs[0])
    {
        return counter ; 
    }

    for(var i=0 ; i<costs.length ; i++)
    {
        if(coins >= costs[i])
        {
            coins = coins-costs[i] ;
            counter++;
        }
        else
        {
            break;
        }
    }
    console.log(costs);
    console.log(i) ;
    return counter ;
};