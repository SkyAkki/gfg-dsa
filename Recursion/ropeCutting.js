/* ============================================================================================= */
/* function ropeCutting(n,a,b,c,count){
    if(n<0){
        return -1;
    }
    if(n===0){
        return count;
    }
    let answerA = Math.max(ropeCutting(n-a,a,b,c,count+1), ropeCutting(n-b,a,b,c,count+1), ropeCutting(n-c,a,b,c,count+1));

    return answerA
}
let answer = ropeCutting(9,2,2,2,0);
console.log(answer) */

/* ============================================================================================= */
// Time complexity : O(3^n)
function ropeCutting(n,a,b,c){
    if (n<0) return -1;
    if (n===0) return 0;
    let res = Math.max(ropeCutting(n-a,a,b,c), ropeCutting(n-b,a,b,c), ropeCutting(n-c,a,b,c));
    if(res===-1){
        return -1;
    }
    return res+1;
}
let answer = ropeCutting(23,11,9,12);
console.log(answer);