console.log("This is tutorial 41");

// Creating a regular function
// const anu = function (){
//     console.log("This is the best person ever");
// }

// Converting into an arrow function
// const anu = ()=>{
//     console.log("This is the best person ever");
// }
// anu();

// Function returning something
// const greet = function(){
//     return"Good Morning";
// }

// One liners do not require braces/return
// One line will automatically return 
// const greet = ()=>"Good Morning";

// const greet = () => ({ name: "anu" });

// Single parameters do not need parenthesis but you will have to put parenthesis if there are multiple parameters
const greet = (name, ending) => "Good Morning " + name + ending;

console.log(greet('Aniruddha ', 'bye'));