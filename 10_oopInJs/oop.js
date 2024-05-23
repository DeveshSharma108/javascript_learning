const character1 = {
    name:"Tanjiro",
    style:"Water Breathing",

    about: function(){
        //console.log(`${name} uses ${style} style.`)  // why error
        console.log(`${this.name} uses ${this.style} style.`)
        //console.log(this)   // here for the about function this refers to the character1 object
    }
}

// console.log(character1.name)
//console.log(character1.about())
// console.log(this)

// now if I want to create a new character object I have to copy paste the above code with changed values instead we can take help of function to do this

// const character2 = {
//     name:"Zenitsu",
//     style:"Thunder Breathing",

//     about: function(){
//         console.log(`${this.name} uses ${this.style} style.`)
//     }
// }


// in javascript function is also an object 🤔

const characterCreate = function(name,style){
      
    this.name = name
    this.style = style

    // const about = function(){
    //     console.log(this)
    //     console.log(`${this.name} uses ${this.style} style.`)
    // }
    // about()
    // this.about = function(){
    //     console.log(this)
    // }
    // this.about()
    // console.log(this)
    return this

}

/* when I didn't used const I got 
  name: 'Tanjiro',
  style: 'Water Breathing',
  hero1: [Circular *1]
}
what was circular ??*/
let hero1 = characterCreate("Tanjiro","Water Breathing")   
console.log(hero1.name)
let hero2 = characterCreate("Zenitsu","Thunder Breathing")
console.log(hero1.name) // why value is overwritten 


// Hence we use new, it help to create multiple instances of same object, while using we can skip return this also it will implicitly do it

let heroOne = new characterCreate("Tanjiro","Water Breathing")   
console.log(heroOne.name)
let heroTwo = new characterCreate("Zenitsu","Thunder Breathing")
console.log(heroOne.name) // why value is overwritten 

console.log(heroOne.constructor)
console.log(hero1.constructor)




/*
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);
*/