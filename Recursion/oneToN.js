/* ------------------------------------------------------------------------------------------------- */
// Print from N to 1
/* function oneToN(num){
    if(num <= 0){
        return;
    }
    console.log(num);
    oneToN(num-1);
}
oneToN(5) */

/* ------------------------------------------------------------------------------------------------- */
// Print from 1 to N
function oneToN(num){
    if(num <= 0){
        return;
    }
    oneToN(num-1);
    console.log(num);
}
oneToN(5)