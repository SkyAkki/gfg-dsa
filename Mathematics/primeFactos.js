/* --------------------------------------------------------------------------- */

// MyApproach
// Time Complexity : O(n*logn)
/* function primeFactors(num){
    for(let i=2; i<=num;i++){
        while(num%i == 0){
            console.log(i)
            num = num/i
        }
    }
}
primeFactors(924) */

/* --------------------------------------------------------------------------- */

// GFG Approach
// Time complexity : O(n^2*log(n)) or O(n^1.5*log(n))
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
function primeFactors(num){
    for(let i=2; i<num; i++){
        if(checkPrime(i)){
            let x = i; //since multiple powers of i can divide num as well, so storing them in x
            while(num%x == 0){
                console.log(i)
                x *= i
            }
        }
    }
}
primeFactors(450) */

/* --------------------------------------------------------------------------- */

// GFG Approach, Optimized
/* function primeFactors(num){
    if (num<=1) return
    for(let i =2; i*i<=num; i++){
        while(num%i == 0){
            console.log(i)
            num = num/i
        }
    }
    if(num>1){
        console.log(num)
    }
}
primeFactors(588) */

/* --------------------------------------------------------------------------- */

// GFG Solution Even more optimised
// Time Complexity: Worst case when n is prime Theta(sqrt(n))
function primeFactors(num){
    if (num == 1) return;
    while(num%2 == 0){
        console.log(2)
        num = num/2
    }
    while(num%3 == 0){
        console.log(3)
        num = num/3
    }
    for(let i = 5; i*i <= num; i=i+6){
        if(num%i == 0){
            console.log(i)
            num = num/i
        }
        if(num%(i+2) == 0){
            console.log(i+2)
            num = num/(i+2)
        }
    }
    if(num>3){
        console.log(num)
    }
}
primeFactors(450)