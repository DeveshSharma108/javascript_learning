
const smartphones = {
    Iphone: 50,
    Samsung: 60,
    GooglePixel: 40
}

const tablets = {
    oneplusPad: 30,
    lenovoPad: 40,
    xioamiPad: 50
}


tablets["realmePad"] = 35
smartphones.Nothing = 25

console.log("Smartphones")
console.log(smartphones)

console.log("Tablets")
console.log(tablets)

let inventory = Object.assign({},smartphones,tablets) // is the {} optional ? what will happen if we don't use {}
console.log("Added smartphones and tablets to the inventory")
console.log(inventory)

const accessories = {
    boat: 100,
    noise: 80,
    jbl: 75

}
 
inventory = {...inventory,...accessories}         // ...(spread) vs assign
console.log("Added accessories to inventory")     // use let and const carefully
console.log(inventory)

console.log(Object.entries(smartphones))
console.log(Object.keys(smartphones))
console.log(Object.values(smartphones))

// Let's say we want to extract 'Iphone' and 'oneplusPad' into separate variables # de-structring object
const { Iphone, oneplusPad } = inventory;
console.log("Iphone quantity:", Iphone);
console.log("oneplusPad quantity:", oneplusPad);


// what is object de-structring it is also used in react....

/*after studying functions try --> Write a function to calculate the total number of items in each category.
Example for smarthones it should output 175(50+60+40+25).*/









/*
// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
*/