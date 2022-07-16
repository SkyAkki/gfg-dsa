
/* --------------------------------------------------------------------------- */

// My Approach <Direct Solution>
// Limitations : works till factorial 20 only.
/* function factorial(num){
    let original = num;
    let result = 1
    for(let i=1; i<=original;i++){ 
        result *= i;
    }
    return result
}
function trailingZeros(num){
    let numFactorial = factorial(num)
    let last = 0;
    let count = 0
    let iterate = true
    while(iterate){
        last = numFactorial%10
        if(last != 0){
            iterate = false
        }
        else{
            numFactorial = numFactorial/10
            count += 1
        }
    }
    return count;
}
let answer = trailingZeros(5)
console.log(answer) */

/* --------------------------------------------------------------------------- */

// My Approach <Alternate approach>
/* function trailingZeros(num){
    let countFive = 0;
    let countTen = 0;
    for(let i = 1; i<=num ; i++){
        if(i%5 == 0 && i%10 !=0){
            countFive++;
        }
        if(i%10 == 0){
            countTen++;
        }
    }
    return countFive + countTen
}
answer = trailingZeros(100)
console.log(answer) */
//Outputs 20 which is 4 less than the actual answer.This is because we are missing to count 5 in 25,50,75 and 100 i.e. 4 times. This is because these numbers have 5 as their prime factor more than once.
// Eg. 25 = 5*5 or 75 = 5*5*3
// So in above case we are only counting one 5 while it should be counted twice.

/* --------------------------------------------------------------------------- */

//GFG Approach <Alternate approach, same limitation>
//Every 5th number is a multiple of 5. So just count Math.floor(num/5)
/* function trailingZeros(num){
    return Math.floor(num/5)
}
answer = trailingZeros(25)
console.log(answer) */

/* --------------------------------------------------------------------------- */

// GFG Approach <Effecient approach> <Implemented by me>
// Count every 5th number, then every 25th, then every 125th and so on
/* function trailingZeros(num){
    let count = 0;
    let multiples = 5;
    let iterate = true;
    while(iterate){
        if(multiples <= num){
            count += num/multiples
            multiples  *= 5
        }
        else{
            iterate = false
        }
    }
    console.log(count)
}
trailingZeros(100) */

/* --------------------------------------------------------------------------- */

// GFG Solution
function countTrailingZeros(num){
    let res = 0;
    for(let i = 5; i<=num; i=i*5){
        res = res + num/i
    }
    return res;
}