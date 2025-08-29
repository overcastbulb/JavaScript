console.log('This is tutorial 59');

// Symbol
const sym1 = Symbol('My identifier');
const sym2 = Symbol('My identifier');
// console.log('Symbol is', sym1);
// console.log('TYpe of Symbol is', typeof sym1);

console.log(sym1 === sym2);

const a = "This is"
const b = "This is"

console.log(a === b);
console.log(null === null);
console.log(undefined === undefined);

const k1 = Symbol("Identifier for k1");
const k2 = Symbol("Identifier for k2");

myObj = {};
myObj[k1] = "Aniruddha";
myObj[k2] = "Logan";
myObj["name"] = "Good Boy"
myObj[4] = "Good INT"

console.log(myObj);
console.log(myObj[k1]);
console.log(myObj[k2]);
console.log(myObj.k2);  // !! ALERT !! 
// Cannot do this The dot method finds the string of k2 and there is no string present such as k2

// Symbols are ignored in for in loops
for (key in myObj) {
    console.log(key, myObj[k1]);
}

console.log(JSON.stringify(myObj));