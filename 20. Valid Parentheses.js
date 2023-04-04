/**
 * https://leetcode.com/problems/valid-parentheses/
 * param {string} s
 * return {boolean}
 */
var isValid = function(s) {

    var x = [];

    if(s.length <= 1 || (s.length) % 2 != 0 || s[0]==")" || s[0]=="}" || s[0]=="]"){
        return false ;
    }else{
        var flag = true ;
        for(var i=0 ; i<s.length ; i++)
        {if(s[i]=="(" || s[i]=="[" || s[i]=="{")
            {
                x.push(s[i]);
            }
            else
            {   
                switch(s[i])
                {
                    case ("]"):
                       if(x.pop()!="[")
                       {
                            flag = false ;
                       }
                        break;
                    case ("}"):
                       if(x.pop()!="{")
                       {
                            flag = false ;
                       }
                        break;
                    case (")"):
                       if(x.pop()!="(")
                       {
                            flag = false ;
                       }
                        break;
                }
            }
            if(flag==false) return false ;
        }
        if(x.length!=0)
        {
            return false ;
        }
        return flag ;
    }  
};