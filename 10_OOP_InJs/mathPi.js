const treasureChest = {
    gold: 10,
    jewels: ['ruby', 'diamond', 'emerald']
}

const gold_descriptor = Object.getOwnPropertyDescriptor(treasureChest,"gold")
const jewels_descriptor = Object.getOwnPropertyDescriptor(treasureChest,"jewels")

console.log(gold_descriptor)
console.log(jewels_descriptor)

console.log(treasureChest)

treasureChest.gold = 10000

console.log(treasureChest)

// let make gold property of treasure chest object as not writable so that it's value can't be changed 
// and make jewels not emurable so that jewels do not show up

Object.defineProperty(treasureChest,"gold",{
    writable: false
})
// enumerable false will hide jewels property while iterating object treasureChest or printing it
Object.defineProperty(treasureChest,"jewels",{
    enumerable: false
})

treasureChest.gold = 500000   // will not change the value of gold now also will not give any error (error can occur if using strict mode)
console.log(treasureChest)
console.log(Object.keys(treasureChest))
console.log(treasureChest.jewels)










/*
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}
*/