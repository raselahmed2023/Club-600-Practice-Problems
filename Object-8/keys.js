//1
const book={
    name:"Panir naam Jibon",
    writer:" Rasel ahmed",
    price:220
};
const bookKeys=Object.keys(book);
const value=Object.values(book);
console.log(bookKeys);

//2
const article={
    title:"Learning JS",
    category:"Programming"
}
const articlekeys=Object.keys(article);
const authorKey = articlekeys.includes("author");
console.log(authorKey);

//3
const laptop={
    brand:"Dell",
    model:"Inspiron",
    price:45000
};
for(const key in laptop){
    const value=laptop[key];
    console.log(key,value);
};

//4
const phone={
    brand:"Samsung",
    model:"Galaxy S21",
    price:85000
};
const keys=Object.keys(phone);
for(const key of keys){
    console.log(key, phone[key]);
}

//5
const bike={
    brand:'Hero',
    price:120000,
    model:"Splendor"
}
const bikeValue=Object.values(bike);
console.log(bikeValue);

//6
const books={
    book1:"Harry Potter",
    book2:"The Hobbit",
    book3:"Game of Thrones"
};
const booksValue=Object.values(books);
console.log(booksValue);

//7
const numbers={
    a:10,
    b:20,
    c:30,
    d:40
};
let total=0;
for(let key in numbers ){
    total=total+numbers[key];
};
console.log(total);

//8
const player={
    name:"Messi",
    team:"Argentina",
    goal:91
}
const keyPlayer=Object.values(player);
console.log(keyPlayer);

//9
const building ={
    floors:10,
    address:{
        street: "Main Road",
        city: "Dhaka"},
    type:"Commercial"
}
for(const key in building){
    const value=building[key];
    console.log(key,value);
}