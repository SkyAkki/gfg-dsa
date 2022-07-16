// Iterative Solution (My Approach)
/* function factorial(num){
    let original = num;
    let result = 1
    for(let i=1; i<=original;i++){ //GFG Solution initializes i=2
        result *= i;
    }
    console.log(result)
}

factorial(6) */

// Recursive Solution (My Approach)
function factorial(num){
    if (num == 0 || num == 1){ //GFG Solution does not check for num == 1 here
        return 1
    }
    return num * factorial(num-1)
}

let answer = factorial(5)
console.log(answer)