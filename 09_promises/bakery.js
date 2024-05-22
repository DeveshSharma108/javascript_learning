const menu = {
    'Cheese cake':3000,
    'Black Forest cake':5000,
    'Red Velvet cake':6000,
    'Fruit cake':5000,
    'Atta Jaggery cake':4000,
}

function placeOrder(cake){
    const baking = new Promise(function(resolve,reject){
        console.log(`baking your ${cake} 🍰🍰😋`)
        console.log(`will be ready in ${(menu[cake])/1000} seconds\n`)

        const failure = Math.random()<0.8 ? false:true
        setTimeout(()=>{
            if(!failure){
                resolve("You can pick it up after payment 💸💸.")
                console.log(`your ${cake} is ready 👍\n`)
            }
            else{
                reject("You can wait or come again later sorry for the inconvenience")
                console.log('The oven is not working properply\n')
                console.log(`Sorry! 🙇🙇 your ${cake} is not ready yet!\n`)
            }
            
        },(menu[cake]))
    })
    baking
    .then((message)=>{console.log(message)})
    .catch((message)=>{console.log(message)})
    .finally(()=>{console.log("Have a nice day 🙏\n")})
}

placeOrder("Red Velvet cake")
placeOrder("Cheese cake")
placeOrder("Atta Jaggery cake")
placeOrder("Black Forest cake")
placeOrder("Fruit cake")