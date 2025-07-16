// // singleton

// //object literals
// const mySym = Symbol("key2");
// const JsUser={
//     name:"Dhara",
//     age:20,
//     [mySym]:"mykeys",
//     location:"Ahemdabad",
//     email:"dhara@gmail.com",
//     isLoggin:false,
//     lastLoin:["Monday","Wednesday"],
// }

// // console.log(JsUser.email);
// // console.log(JsUser["email"]);
// // console.log(JsUser[mySym]);
// // console.log(typeof JsUser[mySym]);

// // JsUser.email = "dara@gmail.com"
// // Object.freeze(JsUser); //don't change email
// // JsUser.email="deide@gmail.com"

// // console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello Dharaa");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello i am Dharaa and my age is, ${this.age}`);
// }
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// const tinderUser={}
// tinderUser.id="123abc"
// tinderUser.name="Pooja"
// tinderUser.isLoggin=false

// console.log(tinderUser);


// const user ={
//     email:"illa@gmail.com",
//     userfname:{
//         firstname:"Dhara",
//         lastname:"Sudra",}
// }
//console.log(user);

//console.log(user.userfname);
// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"c",4:"d"}

//const obj3 = Object.assign({},obj1, obj2)
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const course ={
    coursename: "JS",
    price:"999",
    courseteacher:"Dhara",
}

const {courseteacher} = course
const {coursename: name} = course

console.log(courseteacher);
console.log(name);

// {
//     myName:"Dharaa",
//     coursename:"Jsinhindi",
//     price:30,
// }

