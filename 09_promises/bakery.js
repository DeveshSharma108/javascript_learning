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

// placeOrder("Red Velvet cake")
// placeOrder("Cheese cake")
// placeOrder("Atta Jaggery cake")
// placeOrder("Black Forest cake")
// placeOrder("Fruit cake")


function sendMessageToPast(message, delay) {
    const trasmission = new Promise(function(resolve){
        setTimeout(()=>{
            resolve(message)
        },delay)
    })
    return trasmission
}

async function timeTravelMessages() {
    try {
        console.log("Sending messages to the past...")
        await sendMessageToPast("Don't forget semicolons!", 1000)
        console.log("Message 1 sent!")
        await sendMessageToPast("Always comment your code!", 2000)
        console.log("Message 2 sent!")
        await sendMessageToPast("Check for off-by-one errors!", 3000)
        console.log("Message 3 sent!")
        console.log("All messages sent to the past!")
    } catch (error) {
        console.error("Error sending messages:", error)
    }
}

// timeTravelMessages()




// function sendMessageToPast(message, delay) {
//     const trasmission = new Promise(function(resolve){
//         setTimeout(()=>{
//             resolve(message)
//             console.log(message)
//         },delay)
//     })
//     return trasmission
// }

// async function timeTravelMessages(message,delay) {
//     await sendMessageToPast(message, delay)
// }


// timeTravelMessages("Don't forget semicolons!",1000)
// timeTravelMessages("Always comment your code!",2000)
// timeTravelMessages("Check for off-by-one errors!",3000)


// function sendMessageToPast(message, delay) {
//     const trasmission = new Promise(function(resolve){
//         setTimeout(()=>{
//             resolve(message)
//             console.log(message)
//         },delay)
//     })
// }

// sendMessageToPast("Don't forget semicolons!",1000)
// sendMessageToPast("Always comment your code!",2000)
// sendMessageToPast("Check for off-by-one errors!",3000)


fetch("https://api.chucknorris.io/jokes/random")
.then((response)=>{
    // console.log(response)
    // console.log(typeof response)
    // console.log(response.json)
    // console.log(response.json())
    return response.json()
    
})
.then((data)=>{
    //console.log(data)
    console.log(data.value)
})
.catch(()=>{
    console.log("Error!")
})