//1
const player={
    name:'Akib Ahmed',
    age:28,
    sports:'Cricket',
    team:'Khulna'
}
console.log(player.team);

//2

const laptop={
    brand:"Lenovo",
    price:"88k",
    hardDisc:"djfi",
    ram:'32gb',
    screenSize:'15.6 inc'
} 
console.log(laptop.screenSize);

//3
const favPlace ={
       name:'Coxs Bazar',
       distance:"400km",
       popularity:'high',
}
console.log(favPlace['popularity']);

//4
const phone={
    brand:'Nokia',
    color:'black',
    price:5000
}
console.log(phone['price']);

//5
const library={
    name:"Public Library",
    location:"Dhaka",
    books:5000,
}
console.log(library['location']);

//6
const movie={
    title:"Inception",
    director:"Nolan",
    rating:9
}
console.log(movie['rating']);

//7
const college={
    name:"ndc",
    established:'1949',
    groups:['Science',"Arts",'Commerce']
}
console.log(college.groups[1]);

//8
const family={
    father:{
        name:'Rabiul Islam',
        age:60,
        profession: 'Teacher'
    },
    mother:{
        name:'Arzina Khatun',
        age:50,
        profession:"housewife"
    }
}
console.log(family.father.age);
console.log(family.mother.age);
console.log((family.father.age)+(family.mother.age));