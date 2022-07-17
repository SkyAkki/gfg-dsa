/* --------------------------------------------------------------------------- */
// My Approach
/* function computePower(num,power){
    let answer = 1
    // if (power == 0) return answer
    for(let i=0;i<power;i++){
        answer = answer * num
    }
    return answer
}
answer = computePower(200,0)
console.log(answer) */

/* --------------------------------------------------------------------------- */
// My Approach Recursive
/* function computePower(num,power){
    if (power == 0){
        return 1
    }
    return num * computePower(num,power-1)
}
answer = computePower(5,0)
console.log(answer) */

/* --------------------------------------------------------------------------- */
// My Approach after hint
/* function computePower(num,power){
    let result = 1
    if(power%2 == 0){
        for(let i = 0;i<power/2; i++){
            result = result * num
        }
        result = result*result
    }
    else{
        for(let i=0; i<=power-1; i++){
            result = result * num
        }
    }
    console.log(result)
}
computePower(1,0) */

/* --------------------------------------------------------------------------- */
// GFG Recursive solution
function computePower(num,power){
    if (power == 0){
        return 1
    }
    temp = computePower(num,Math.floor(power/2))
    temp = temp*temp;
    if(power%2 == 0){
        return temp;
    }
    else{
        return temp*num;
    }
}
answer = computePower(5,4)
console.log(answer)