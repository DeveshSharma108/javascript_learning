// concat vs push difference ?
// find it out why we can change arrays values despite the fact that we are using const keyword while declaring arrays 🤔🤔
// example 
// const a = [1,2,3,4]
// a[3]=5
// console.log(a)


// The Time Capsule Challenge


let seventies = ['vinyl records', 'tape cassettes'];
let eighties = ['CDs', 'floppy disks'];
let nineties = ['MP3 players', 'DVDs'];

let time_capsule = [];
time_capsule = time_capsule.concat(seventies,eighties,nineties) // concat return a new array with modification we need to store it
console.log(time_capsule)                                       // in a variable

let two_thousands = ['smart phones', 'VR headset']
time_capsule.push(two_thousands)              // push adds the given item at the end of targeted array does not return a new array
console.log(time_capsule)

let pennies = Array.of('penny70s','penny80s','penny90s','penny2000s')
time_capsule = [...time_capsule, ...pennies]
console.log(time_capsule)

time_capsule = time_capsule.flat(1)  // return a new array flating the given array upto the given depth 
console.log(time_capsule)            // fating means removing nesting from sub-arrays depth = infinity will remove every nesting

console.log(Array.isArray(time_capsule))

console.log("The time capsule is ready:\n-->",time_capsule.join())


// console.log(Array.from("Devesh"))
// console.log(Array.from({name: "Devesh"})) // interesting  Array.from will return [] if not able to create array from given item
// console.log(Array.from({name: "Devesh"}.name))

