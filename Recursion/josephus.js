/* ================================================================================================ */
function josephus(numOfPerson,kth){
    if(numOfPerson === 1){
        return 0;
    }
    else{
        return (josephus(numOfPerson-1,kth)+kth)%numOfPerson;
    }
}
let answer = josephus(5,3);
console.log(answer);