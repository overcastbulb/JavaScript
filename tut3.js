console.log('tut3');
//Variables in js
// var, let, const
var name = `Aniruddha`;
var channel;
var marks = 34;
marks = 0;
channel = 'CodeWithHarry';
console.log(name,channel,marks);
//Rules for creating JavaScript Variables
/*
1. Cannot start with numbers 
2. Can start with letter, number, _ or $
3. Are Case Sensitive
*/
var city = 'Pune';
var _city = 'Pune';
var $city = 'Pune';
console.log(city);
console.log(_city);
console.log($city);

const OwnersName = 'Hari Ram';
// OwnersName = 'Anu'; //Cannot do this (error)
console.log(OwnersName);
const fruit = 'Orange';

{
    let city = 'Mumbai';
    city = 'Kolkata';
    console.log(city);
}
console.log(city);

const arr1 = [12,23,12,53,33];
arr1.push(45);
console.log(arr1);

/*
Most common programming case types:
1. camelCase  
2. kebab-case  
3. snake_case
4. PascalCase 
*/