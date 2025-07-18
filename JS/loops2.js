const num = [1,2,3,4,5,6,,8,9,10]
//const newnums = num.filter((num) => num>4);
const newnums = num.filter((num) => {
    return num>4
});
console.log(newnums);
