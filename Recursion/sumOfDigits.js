/* ============================================================================================= */
// My approach
function sumOfDigits(num){
    if(Math.floor(num/10) === 0){
        return num;
    }
    return num%10 + sumOfDigits(Math.floor(num/10))
}
let result = sumOfDigits(873);
console.log(result);
/* ============================================================================================= */