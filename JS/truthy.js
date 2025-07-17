const userEmail = "dhaa@gmail.com"
if (userEmail){
    console.log("GOT EMAIL");
    
}else{
    console.log("DON'T HAVE EMAIL");
    
}

//falsy value
//false, 0, -0, BigInt 0n, null, undefined, NaN

//truty value
// "0", 'false', " ", [], {}, function(){}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0){
    console.log("OBJECT IS EMPTY");
    
}

//NULISH COALESCING OPERATORE(??)
let val1
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 6

console.log(val1);

//TERNIARY OPERATOR

const iceTEa = 70
iceTEa >= 80 ? console.log("LEss than 80") : console.log("MORE THAN 80");



