/* --------------------------------------------------------------------------- */

// My Approach
// Time complexity : O(a*b - max(a,b))
/* function lcm(num1,num2){
    let product = num1*num2;
    let maxNum = Math.max(num1,num2);
    let result;
    for(let i = product; i>=maxNum; i--){
        if(i%num1 == 0 && i%num2 == 0){
            result = i;
        }
    }
    console.log(result)
}
lcm(3,7) */

/* --------------------------------------------------------------------------- */

// GFG Approach
// Time Complexity: O(a*b-max(a,b))
/* function lcm(num1,num2){
    let res = Math.max(num1,num2)
    while(true){
        if(res%num1 == 0 && res%num2 == 0){
            return res
        }
        res++
    }
}
answer = lcm(6,4)
console.log(answer) */

/* --------------------------------------------------------------------------- */

// GFG Solution based on formula
// Time Complexity: O(log(min(a,b)))
function gcd(num1,num2){
    if (num2 == 0){
        return num1
    }
    return gcd(num2,num1%num2)
}
function lcm(num1,num2){
    let greatestDivisor = gcd(num1,num2);
    let product = num1*num2;
    let lcm = product/greatestDivisor;
    console.log(lcm)
}
lcm(8,2)