instructions = ['c','c','c','s','c','s','c','c','s','c','c','b','c','c']
console.log(`TOtal instructions ${instructions.length}`)

for (let index = 0; index < instructions.length; index++) {
    if (instructions[index]=='c'){
        console.log(`${index+1}...Continue`)
    }
    else if (instructions[index]=='s'){
        console.log(`${index+1}...Skipped`)
        
    }
    else{
        console.log(`${index+1}...Stop`)
        break
    }

    
}



    
