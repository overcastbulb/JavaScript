console.log("This is tutorial 56 on for-in and for-of loops");

let people = ["Anu", "Rohan", "SkillF", "Shubham", "Vikrant"];



// *************For in Loop**************
// Traditional for loop
// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);
// }

// 1.ITERATING AN OBJECT
let obj = {
    name: "Anu",
    language: "JavaScript",
    hobbies: "Andriod App Development"
}
// console.log(obj);

// 1.1 Iterating an object using Traditional for loops:
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);
// }

// 1.2 Iterating an object using for-in loop:
for (let key in obj) {
    // console.log(obj[key]);
}

// 2. ITERATING A STRING
// We can use for in with strings to loop through all the characters 
myString = "This is my string";
for (let char in myString) {
    // console.log(myString[char]);
}

// Quiz: Use Traditional for loop to iterate through the same string
myString = "This is my string";
for (let index = 0; index < myString.length; index++) {
    const element = myString[index];
    // console.log(myString[index]);
}



// *************For of Loop**************

people = ["Anu", "Rohan", "SkillF", "Shubham", "Vikrant"];


console.log("************For of Loops starts here*****************");

for(let name of people){
    console.log(name);
}

for(let name of myString){
    console.log(name);
}