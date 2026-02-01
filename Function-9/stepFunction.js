//1

function oddNumbersSum(numbers){
    let sum=0;
    for(const number of numbers){
        if(number%2===1){
            sum=sum+number;
        }
    }
    return sum;
}
const nums=[5,15,8,7];
const total=oddNumbersSum(nums);
console.log("Sum of odd Numbers is", total);

//2
function firstTwo(arr){
    if(arr[0]<arr[1]){
        return arr[0];
    }
     else {
        return arr[1];
     }
}
console.log(firstTwo([20,45,78]));

//3
function ageOutput(age){
    if(age<18){
        return 18;
    }
    if(age>45){
        return 45;
    }
    else{
        return age;
    }
}
console.log(ageOutput([20]));

//4
function fourDivided(array){
    let sum=0;
    for(const number of array){
        if(number%4===0){
            sum=sum+number;
        }
    }
    return sum;
}
console.log(fourDivided([2,4,5,7,8,32,45]));

//5
function numbCheck(num){
    if (num<20){
        return num*2;
    }
    else {
        return num/20;
    }
}
console.log(numbCheck([15]));


//6
function negtiveNum(num){
    let sum=0;
    for (const number of num){
        if(number<0){
            sum=sum+number;
        }
    }
    return sum;
}
console.log(negtiveNum([-2,-4,4,5,-6,-9]));

//7
function threeMulti(num){
   let sum=1;
   for (const number of num){
    if(number%3===0){
        sum=sum*number
    }
   }
   return sum;
}
console.log(threeMulti([3,4,5,6,7,8,9]))