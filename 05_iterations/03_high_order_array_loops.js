const book_array = [
    { name: "Atomic Habits",
      author: "James Clear",
      quantity: "10",
      price: "199"

    },
    { name: "Ikigai",
      author: "Héctor García and Francesc Miralles",
      quantity: "12",
      price: "149"

    },
    { name: "Sapiens",
      author: "Yuval Noah Harari",
      quantity: "8",
      price: "179"

    }
]

console.log("Books Available")
console.log()

for (const book of book_array) {
    console.log(`Book Name: ${book.name}`)
    console.log(`Book Author: ${book.author}`)
    console.log(`Book Stock: ${book.quantity}`)
    console.log()
    
}

console.log()

const price_chart = new Map()

book_array.forEach(function (book){                             // generally arrow function is used as call back function
    price_chart.set(book.name,book.price)

})

console.log("Price Chart")
console.log()
//console.log(Object.keys(price_chart))   // unxpected output why
/*This is because Object.keys() returns an array containing the keys of an object, but it only works for standard JavaScript objects, not for Map objects. In the case of a Map object, you should use Map.prototype.keys() method to get an iterator of its keys, which you can then convert to an array if needed.

Here's how you can do it with your price_chart Map object:
console.log([...price_chart.keys()]);
*/

// we can iterate over map object easily using for of loop and for each loop but below for in is used slightly complex

for (const book in Object.fromEntries(price_chart)) {
    console.log(`Book ${book} costs $${price_chart.get(book)}`);
  }



// what are iterables
// are map and objects iterable 




/*
// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
*/

/*
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// } 
*/

/*
const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
 
*/



