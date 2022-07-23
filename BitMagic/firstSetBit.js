class Solution 
{
    //Function to find position of first set bit in the given number.
    getFirstSetBit(n)
    {
        for(let i = 1; n > 0;i++){
            if((n % 2) !== 0){
                return i;
            }
            n = n >> 1;
        }
        return 0;
    }
}
let instance = new Solution;
let answer = instance.getFirstSetBit(12)
console.log(answer)


/* --------------------------------------------------------------------------- */
// My Initial approach. Apparently it was 0.01 second faster somehow than the other one.
/* class Solution 
{
    //Function to find position of first set bit in the given number.
    getFirstSetBit(n)
    {
        if (n===0) return 0;
        for(let i =0; i<n;i++){
            if(((n>>i) % 2) !== 0){
                return i+1
            }
        }
    }
} */