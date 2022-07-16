/* --------------------------------------------------------------------------- */
// My Approach
/* function allDivisors(num){
    for (let i = 1; i<=num;i++){
        if(num%i==0){
            console.log(i)
        }
    }
}
allDivisors(7) */

/* --------------------------------------------------------------------------- */
// My Approach after hint
/* function allDivisors(num){
    for (let i = 1; i*i <= num; i++){
        if(num%i == 0){
            console.log(i)
            if (i != num/i) //From GFG, to avoid printing divisor twice in case of perfect squares 
            {
                console.log(num/i)
            }            
        }
    }
}
allDivisors(100) */

/* --------------------------------------------------------------------------- */
// GFG Solution
function allDivisors(num){
    let i;
    for(i = 1; i*i < num; i++){
        if (num%i == 0){
            console.log(i)
        }
    }
    for(;i>=1;i--){
        if(num%i == 0){
            console.log(num/i)
        }
    }
}
allDivisors(100)