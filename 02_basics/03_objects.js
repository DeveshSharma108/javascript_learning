const symbol_for_saffron = Symbol("Saffron")
const symbol_for_nutmeg = Symbol("Nutmeg Powder")

let sweet_boondi_recipe = {
    // using symbol for special ingridients
    [symbol_for_saffron] : "2-3 pinches",
    [symbol_for_nutmeg] : "1/2 teaspoon",

    // using strings for usual ingridients
    Chickpea_flour: "1 cup",
    Sugar: "1 + 1/2 cups",
    Almonds: "A handful",
    Pistachios:"A handful",
    Cardamom_seeds: "1 tea spoon, coarsely crushed",
    Baking_soda: "A pinch",
    Orange_food_color: "2-3 drops",
    Oil: "1 litre for frying",

    is_vegetarian : true,

    /*the method below returns number and list of special ingridents used 
    when this method is called output is
    2
    [ Symbol(Saffron), Symbol(Nutmeg Powder) ]
    undefined
    why there is undefined in third line of output and can we get rid of undifined and the Symbol() coming in output and 
    get only output as follows
    2
    ["Saffron", "Nutmeg Powder"]*/

    getSpecialIngredients() {
        let Special_ingridients = Object.getOwnPropertySymbols(this)
        console.log(Special_ingridients.length,"special ingridient used")
        console.log(Special_ingridients)
    },

    
    // a nested object(cooking_instruction) inside sweet_boondi_recipe object
    cooking_instructions:{

        1: "Prepare the garnishing by slicing the almonds and pistachios into slivers. Keep the sliced nuts, cardamom seeds, saffron, and nutmeg ready on a plate.",

        2: "Make the sugar syrup by transferring the sugar to a saucepan, adding 2 cups of water, and bringing it to a boil. The syrup should reach half-thread consistency. Once ready, switch off the heat.",

        3: "Sieve the chickpea flour and mix it with 1 cup of water and a pinch of soda bicarbonate to make a batter. Adjust the water as needed to get the right consistency.",

        4: "Test the batter by dropping it through a skimmer with small holes onto a dry plate. The batter should flow through at just the right rate to form round droplets. Adjust the consistency if necessary.",

        5: "Heat the oil and test its readiness by dropping a tiny amount of batter into it. If it rises quickly, the oil is ready. Pour the batter over the skimmer held above the oil to form droplets of boondi.",

        6: "Fry the boondi until golden, then transfer them directly into the sugar syrup.",

        7: "Repeat the process with the remaining batter, allowing the boondi to soak in the syrup for an hour. Then, drain the excess syrup using a colander.",

        8: "Add the nuts, nutmeg, saffron, and cardamom to the boondi and mix well."
    }
}


console.log(sweet_boondi_recipe)
console.log()

sweet_boondi_recipe.getSpecialIngredients()
console.log()

console.log(sweet_boondi_recipe.Almonds)
console.log()

console.log(sweet_boondi_recipe.cooking_instructions)
console.log()

console.log(sweet_boondi_recipe.cooking_instructions[1])




/*// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());*/