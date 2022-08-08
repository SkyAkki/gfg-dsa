/* ============================================================================================= */
// My Approach where I reverse the string first
/* function palindromeCheck(str,count){
    if(count>str.length-2){
        return str[count];
    }
    return palindromeCheck(str,count+1) + str[count];
}
let str = 'a';
let rev_str = palindromeCheck(str,0);
if(str === rev_str){
    console.log("true");
}
else{
    console.log("false");
} */

/* ============================================================================================= */
// My Approach after GFG Hint
function palindromeCheck(str,n){
    if(n===0 || n===1){
        return true;
    }
    else if(str[n-1] === str[str.length-n] && palindromeCheck(str,n-1)){
        return true;
    }
    else{
        return false;
    }
}
let str = 'abcb'
let result = palindromeCheck(str,str.length);
console.log(result);

/* ============================================================================================= */
// GFG Approach
/* function isPalindrome(str,start,end){
    if(start>=end){
        return true;
    }
    return (str[start]===str[end]) && isPalindrome(str,start+1,end-1);
}
let str = 'aba';
let answer = isPalindrome(str,0,str.length-1);
console.log(answer) */