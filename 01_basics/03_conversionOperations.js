let score1 = "100"
console.log(typeof(score1))
let score1_num = Number(score1)
console.log(typeof score1_num)
console.log(score1_num)

console.log()

let score2 = "101A"
console.log(typeof score2)
let score2_num = Number(score2)
console.log(typeof score2_num)
console.log(score2_num)         // output will be NaN

console.log()
let a=null
console.log(Number(a))  // null get converted to 0 as a number; undefined --> NaN; true/false --> 1/0; empty string --> false

let loggedIn=1
console.log(typeof(Boolean(loggedIn)),Boolean(loggedIn))

/***************************** Operations *********************************************************/

// +,-,/,*,**,%,++,--

console.log("hi "+"bye")
console.log("hi "*3)  // would not output hi hi hi
console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)        //you can read the ecma script documentation for rules of conversion by the way do not write 
console.log(2 + 2 + "1")        //such confusing code instead use () to specify what has to be done first
console.log(2 + "3" + 1)
console.log(2 + 3 + "3" + 1)
console.log(+true)
console.log(+"")

let num=10
//num++ or ++num both giving 11 why? 
console.log(num)

let x = 3;
x++;

console.log(`x:${x}`);
// Expected output: "x:4, y:3"

let p = 3;
const q = ++a;

console.log(`p:${p}, q:${q}`);
// Expected output: "a:4, b:4"

