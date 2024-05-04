// two methods to create string
//let a = "abcd"
//let b = new String("xyz")       // what is the difference in these two ? find it out!

// string formatting
// let name_ = "Naruto"
// let village = "Hidden Leaf Village"
// console.log(`Hey there I am ${name_} and I am from ${village}`)

let message = "The key is under the third rose bush"
console.log("Message: ",message)

let secret_key = message.toUpperCase()
console.log("Intermidiate Key: ",secret_key)

secret_key = secret_key.replace("ROSE","DAISY")
console.log("Intermidiate Key: ",secret_key)

secret_key = secret_key.slice(27,37)
console.log("Intermidiate Key: ",secret_key)

let rev = ""
for (let i = 9; i > -1; i--) {
    rev = rev + secret_key[i];
  }

secret_key = "42" + rev
console.log("Secret Key: ",secret_key)



// substring() vs slice()
// how slice works when negative values are passed ?

