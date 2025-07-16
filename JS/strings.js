// const name = "Dharaa";
// const repoCount = 30;
 //console.log(name+repoCount);

// console.log(`Hello my name is ${name} im this age${repoCount}.`);

const gameName = new String('DharaSudra');
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('n'));
// console.log(gameName.toLowerCase());

const newString = gameName.substring(1,4);
console.log(newString);

const anotherString = gameName.slice(-7);
console.log(anotherString);

const trimString = "   Dharaa    ";
console.log(trimString);
console.log(trimString.trim());

const url = "https://momos.com/momos%20steam"
console.log(url.replace('%20','-'));

console.log(url.includes('Dhara')); //false cz url not include this string
console.log(url.includes('momos')); // true

console.log(gameName.split(""));







