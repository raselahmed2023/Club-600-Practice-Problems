//1
const headphone={
    brand:"Sony",
    price:3000,
    color:"red"
};
Object.freeze(headphone);
headphone.age=2;
console.log(headphone);
//its not adding

//2
const player={
    name:"Messi",
    goals:800,
    club:"Inter Miami"
};
Object.freeze(player);
player.team="argentina";
console.log(player);
//not added

//3
const book={
    title:"Harry Potter",
    author:"JK Rowling",
    pages:500
};
Object.seal(book);
book.author="rasel ahmed";
console.log(book);
//added


//4
const gadget={
    name:"iPhone",
    price:120000,
    color:"Black"
};
delete gadget.price;
console.log(gadget);

//5
const animal={
    name:"Tiger",
    location:"Sundarban"
}
Object.freeze(animal);
animal.name="bag";
console.log(animal);

//6
const food={
    name:"Pizza",
    price:500,
    size:"Large"
};
Object.seal(food);
food.price=400;
console.log(food);