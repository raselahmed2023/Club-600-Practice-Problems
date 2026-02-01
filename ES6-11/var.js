1.
function add(num1 = 0, num2 = 0, num3 = 0) {
    const result = num1 + num2 + num3;
    console.log(num1, num2, num3, result);
    return result;
}
// const sum=add();
// console.log(sum);
// const total=add(4,5,6);

2.
let total = 0;

function deposit(amount = 50) {
    total = total + amount;
    console.log(total);

}
// deposit(20);
// deposit(100);

3. 

const people={
    name:"anonymous",
    monthlyIncome: 0,
}

// people.name="Ismail";
// console.log(people);


4.
let num=1;
function number(n=1){
    num=n*n;
}
// number(2);
// console.log(num)

5.

// const product={
    // productName:"Unknown product",
    // price:1,
// }
// product.productName="Milk";
// console.log(product);

6.

function favoriteBooks(books=["JS book"]){
    console.log(books);
}
// 
// favoriteBooks(["Tintin", "Masud Rana"]);


7.

function product({price=10, quantity=1} = {}){
    const totalPrice=price*quantity;
    return totalPrice;
}


// console.log(product())


8.
function doubleArray(arr=[5,10,15]){
    let result=[];
    for (let i=0; i<arr.length; i++){
        result.push(arr[i]*2)
    }
    return result;
}

// console.log(doubleArray([1,2,3]));

9.

function interestRate({principal=1000, rate=5}= {}){
    simpleRate=principal*rate/100;
    return simpleRate;
}

// console.log(interestRate());

10.

function realTax({salary=50000, tax=10}={}){
    taxPer=(salary*tax/100);
    needSalary=salary-taxPer;
    return needSalary;
}

console.log(realTax({ salary:70000, tax:10}));

