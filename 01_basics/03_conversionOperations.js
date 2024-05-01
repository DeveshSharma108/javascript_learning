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