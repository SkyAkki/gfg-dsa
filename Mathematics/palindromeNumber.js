// Using in-built functions
/* function palindrome(num){
    let straight = num;
    let reversed = parseInt(num.toString().split("").reverse().join(""))
    if (straight === reversed)
    {
        console.log(true)
    }
    
}
palindrome(1001) */


// Using normal arithmetic (My Solution)
/* function palindrome(num){
    let straight = num
    let reversed = 0;
    numLength = Math.floor(Math.log10(num)+1)
    for(let i = numLength-1; i>=0 ; i--){
        reversed += (num%10)*(10**i)
        num = Math.floor(num/10)
    }
    if(reversed === straight){
        console.log(true)
    }
}

palindrome(8) */

//GFG Solution
function palindrome(num){
    let original = num
    let reverse = 0;
    let last;
    let numLength = Math.floor(Math.log10(num)+1)
    for(i=0;i < numLength;i++){
        last = num%10
        num = Math.floor(num/10)
        reverse = reverse*10 + last
    }
    if(original === reverse){
        console.log(true)
    }
}
palindrome(1001)