
1.

/* const a=100;
 const b=20;
 const result=`The difference between ${a} and ${b} is ${a-b}`;
console.log(result) */


2.

const employee= {name:"Tariq", age:25, salary:25000};
const info=`Name:${employee.name}, Age:${employee.age}, Salary:${employee.salary} `;
// console.log(info);

3.

const fruits=["Apple", "Banana","Mango", "Lichhi"];
const likeFruits=`I love to eat: ${fruits[3]}. `;
// console.log(likeFruits);

4.

const a=50;
const b=10;
const division=`The division of a and b is ${a/b}.`;
// console.log(division);


5.
const person={firstName: "Amit", lastName:"Kumer"};
const namePer=`Full Name: ${person.firstName} ${person.lastName}`;
// console.log(namePer);

6.

const animal=["Cat", "Dog","Elephant"];
const favoAnimal=`My favorite animals are ${animal.join(", ")}`;
// console.log(favoAnimal);

7.
const student={name:"Tariq", age:25, marks:[]};
student.marks=[80,81,85];
function calAverage(marks){
    let total=0;
    for(let i=0; i<marks.length; i++){
        total= total+marks[i];
    }
    let average=total/marks.length;
    return `Total= ${total}, Average=${average}`;
}
console.log(calAverage(student.marks));