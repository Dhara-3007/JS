//ARRAYSS

// const myArr = [0,1,2,3,4,5,6]
// const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);

// //Array methods

// // myArr.push(7);
// // myArr.pop(7);

// myArr.unshift(8);
// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));

// const newArr = myArr.join();

// console.log(myArr);
// console.log(typeof newArr);

//  SLICE , SPLICE

// console.log("A" , myArr);
// const myn1 = myArr.slice(1,3)

// console.log(myn1);
// console.log("B",myArr);

// const myn2 = myArr.splice(1,3)
// console.log("c",myArr);
// console.log(myn2);

const colors=["Pink","Orange","Yellow","Blue","Green"];
const pastels=["olive","babypink"];

// const c = colors.concat(pastels);
// console.log(c);

// const c = [...colors,...pastels]
// console.log(c);

const otherArr = [1,2,3,[4,5,6],[7,8,9],[3,2,9]]
const realArr = otherArr.flat(Infinity)
console.log(realArr);

console.log(Array.isArray("DHARAAAAA"));
console.log(Array.from("DHARAAAAA"));
console.log(Array.from({name:"DHARAAAAA"})); //INTRESTING

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));


