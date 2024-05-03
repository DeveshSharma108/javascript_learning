// PRIMITIVE DATA TYPES

// Number: Numeric data type in JavaScript.
let num = 42;
console.log(typeof num); // "number"

// String: A sequence of characters used to represent text.
let str = "Hello, world!";
console.log(typeof str); // "string"

// Boolean: Represents a logical entity and can have two values: true or false.
let bool = true;
console.log(typeof bool); // "boolean"

// Null: Represents the intentional absence of any object value.
let empty = null;
console.log(typeof empty); // "object" - this is a known quirk in JavaScript, typeof null is "object"

// Undefined: Indicates that a variable has not been assigned a value.
let undef;
console.log(typeof undef); // "undefined"

// Symbol: A unique and immutable primitive value that can be used as the key of an Object property.
let sym = Symbol('sym');
console.log(typeof sym); // "symbol"

// BigInt: An arbitrary-precision integer.
let bigInt = BigInt(1234567890123456789012345678901234567890);
console.log(typeof bigInt); // "bigint"

// NON-PRIMITIVE DATA TYPES (Objects)

// Object: The non-primitive data type that stores collections of data.
let obj = { name: "John", age: 30 };
console.log(typeof obj); // "object"

// Array: A type of object used for storing multiple values in a single variable.
let arr = [1, 2, 3];
console.log(typeof arr); // "object"

// Function: A block of code designed to perform a particular task.
function greet() {
  return "Hello, world!";
}
console.log(typeof greet); // "function"

// Date: An object that represents a single moment in time.
let date = new Date();
console.log(typeof date); // "object"

// RegExp: A regular expression object that describes a pattern of characters.
let regex = /ab+c/;
console.log(typeof regex); // "object"

// what is the difference between primitive and non primitive data types?