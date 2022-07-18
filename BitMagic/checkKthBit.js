/* --------------------------------------------------------------------------- */
// Left-shift method
/* function checkKthBit(num,k){
    let shifted = 1 << k-1
    if((num & shifted) !== 0){
        console.log("Kth bit is set")
    }
    else{
        console.log("Not set")
    }
}
checkKthBit(5,4) */

/* --------------------------------------------------------------------------- */
// My Approach
// Right-shift method
function checkKthBit(num,k){
    let shifted = num >> k-1
    if(shifted % 2 !== 0){ //GFG Approach; to check last bit is set or not do bitwise and with 1
        console.log("Set")
    }
    else{
        console.log("Not set")
    }
}
checkKthBit(5,1)