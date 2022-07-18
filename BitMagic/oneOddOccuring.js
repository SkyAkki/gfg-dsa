/* --------------------------------------------------------------------------- */
// Naive approach
/* function oneOddOccuring(arr){
    for (let i =0 ; i< arr.length; i++){
        let count = 0;
        for(let j = 0; j<arr.length; j++){
            if(arr[i] === arr[j]){
                count++;
            }
        }
        if(count %2 !== 0){
            console.log(arr[i]);
            break;
        }
    }
} */
// oneOddOccuring([4,3,3,4,4,4,5])
// oneOddOccuring([7,7,8,7,7,8,8])

/* --------------------------------------------------------------------------- */
// GFG Effecient Solution
/* function oneOddOccuring(arr){
    let result = 0 // result ^ 0 = result
    for(let i =0; i<= arr.length; i++){
        result = result ^ arr[i]
    }
    console.log(result)
}
oneOddOccuring([7,7,8,7,7,8,8]) */

/* --------------------------------------------------------------------------- */
function missingElement(arr){
    let range = arr.length + 1;
    let xor = 0;
    for (let i = 0; i<arr.length; i++){
        xor = xor ^ arr[i];
    }
    for (let i = 1; i<=range; i++){
        xor = xor ^ i;
    }
    console.log(xor)
}
missingElement([1,4,3])