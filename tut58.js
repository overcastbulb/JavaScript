console.log('This is tutorial 58 file');

// Set stores unique values
const mySet = new Set();  // Intialize an empty set

console.log('The set looks like :', mySet);

//Adding values to this set

mySet.add('this');
mySet.add('My name is');
mySet.add('this');
mySet.add('that');
mySet.add(34);
mySet.add(true);
mySet.add(false);

console.log('The set looks likes this now :', mySet);

// Use a constructor to initialize the set
let mySet2 = new Set([1, 45, 'this', false, { a: 4, b: 8 }]);
console.log('New Set', mySet2);

console.log(mySet.size);    // Get the size of the set

console.log(mySet.has(34)); // Check whether set has 34 or not

console.log('Before removal', mySet.has('that'));
mySet.delete('that');   // Remove an element from the set
console.log('After removal', mySet.has('that'));

// Iterating a set
for (let item of mySet) {
    // console.log('Item is : ', item);

}

mySet.forEach((item)=>{
    // console.log('Item is :', item);
});

// Quiz: Can you use Array.from(MySet) to convert set into an array?    No

Array.from(mySet)