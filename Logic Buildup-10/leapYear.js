//1
function incomeAmount(income){
    if(income<=50000){
        return 10;
    }
    else if(income>=50001 && income<=100000){
        return 20;
    }
    else if( income>=100001 && income<=200000){
        return 30;
    }
    else if(income>200000){
        return 40;
    }
}
console.log(incomeAmount(3000));

//2
function packageDelivery(package){
    if(package<=10){
        return "100";
    }
    else if(package>10 && package<=20){
        return "300";
    }
    else if( package>20 && package<=50 ){
        return "1000"
    }
    else if(package>50){
        const excede=1000+(package-50)*100;
        return excede;
    }
}
console.log(packageDelivery(60));

//3
function marksInput(mark){
    if(mark>=80){
        return "A";
    }
    else if(mark>=70 && mark<=79){
        return "B"
    }
    else if(mark>=60 && mark<=69){
        return "C";
    }
    else if(mark>=50 && mark<=59){
        return"D"
    }
    else if(mark<50){
        return "F"
    }
}
console.log(marksInput(20));