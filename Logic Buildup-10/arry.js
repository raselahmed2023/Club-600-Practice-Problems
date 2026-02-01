//1
/*function evenAverage(numbers){
    const evens=[];
    for ( const number of numbers){
        if(number %2 === 0){
            evens.push(number);
        }
    }
    //console.log(evens);
    let sum=0;
    for(const number of evens){
        sum+=number;
    }
    const count=evens.length;
    const avg= sum/count;
    return avg;
}
const numbers=[42,43,21,22,40,25];
const avg = evenAverage(numbers);
console.log('Average of the even number is:', avg);

//2
function oddAverage(numbers){
    const odds=[];
    for(const number of numbers){
        if(number % 2 ===1){
            odds.push(number*2);
        }  
    }
    console.log(odds);
}
const nums =[6,10,11,14,13];
const oddNumberAvg = oddAverage(nums);

//3
function oddNums(numbers){
    for(const number of numbers){
        if(number % 2 ===1)
            console.log("Odd Numbers found")
    }
    console.log("No odd numbers found")
}
const numbers=[ 24];
const oddsNew = oddNums(numbers);

//4
function oddNums(numbers){
    for (const number of numbers){
        if
    }
}*/


//5
function oddNums(numbers){
    const odds=[];
    for(const number of numbers){
        if (number %2 ===1){
            odds.push(number-1);
        }
    }
    console.log(odds);

}
const numbers = [22,1,4,5,9,11,14,13,23];
const oddsN= oddNums(numbers);