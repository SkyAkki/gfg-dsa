/* --------------------------------------------------------------------------- */
// My Approach
// Time Complexity : O(n*sqrt(n))
/* function checkPrime(num1){
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
function primeRange(num){
    for(let i = 0; i<=num; i++){
        if(checkPrime(i)){
            console.log(i)
        }
    }
}
primeRange(23) */

/* --------------------------------------------------------------------------- */
// Sieve Of Eratosthenes
// My Approach
/* function checkPrime(num1){
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
function primeRange(num){
    let arr = Array(num+1).fill(true)
    for(let i = 2; i<arr.length ; i++){
        if(checkPrime(i)){
            for(let j=i+1; j<arr.length; j++){
                if(j%i==0){
                    arr[j] = false
                }
            }
        }
    }
    console.log(arr)
}
primeRange(20) */

/* --------------------------------------------------------------------------- */
// Sieve Of Eratosthenes
// GFG Simple approach
/* function primeRange(num){
    let arr = Array(num+1).fill(true)
    for (let i=2;i*i <= num; i++){
        if(arr[i]){
            for(let j=2*i; j<=num; j=j+i){ //Optimization: j=i*i
                arr[j] = false
            }
        }
    }
    for(let i=2; i<= num; i++){
        if(arr[i]){
            console.log(i)
        }
    }
}
primeRange(20) */

/* --------------------------------------------------------------------------- */
// Sieve Of Eratosthenes
// GFG Final approach

function primeRange(num){
    let arr = Array(num+1).fill(true)
    for(let i =2; i<=num; i++){
        if(arr[i]){
            console.log(i)
            for(let j = i*i; j<=num;j=j+i){
                arr[j] = false
            }
        }
    }
}
primeRange(21)