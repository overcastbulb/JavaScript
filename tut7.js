console.log('We are in tut 7.js and lets disscuss about arrays');
let marks = [10,20,30,40,50,60,70,80,90,100];
const fruits =['Orange','Apple','Pineapple'];
const mixed = ['str',89,[3.5,55]];

const arr = new Array(23,133,25,'Jackfruit');
// console.log(marks);
// console.log(mixed);
// console.log(fruits);
// console.log(marks);

// console.log(arr.length);
// console.log(Array.isArray(89));
arr[0] = 'harry';
let arrelement = arr[0];
// console.log('element :',arrelement);
// console.log(arr);

let value = marks.indexOf(70);
// console.log(value);

// Mutating or Modifying arrays
// marks.push(35); adds number from backwards
// marks.unshift(1005); adds number from forwrds
// marks.pop(); removes an element from backward
// marks.shift(); removes an element from forward
// marks.splice(4,8); removes an element from range you choose.
// marks.reverse(); reverses the whole array
let marks2 = [1,2,3,5];
marks = marks.concat(marks2);
// console.log(marks);

let myobj = {
    'first name':'Aniruddha',
    channel:'CodeWithAniruddha',
    isActive:true,
    marks:[1,5,7,9]
}
console.log(myobj);
console.log(myobj['channel']);
console.log(myobj.channel);