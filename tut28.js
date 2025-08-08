console.log("This is tutorial 28 JavaScript Playlist");

//Object Literal : Object.prototype
let obj = {
    name:"Aniruddha",
    channel:"Code with Aniruddha",
    address:"Venus"
}

function Obj(givenName){
    this.name = givenName
}

Obj.prototype.getName = function(){
    return this.name;
}

Obj.prototype.setName = function(newName){
    return this.name = newName;
}

let obj2 = new Obj("Paul");
console.log(obj2);