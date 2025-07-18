// for
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        //console.log("5 is best number");
    }
    //console.log(element);
}



// for (let i = 1; i <=5 ; i++) {
//     console.log(`outer loop:${i}`);
//     for (let j = 1; j <=5 ; j++) {
//        // console.log(`Inner loop:${j}`);
//        console.log(i + '*' + j + '=' + i*j);
    
//     }
// }

let myArr = ["blue","green","pink","orange"]
//console.log(myArr.length);

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
   // console.log(element);
    
    
}

//Break and continue

// for (let index = 1; index <=10; index++) {
//     if(index == 5){
//         console.log("DETECT 5");
//         break;
//     }
//     console.log(`Value of i ${index}`);
// }
for (let index = 1; index <=10; index++) {
    if(index == 5){
       // console.log("DETECT 5");
        continue;
    }
   // console.log(`Value of i ${index}`);
}

// WHILE LOOPSSSSS
let index = 1;
while(index <= 10){
    //console.log(`Value of index is ${index}`);
    index = index + 2

}

let myArray = ["Dhara","Jinal","Manya","Nishhi"];
let arr = 0
while (arr < myArray.length) {
    //console.log(`value is ${myArray[arr]}`);
    arr = arr + 1
}
// DO-WHILE LOOPSSSSS

let score = 12
do{
    //console.log(`Score is ${score}`);
    score ++;
}while (score <= 10); 





//for of

//["","",""]
//[{},{},{}]

const arrr = [1,2,3,4,5];
for(const num of arrr){
    //console.log(num);
}

const greetings = "Hello WORLD";
for(const greet of greetings){
    //console.log(`Each char is ${greet}`);
}

//MAPSSSS - for unique values

const map = new Map()
map.set('IN',"India");
map.set('NZ',"NewZeland");
//map.set('IN',"India");
//console.log(map);

for (const key in map) {
    console.log(key);
}

for(const [key,value] of map){
    //console.log(key, '=',value);
}

// const myObject ={
//     'game1':'Templerun',
//     'game2':'Subway',
// }
// for(const value of myObject){
//     //console.log(myObject);
// }

const myObj={
    js:'Javascript',
    cpp:'c++',
    c:'c',
}

for (const key in myObj) {
   // console.log(`${key} for is ${myObj[key]}`);
 
}


const prog = ["js","c++","java","python"]
for (const key in prog){
    //console.log(prog[key]);
}

//FOR EACH LOOOP
const code = ["js","c++","java","python"];
// code.forEach( function (item){
//     console.log(item);  
// })

// code.forEach((item) => {
//     console.log(item);
// })

// function printMe(item) {
//     console.log(item);
// }
// code.forEach(printMe)

const myCode =[
    {
        langname:"Javascript",
        langfilename:"JS"
    },
        {
        langname:"Python",
        langfilename:"py"
    },
        {
        langname:"C++",
        langfilename:"c"
    },
]

myCode.forEach((item)=>{

    console.log(item.langname);
    
})