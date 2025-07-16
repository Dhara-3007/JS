function myFunction(){
    console.log("D");
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("A");
}

// myFunction();

// function addtwonum(num1,num2){
//    console.log( num1+num2);
// }

function addtwonum(num1,num2){
    // let result = num1+num2; 
    // return result; 
    return num1+num2;
}

//addtwonum(3,"9");
const result = addtwonum(3,9)
//console.log("RSULT:",result);

function loginUSer(username="Dhara"){
    if(username === undefined){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in` 
}

//console.log(loginUSer("DHARAA"));
//console.log(loginUSer());

function calculateCart(val1,val2,...num1){
    return num1
}
console.log(calculateCart(200,900,3200,765,9756,2120));


const user = {
    username:"Dhara",
    price:300,
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}.`);
}

//handleObject(user);
handleObject({
    username:"Jinal",
    price:499
})

const myNewArr = [20,70,400]
function returnValue(getArr){
    return getArr[2]
}
console.log(returnValue(myNewArr));
