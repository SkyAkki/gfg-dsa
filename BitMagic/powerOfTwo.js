/* --------------------------------------------------------------------------- */
// GFG Naive Approach
/* function powerOfTwo(num){
    if (num === 0){
        return false;
    }
    while (num !== 1){
        if(num%2 === 1){
            return false;
        }
        num = num/2;
    }
    return true;
}
answer = powerOfTwo(6)
console.log(answer) */

/* --------------------------------------------------------------------------- */
// My Approach using Brain Kerningham algo
/* function powerOfTwo(num){
    let count = 0;
    while(num>0){
        num = num & (num-1);
        count++;
    }
    if(count === 1){
        console.log("Yes")
    }
    else{
        console.log("No")
    }
}
powerOfTwo(6) */

/* --------------------------------------------------------------------------- */
// Effecient Solution GFG
function powerOfTwo(num){
    if(num === 0){
        return false;
    }
    return (num & (num-1) === 0)
}