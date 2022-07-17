/* --------------------------------------------------------------------------- */
// Binary Exponentiation
// My approach
// Time Complexity : O(logn)
function iterativePower(num,power){
    let result = 1;
    let original = num;
    while(power > 0){
        if(power % 2 != 0){ //Bit is 1
            result = result * original;
        }
        else{
            result = result
        }
        power = Math.floor(power/2);
        original = original * original
    }
    console.log(result)
    
}
iterativePower(4,5)
