//if
const isUSer = true
const temprature = 41
// if(temprature < 50){
//     console.log("less than 50");   
// }else{
// console.log("greater than 50");
// }
// < ,> ,<= ,>= ,== ,!= ,=== ,!==

// const score = 200;
// if(score >100){
//     const power = "fly";
//     console.log(`User power:${power}`);
// }
// console.log(`User power:${power}`);


const balance = 800
// if(balance > 500){
//     console.log("test");
// }

// if(balance<500){
//     console.log("less than");
// }else if(balance<750){
//     console.log("less than 750");
// }else if(balance<900){
//     console.log("less than 900");
// }else{
// console.log("Great");
// }

const userLoggin = true
const debitcart = true
const logedinFromGoogle = false
const logedinFromYt = true

if(userLoggin && debitcart){
    console.log("ALLOW TO BUY");
}
if(logedinFromGoogle || logedinFromYt){
    console.log("USER LOGIN");
}
