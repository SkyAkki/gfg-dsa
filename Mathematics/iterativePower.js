/* --------------------------------------------------------------------------- */
// Binary Exponentiation
// My approach
// Time Complexity : O(logn)
function iterativePower(num,power){
    let result = 1;
    let original = num;
    while(power > 0){
        if(power % 2 != 0){ //Bit is 1;;; otherwise written as power&1
            result = result * original;
        }
        else{
            result = result
        }
        power = Math.floor(power/2); //otherwise written as n = n>>1
        original = original * original
    }
    console.log(result)
    
}
iterativePower(4,5)
