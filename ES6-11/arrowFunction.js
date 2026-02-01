1.

const getFirst = numbers => numbers[1];
const first = getFirst([5,34,6,26,6]);
// console.log(first);


2.

const multi=(numb1,numb2,numb3)=> numb1*numb2*numb3;
const sum=multi(4,5,6);
// console.log(sum);

3.

const getName= ()=>"unknown";
// console.log(getName());

4.

const student={
    name:"Tariq",
    pocketTK:250
}
const pocket=(student)=>student.pocketTK/5;
// console.log(pocket(student));

5.

// practice

// const number=[20,30,40,50,60,70];
// const last=number[number.length-1];
// console.log(last);

const firstLast= (arr) => arr[0]+arr[arr.length-1];
// const lastFirst=number[0]+[number.length-1]; checking it is working or not
console.log(firstLast([20,30,40,50,60,70]));

6.

const addition=(numb=[10,5])=> numb[0]+numb[1];
console.log(addition([10,20,30,40]));
console.log(addition());