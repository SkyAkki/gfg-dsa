/* --------------------------------------------------------------------------- */
// Naive Approach
/* function maxAND(arr){
    maxValue = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if((arr[i]  & arr[j]) > maxValue){
                maxValue = arr[i] & arr[j];
            }
        }
    }
    console.log(maxValue)
}
maxAND([4, 8, 16, 2,9,13]) */

/* --------------------------------------------------------------------------- */
// GFG Approach
function checkBit(pattern, arr){
    let count = 0;
    for (let i = 0; i<arr.length; i++){
        if((pattern & arr[i]) === pattern){
            count++;
        }
    }
    return count;
}
function maxAND(arr){
    let result = 0;
    let count;

    for(let bit  = 15; bit >= 0; bit--){ //let bit = 31 to increase input range
        count = checkBit(result | (1<<bit),arr)
        if(count >= 2){
            result |= (1 << bit)
        }
    }

    return result;
}
let answer = maxAND([4, 8, 16, 2, 9, 13 , 13])
// let answer = maxAND([2, 9, 13])
console.log(answer)