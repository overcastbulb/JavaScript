// Type Conversion
console.log('Welcome to tut5');
let myVar;
myVar = String(34);
// console.log(myVar,(typeof myVar));
let booleanVar = String(true);
// console.log(booleanVar,(typeof booleanVar));

let date = String(new Date());
// console.log(date,(typeof date));

let arr = String([1,2,3,4,5]);
// console.log(arr.length,(typeof arr));

let i = 9;
// console.log(i.toString());

let stri = Number("5454");
// stri = Number("54d54");
// stri = Number(false);
// stri = Number(true);
// console.log(stri,(typeof stri));

// let number = parseInt('44.025486');
let number = parseFloat('44.025486');
// let number = Number('44.025486');
console.log(number.toFixed(2),(typeof number));

// Type Coercion

let mystr = Number('858');
let mynum = 34;
console.log(mystr + mynum);
