// Understand what is happening in the example...
// function Creature(name, environment) {
//     this.name = name
//     this.environment = environment
// }

// Creature.prototype.speak = function() {
//     console.log(`I am ${this.name} and I live in ${this.environment}`);
// }

// Creature.prototype.discoverSecret = function() {
//     console.log(this.secretMessage)
// }

// function Dragon(name, environment, ability, nature, secretMessage) {
//     Creature.call(this, name, environment);
//     this.ability = ability
//     this.nature = nature
//     this.secretMessage = secretMessage
// }


// Dragon.prototype = Object.create(Creature.prototype)
// Dragon.prototype.constructor = Dragon


// function Unicorn(name, environment, ability, nature, secretMessage) {
//     Creature.call(this, name, environment)
//     this.ability = ability
//     this.nature = nature
//     this.secretMessage = secretMessage
// }


// Unicorn.prototype = Object.create(Creature.prototype)
// Unicorn.prototype.constructor = Unicorn

// const dragon = new Dragon("Dragon", "fantasy world", "fire attack", "aggressive", "Fire burns bright,");
// const unicorn = new Unicorn("Unicorn", "fantasy world", "fly", "shy", "in the light of the stars.");


// dragon.speak()
// unicorn.speak()
// dragon.discoverSecret()
// unicorn.discoverSecret()


// console.log(`${dragon.secretMessage} ${unicorn.secretMessage}`)

//console.log(Object.create(Creature.prototype))
// console.log(Creature.prototype.constructor)
// console.log(Dragon.prototype.constructor)


const arr1 = [1,2,3,4,"abc"]
const arr2 = [1,5,9,10]
const arr3 = [-1,0,10000,1.5]
//console.log(arr1.allNumbers())  // will give error because no such function for arrays in js let make it

Array.prototype.allNumbers = function(){
    for (let index = 0; index < this.length; index++) {
        if(typeof this[index] != "number"){
            return false
        }
        
    }
    return true
}

console.log(arr1.allNumbers())
console.log(arr2.allNumbers())
console.log(arr3.allNumbers())



/*
function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


/*

// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()
*/