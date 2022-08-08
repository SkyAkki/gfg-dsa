function sumOfN(num){
    if(num === 1){
        return 1;
    }
    return num + sumOfN(num-1);
}
let answer = sumOfN(5);
console.log(answer)