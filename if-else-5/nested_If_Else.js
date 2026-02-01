//1
const birthdayInviting= false;
const pocketMoney= 1010;
if( birthdayInviting==true){
    console.log("Go for Dawat");
 if(pocketMoney>1000){
    console.log("Buy Gift");
 } else{
    console.log("No gift");   
}
} else{
    console.log("Unfriend From Fb");
}


//2
const teaTime= false;
const biscuitTime = false;
if(teaTime==true){
    console.log("Cha ready");
    if(biscuitTime==true){
        console.log("With Biscuit");
    } else{
        console.log("Shudu Cha Ready");
}
}
else{
    console.log("Boshe Boshe Star Jolsha Dekhun")
}


//3
const appActive= true;
const subscriptionCheck= false;
if(appActive==true){
    console.log("Account Active");
    if(subscriptionCheck==true){
        console.log("Premium Features")
    } else{
        console.log("Free Version Use")
    }
} 
else{
    console.log("No active account")
}


//4
const foodInFridge=false;
const foodDeliveryApp= false;
if(foodInFridge==true){
    console.log("Khabar Gorom Korte Hobe");
}
if(!foodInFridge && foodDeliveryApp==true){
    console.log("Food order");
}
else{
    console.log("Ami aj Roja")
}

//5
const guestParty= 1;
const allCarryGift= true;
if(guestParty>=100 && allCarryGift==true){
    console.log("Lets party all night.");
}
else{
    console.log("I will party with myself");
}