// function performRole(roleName, playName) {
//   console.log(
//     `${this.actorName} is performing as ${roleName} in the play ${playName}`
//   );
// }

// const Alice = {
//   actorName: "Alice",
//   talent: "Versatility",
//   play: function (roleName, playName) {
//     performRole.call(this, roleName, playName);
//   },
// };
// const Bob = {
//   actorName: "Bob",
//   talent: "Dramatic Flair",
//   play: function (roleName, playName) {
//     performRole.call(this, roleName, playName);
//   },
// };

// // performRole("chor","Chor Police")
// performRole.call(Alice, "Chor", "Chor Police");
// performRole.call(Bob, "Police", "Chor Police");
// performRole.call(Alice, "Joker", "Circus");
// console.log()
// Alice.play("Vetal","Sinhaasan Battisi");

/*
function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
*/
