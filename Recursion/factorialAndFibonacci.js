/* function factorial(num){
    if (num <= 0){
        return 1;
    }
    return num * factorial(num-1); 
}
let answer = factorial(3);
console.log(answer) */

function fibonacci(num){
    if(num <= 0){
        return 0;
    }
    if(num === 1){
        return 1;
    }
    return fibonacci(num-2) + fibonacci(num-1)
}
let answer = fibonacci(5)
console.log(answer)