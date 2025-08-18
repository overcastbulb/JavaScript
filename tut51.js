console.log("This is tutorial 51");

//Iterators
function fruitsIterator(values) {
    let nextIndex = 0;
    // We will return an object
    return {
        next: function () {
            if (nextIndex < values.length) {
                // We will return this object
                return {
                    value: values[nextIndex++],
                    done: false
                }
            }
            else {
                // We will return below object with only done
                return {
                    done: true
                }
            }
        }
    }
}

const myArray = ["Apples", "Grapes", "Oranges", "Kiwi"];
console.log("My Array is:", myArray);

// Using the iterator
const fruits = fruitsIterator(myArray);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);