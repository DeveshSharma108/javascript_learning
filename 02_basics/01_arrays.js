// shallow copy vs deep copy ??
// slice vs splice ??
// explore splice method how we can use it to replace an element in array, different parameters of splice etc....

let ingredients = ["flour", "curd", "sugar", "butter"]
console.log("Initial ingredients:", ingredients)

console.log("Milk and Vanilla arrived")
ingredients.push("milk","vanilla")
console.log("Ingridients:",ingredients)

console.log("Curd stock finished!")
ingredients.splice(1,1)
console.log("Ingridients:",ingredients)

console.log("Found choclate in the refrigerator add to first position in ingridients list...")
ingredients.unshift("choclate")
console.log("Ingridients:",ingredients)

console.log("Need sugar and butter for the recipe..")
console.log("Ingridients for the recipe:",ingredients.slice(1,3))

console.log("Replace butter with olive oil in ingridients..")
ingredients.splice(ingredients.indexOf("butter"),1,"olive oil")
console.log("Ingridients:",ingredients)

console.log("Ingridients remaining before closing:",ingredients)





