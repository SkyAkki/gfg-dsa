/* --------------------------------------------------------------------------- */
// My Naive Approach
/* function twoOddOccuring(arr){
    for(let i =0; i<arr.length; i++){
        let count = 0;
        for(let j = 0; j<arr.length; j++){
            if(arr[i]===arr[j]){
                count++
            }
        }
        if(count%2!==0){
            console.log(arr[i])
        }
    }
} */
// twoOddOccuring([3,4,3,4,5,4,4,6,7,7])
// twoOddOccuring([4,3,3,4,4,4,5])
// twoOddOccuring([7,7,8,7,7,8,8,9])

/* --------------------------------------------------------------------------- */
// GFG approach
function twoOddOccuring(arr){
    let xor = 0;
    let result1;
    let result2;
    for(let i = 0; i<arr.length; i++){
        xor = xor ^ arr[i];
    }
    let rightMostOne = xor & (~(xor-1));
    for(let i = 0; i<arr.length; i++){
        if(arr[i] & rightMostOne !== 0){
            result1 = result1 ^ arr[i]
        }
        else{
            result2 = result2 ^ arr[i]
        }
    }
    console.log(result1,result2)
}
// twoOddOccuring([3,4,3,4,5,4,4,6,7,7])
// twoOddOccuring([4,3,3,4,4,4,5])
// twoOddOccuring([7,7,8,7,7,8,8,9])