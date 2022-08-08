/* ================================================================================================ */
let sum = 30;
let count = 0;
function sumOfDigits(num){
    if(num === 0){
        return 0;
    }
    return num%10 + sumOfDigits(Math.floor(num/10))
}
function subsetSum(arr,curr,index){
    if(sum === 0 ){
        count++;
        return;
    }
    if(arr.length<index){
        if(sumOfDigits(curr) === sum){
            count++;
        }
        console.log(curr)
        return;
    }
    subsetSum(arr,curr,index+1);
    subsetSum(arr,curr + arr[arr.length-index],index+1);
}
subsetSum([10,20,15],'',1);
console.log(count)