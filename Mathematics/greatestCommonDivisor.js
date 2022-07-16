/* --------------------------------------------------------------------------- */
// My Approach (Naive Solution)
// Time Complexity : Theta(smallernum)
// Always iterates till smallernum
/* function gcd(num1,num2){
    let greatestDivisor = 1
    let smallerNum = (num1>num2)?num1:num2
    for(let i = 2; i<=smallerNum; i++){
        if(num1%i == 0 && num2%i==0){
            greatestDivisor = i
        }
    }
    console.log(greatestDivisor)
}
gcd(15,10) */

/* --------------------------------------------------------------------------- */

// GFG Approach (Naive Solution)
// Time complexity : Theta(min(num1,num2))
// Best case : minimum of the two is GCD itself, so loop breaks in the first iteration
// Worst case : GCD is 1, so loop iterates minimumNumber times.
/* function gcd(num1,num2){
    let res = Math.min(num1,num2)
    while(res>0){
        if(num1%res == 0 && b%res ==0){
            break;
        }
        res--;
    }
    console.log(res)
} */

/* --------------------------------------------------------------------------- */

// Euclid's Algorithm (Basic)
/* function gcd(num1,num2){
    while(num1 != num2){
        if(num1>num2){
            num1 = num1-num2;
        }
        else{
            num2 = num2-num1;
        }
    }
    console.log(num1)
}
gcd(12,1) */

/* --------------------------------------------------------------------------- */

// Euclidean Algorithm (Optimized)
function gcd(num1,num2){
    if (num2 == 0){
        return num1;
    }
    else{
        return gcd(num2,num1%num2)
    }
}
result = gcd(12,15)
console.log(result)