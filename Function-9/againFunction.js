//1
function oddOrEvenElement(nums){
    const len=nums.length;
    if( len%2==0){
        return "Even";
    }
    return "odd";
}
const len=oddOrEvenElement([12,13,14,15,16,7])
console.log(len);

//2
function firstName(name){
    return name[0];
}
console.log(firstName("Raju"))

//3
function checkNums(nums){
    if(nums>10){
        const total= nums/10;
        return total;
    }
    else{
        const totally= nums*10;
        return totally;
    }

}
console.log(checkNums(8));

//4
function jogKoro(arr) {
    if (arr.length = 2) {
         return arr[0] + arr[1];
    }
}
const sum=jogKoro([5,11]);
console.log(sum);

//5
function duiOrTin(n){
    if(n>0){
        const total= n*2;
        return total;
    } else (n<0)
        const total=n*3;
        return total;
}
console.log(duiOrTin(2))

//6
function naamCheck(arry){
    if (arry[0].length > arry[1].length){
        return true;
    } return false;
}
const check= naamCheck(['Rasel','Ahmed'])
console.log(check);

//7

function multiplyOrHalf(a, b) {
    const pro = a * b;
    if (pro > 100) {
      return pro / 2;
    } else {
      return pro;
    }
  }
console.log(multiplyOrHalf(1,15));
  