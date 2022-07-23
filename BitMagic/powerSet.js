/* --------------------------------------------------------------------------- */
function powerSet(str){
    for(let i = 0; i<Math.pow(2,str.length); i++){
        for(let j = 0; j<str.length; j++){
            if( (i & (1<<j)) > 0){
                process.stdout.write(str[j]);
            }
        }
        process.stdout.write("\n");
    }
}
powerSet('abc')