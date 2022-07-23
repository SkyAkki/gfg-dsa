/* -------------------------------------------------------------------------------------------- */
// My Naive approach
// Time Complexity : theta(n*logn)
/* function totalSetBits(num){
    let count = 0;
    for(let i = 1; i <= num; i++){
        let dummy = i;
        while(dummy > 0){
            if((dummy%2 !== 0)){
                count++;
            }
            dummy = dummy>>1;
        }
    }
    console.log(count)
}
totalSetBits(17) */

/* -------------------------------------------------------------------------------------------- */
// GFG Approach Simple
function totalSetBits(num){
    num++;
    let count = 0;
    let iterate = Math.floor(Math.log2(num)) + 1;
    while(iterate > 0){
        let numberOfGroups = Math.floor(num/Math.pow(2,iterate-1));
        let numberOfSetGroups = Math.floor(numberOfGroups/2);
        let numberOfBits = numberOfSetGroups * Math.pow(2,iterate-1);
        count += numberOfBits;
        if(numberOfGroups%2 !== 0){
            let remainder = num % Math.pow(2,iterate-1)
            count += remainder;
        }
        console.log(`iteration: ${iterate}, numberOfGroups: ${numberOfGroups}, numberOfSetGroups: ${numberOfSetGroups}, numberOfBits: ${numberOfBits}, count: ${count}`)
        iterate--;
    }
}
totalSetBits(7)