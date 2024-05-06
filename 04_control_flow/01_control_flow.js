const player = {
    health: 100,
    hasPotion: null // This can be true, false, or null
  };
  
  function encounterScenario(encounter, playerAction, monsterType) {
    if (encounter === "monster") {
      if (playerAction === "fight") {
        switch (monsterType) {
          case 'orc':
            player.health -= 30;
            player.health = player.hasPotion ?? player.health + 20;
            break;
          case 'goblin':
            player.health -= 10;
            break;
          case 'dragon':
            player.health -= 50;
            if (player.health <= 0) {
              console.log("Game over. You were defeated by the dragon.");
            }
            break;
          default:
            console.log("You encountered an unknown creature.");
        }
      } else if (playerAction === "run") {
        const escapeSuccess = Math.random() < 0.5;
        if (!escapeSuccess) {
          player.health -= 10;
          console.log("You failed to escape and were hit in the process.");
        } else {
          console.log("You successfully escaped!");
        }
      }
    } else if (encounter === "trap") {
      player.health -= 20;
      const healthStatus = player.health > 0 ? "You're still alive." : "You succumbed to your injuries.";
      console.log(healthStatus);
    } else if (encounter === "treasure") {
      console.log("You found a treasure chest full of gold!");
    } else {
      console.log("You wander aimlessly, nothing happens.");
    }
  
    // Check health and potion status
    const healthCheck = player.health > 0 || player.hasPotion ? "You can continue your adventure." : "You need to heal before moving on.";
    console.log(healthCheck);
  }
  
  // Test the game logic
  encounterScenario("monster", "fight", "orc");
  console.log(`Player health: ${player.health}`);

  
/*

// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}


*/

/*
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}
*/

/* 
const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
*/



  