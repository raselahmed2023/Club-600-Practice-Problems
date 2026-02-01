//1
function number(num){
    if(num>10){
        return true;
    }
    return false
}
console.log(number(5));
console.log(number(11));

//2

function dividedBy(vagKoro){
    if(vagKoro%13===0){
        return true;
    }
    return false;
}
console.log(dividedBy(14));
console.log(dividedBy(26));

//3
function restaurantBill(rice,curry,drinks){
    const total=rice+curry+drinks;
    return total;
}
console.log(restaurantBill(20,25,30));

//4
function voting (age){
    if(age>=18){
        return "Eligible for Voting";
    }
    return 'Not Eligible';

}
console.log(voting(18));

//5
function stringInput(AmiResult){
    return AmiResult.length;
}
const tryIt="Ses dekha Amader r Nai ami"
console.log(stringInput(tryIt));

//6
function jogFol(num1,num2,num3){
    const totalThree= (num1+num2+num3)/3;
    return totalThree;
}
console.log(jogFol(4,5,6));

//7
function check(nombor){
    if (nombor<0)
    {
        return nombor*-1;
    }
    return nombor;
}
console.log(check(-1));