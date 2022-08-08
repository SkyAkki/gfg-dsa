/* ================================================================================================ */
function generateSubsets(str,curr,i){
    if(i===(str.length)){
        console.log(curr)
        return;
    }
    generateSubsets(str,curr,i+1);
    generateSubsets(str,curr+str[i],i+1)
}
let str = 'abc';
let result = generateSubsets(str,"",0);