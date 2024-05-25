const mychest = {
    name: "Secret Chest",
    _secret: "k.o.",

    get secret(){
        return this._secret.toUpperCase()

    },

    set secret(value){
        this._secret = value
    }
}

console.log(mychest.secret)


/*
class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);


// old syntax 

function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);


// object based

const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);

*/



// const myChest = {
//     _secret: null,
//     _secretKey: "1234", // Predefined key for simplicity
//     _secret2: null,
//     _secretKey2: "5678", // Predefined key for the second secret
// };

// Object.defineProperty(myChest, 'secret', {
//     get: function(key) {
//         if (key === this._secretKey) {
//             return this._secret;
//         } else {
//             return "Incorrect key!";
//         }
//     },
//     set: function({key, value}) {
//         if (key === this._secretKey) {
//             this._secret = value;
//         } else {
//             console.log("Incorrect key!");
//         }
//     }
// });

// Object.defineProperty(myChest, 'secret2', {
//     get: function(key) {
//         if (key === this._secretKey2) {
//             return this._secret2;
//         } else {
//             return "Incorrect key!";
//         }
//     },
//     set: function({key, value}) {
//         if (key === this._secretKey2) {
//             this._secret2 = value;
//         } else {
//             console.log("Incorrect key!");
//         }
//     }
// });

// // Demonstrating the magical properties
// console.log("Setting secret with correct key...");
// myChest.secret = {key: "1234", value: "The treasure is buried under the old oak tree."};
// console.log("Getting secret with correct key...");
// console.log(myChest.secret("1234")); // Output: The treasure is buried under the old oak tree.
// console.log("Getting secret with incorrect key...");
// console.log(myChest.secret("wrong_key")); // Output: Incorrect key!

// console.log("Setting second secret with correct key...");
// myChest.secret2 = {key: "5678", value: "The second treasure is in the cave."};
// console.log("Getting second secret with correct key...");
// console.log(myChest.secret2("5678")); // Output: The second treasure is in the cave.
// console.log("Getting second secret with incorrect key...");
// console.log(myChest.secret2("wrong_key")); // Output: Incorrect key!
