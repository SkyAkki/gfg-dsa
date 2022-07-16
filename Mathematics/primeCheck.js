/* --------------------------------------------------------------------------- */

// My Approach
// Time complexity : O(n) (all cases)
/* function checkPrime(num){
    let count = 0;
    if(num == 1){
        return false
    }
    for (let i = num-1; i > 1; i--){
        if(num%i==0){
            count++
        }
    }
    if(count != 0){
        return false
    }
    else{
        return true
    }
}
answer = checkPrime(1)
console.log(answer) */

/* --------------------------------------------------------------------------- */

// GFG solution
// Time Complexity : O(n) (worst case when n is prime/ best case when n is even)
/* function checkPrime(num){
    if (num === 1){
        return false;
    }
    for (let i=2; i<num; i++){
        if(num%i == 0){
            return false
        }
    }
    return true
}
answer = checkPrime(3)
console.log(answer) */

/* --------------------------------------------------------------------------- */

// Optimized approach
// Time complexity : O(sqrt(n))
/* function checkPrime(num){
    if (num == 1){
        return false
    }
    for (i=2; i<Math.sqrt(num);i++){ //or i*i<=n
        if(num%i == 0){
            return false
        }
    }
    return true
}
answer = checkPrime(100)
console.log(answer)
 */

/* --------------------------------------------------------------------------- */

// Even more optimised solution
function checkPrime(num1){
    if (num1 == 1) return false;
    if (num1 == 2 || num1 == 3) return true;
    if (num1%2 == 0 || num1%3==0) return false;
    for(i=5; i*i <= num1; i=i+6){
        if(num1%i == 0 || num1%(i+2) == 0){
            return false;
        }
    }
    return true;
}
answer = checkPrime(25)
console.log(answer)