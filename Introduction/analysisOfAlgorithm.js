// Sum of first n natural numbers
// Paused the video and wrote myself!

function sumOfN(n){
    let sum= 0
    for (let i = 1; i<=n; i++){
        sum = sum+i
    }
    return sum
}

let sum = sumOfN(3)
console.log(sum)