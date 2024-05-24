class Animal {
    constructor(name,diet) {
        this.name = name
        this.diet = diet
        Animal.incrementCount()
        Animal.addAnimalType(this.constructor.name)
        
    }

    speak(){
        console.log(`${this.name} making sounds.`)
    }

    static count = 0
    static animalType = []
    static incrementCount() {
        this.count++
    }

    static addAnimalType(type) {
        if (!this.animalType.includes(type)) {
            this.animalType.push(type)
        }
    }
    
    static listTypes(){

        console.log(`There are ${Animal.animalType.length} types of animal in the Zoo`)
        console.table(this.animalType)

    }
}

// console.log(Animal.count)
// const animal  = new Animal('janwar','khana')
// animal.speak()
// console.log(Animal.count)
// console.log(animal.diet)
// console.log(animal.count)

class Lion extends Animal {
    constructor(name, diet, prideSize) {
        super(name, diet)
        this.prideSize = prideSize
    }

    speak() {
        console.log(`${this.name} roars.`)
    }
}

class Eagle extends Animal {
    constructor(name, diet, wingspan) {
        super(name, diet)
        this.wingspan = wingspan
    }

    speak() {
        console.log(`${this.name} screeches.`)
    }
}

class Elephant extends Animal {
    constructor(name, diet, trunkLength) {
        super(name, diet)
        this.trunkLength = trunkLength
    }

    speak() {
        console.log(`${this.name} trumpets.`)
    }
}

class Penguin extends Animal {
    constructor(name, diet, swimSpeed) {
        super(name, diet)
        this.swimSpeed = swimSpeed
    }

    speak() {
        console.log(`${this.name} squawks.`)
    }
}


const leo = new Lion("Leo", "Carnivore", 10)
const simba = new Lion("Simba", "Carnivore", 5)
const eddie = new Eagle("Eddie", "Carnivore", 2.5)
const ellie = new Elephant("Ellie", "Herbivore", 2)
const Jumbo = new Elephant("Jumbo", "Herbivore", 1.5)
const penny = new Penguin("Penny", "Carnivore", 25)


console.log(`Total animals in the zoo: ${Animal.count}`)

// console.log(leo.constructor)
// console.log(leo.constructor.name)

// console.log(Animal.animalType)
Animal.listTypes()





/*

// ES6

class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword())
console.log(chai.changeUsername())

// behind the scene

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword())
console.log(tea.changeUsername())

*/



/*
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User)
*/



/*
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId())
*/