const user ={
    username:"Dhara",
    price:8800,

    welcomeMsg:function(){
        console.log(`${this.username},welcome to website`);
       //currentvalue// console.log(this);
        
    }
}

// user.welcomeMsg();
// user.username = "jinal"
// user.welcomeMsg();

//console.log(this);

// function chai(){
//     let username = "DHaraa"
//     console.log(this);
// }
// chai()


const chai = () => {
    let username="Dharaa"
    console.log(this);
}
// chai()

const addTwo=(num1,num2) => {
    return num1+num2
}

console.log(addTwo(2,2));

const addthree=(num1,num2,num3) => num1+num2+num3
console.log(addthree(1,2,3));