/* ================================================================================================ */
function tower(n,A,B,C){
    if(n===1){
        console.log(`Move disc 1 from ${A} to ${C}`)
        return;
    }
    tower(n-1,A,C,B);
    console.log(`Move disc ${n} from ${A} to ${C}`);
    tower(n-1,B,A,C);
}
tower(2,'A','B','C');