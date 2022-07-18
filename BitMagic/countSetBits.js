/* --------------------------------------------------------------------------- */
// My Approach
/* function countSetBits(num){
    let count = 0;
    while(num != 0){
        if(num & 1 === 1){ //To remove if statement we can write count = count + (n & 1)
            count++;
        }
        num = num >>> 1
    }
    console.log(count)
}
countSetBits(16) */

/* --------------------------------------------------------------------------- */
// Brian Kerningham Algorithm
/* function countSetBits(num){
    let count = 0;
    while(num > 0){
        num = num & (num-1);
        count++;
    }
    console.log(count)
}
countSetBits(15) */

/* --------------------------------------------------------------------------- */
// Lookup table method
