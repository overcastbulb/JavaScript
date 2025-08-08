console.log("This is tutorial 27");

// Object Literal for creating objects
let car = {
    name: 'Maruti',
    topSpeed: 90,
    run: function () {
        console.log("Car is running");
    }
}

// We have already seen constructors like these:
// new Date();

// Creating a constructor for cars
function Generalcar(givenName, givensSpeed) {
    this.name = givenName;
    this.topSpeed = givensSpeed;
    this.run = function () {
        console.log(`${this.name} Is Running`);
    }
    this.analyze = function () {
        console.log(`This is car is slower by ${400 - this.topSpeed}Km/h than Mercedes`)
    }
}
car1 = new Generalcar('Bugatti', 320);
car2 = new Generalcar('Lamborgini', 290);
car3 = new Generalcar('Audi R8', 400);
console.log(car1, car2, car3);