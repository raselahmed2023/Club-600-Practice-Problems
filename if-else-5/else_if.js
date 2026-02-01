//1
const price=2500;
if(price>=3000){
    const discount= price/100*5;
    const pay= price-discount;
    console.log(pay);
} else if( price>=6000){
    const discount= price/100*15;
    const pay=price-discount;
    console.log(pay);
} else {
    console.log(price);
}

//2 
const age=15;
if(age<=12){
    console.log("Free Food");
} else if(age>=60){
    console.log("50 percentage Discount")
} else{
    console.log("Pay Full");
}

//3
const bankBalance= 5000;
if(bankBalance<1000){
    console.log("Deposit Money");
} else if(bankBalance>=1000 && bankBalance<=5000){
    console.log("Bindas Life Enjoy Kor");
} else{
    console.log("Tui Dhoni, Amk biya kor");
}

//4
const examMark= 86;
if(examMark<50){
    console.log("Fail");
} else if(examMark>=50 && examMark<=80){
    console.log("Pass")
} else{
    console.log("A+")
}

//5
const bookPage=500;
if( bookPage<=100){
    console.log("small Book");
} else if(bookPage>100 && bookPage<=500){
    console.log("Mid-size book");
} else{
    console.log("heart-attack size book");
}

//6
const temp= 22;
if(temp<0){
    console.log("Ice");
} else if( temp>=0 && temp<=20){
    console.log("Cool cool");
} else{
    console.log("Hot hot")

}

//7
const playerLevelGame=51;
if(playerLevelGame<10){
    console.log("novice");
} else if (playerLevelGame>=10 && playerLevelGame<=50){
    console.log("Expert");
} else{
    console.log("Pro Gamer");
}