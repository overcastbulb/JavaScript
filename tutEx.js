// Flour constructor

function Flour(egg, bakingpowder, whitesugar) {
    this.egg = egg;
    this.bakingpowder = bakingpowder;
    this.whitesugar = whitesugar;
}

// Slogan

Flour.prototype.slogan = function () {
    return `This cake is the best`;

}

// Create an object from this constructor now
let make = new Flour(2, 500, 7);
console.log(make.slogan());

// Cake

function Cake(egg, bakingpowder, whitesugar, water, oven) {
    Flour.call(this, egg, bakingpowder, whitesugar);
    this.water = water;
    this.oven = oven;
}

// Inherit the prototype
Cake.prototype = Object.create(Flour.prototype);

// Manually set the constructor

Cake.prototype.constructor = Cake;

let cook = new Cake(4, 500, 7, 500, 15);
console.log(cook);