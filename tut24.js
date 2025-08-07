console.log("Welcome to Tutuorial 24");

let today = new Date();
// console.log(typeof today);
let otherDate = new Date('09/13/1976');
otherDate = new Date('8-4-2003 04:54:08');
console.log(otherDate);

let a;
a = otherDate.getDay();
a = otherDate.getDate();
a = otherDate.getMinutes();
a = otherDate.getHours();
a = otherDate.getSeconds();
a = otherDate.getTime();
a = otherDate.getMilliseconds();
a = otherDate.getMonth();
console.log(a);

otherDate.setDate(23);
otherDate.setMonth(3);
otherDate.setFullYear(1850);
otherDate.setMinutes(2);
otherDate.setHours(1);
otherDate.setSeconds(3);
otherDate.setMilliseconds(22);
console.log(otherDate);