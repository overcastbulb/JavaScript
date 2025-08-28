console.log("This is tutorial 57");

// Maps In JavaScript: We can use any type of key or value

const myMap = new Map();

const key1 = 'myStr', key2 = {}, key3 = function () { };

// Setting map values
myMap.set(key1, 'This is the string');
myMap.set(key2, 'This is blank obj');
myMap.set(key3, 'This is an empty function');

console.log(myMap);

// Getting the values from a map

let value1 = myMap.get(key3);
console.log(value1);

// Get the size of the map 
console.log(myMap.size);

// You can loop using for.. of to get keys and values
for (let [key, value] of myMap) {
    console.log(key, value);
}

// Get only keys 
for (let key of myMap.keys()) {
    console.log('key is', key);
}

// Get only values
for (let value of myMap.values()) {
    console.log('value is', value);
}

// You can loop through a map using for each loop
myMap.forEach((value, key) => {
    console.log('Key is', key);
    console.log('Value is', value);
})

// Converting map to an array
let myArray = Array.from(myMap);
console.log('Map to array is',myArray);

// Converting map to an array
let myKeysArray = Array.from(myMap.keys());
console.log('Map to keys array is',myKeysArray);

// Converting map values to an array
let myValuesArray = Array.from(myMap.values());
console.log('Map to values array is',myValuesArray);
