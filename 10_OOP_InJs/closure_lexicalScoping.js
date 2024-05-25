function createDecoder(secret){
    let message = secret

    function decodeMessage(){
        return message
    }
    return decodeMessage
}

const decoder = createDecoder("NO secrets 🤫🤐")
console.log(decoder)
console.log(decoder())