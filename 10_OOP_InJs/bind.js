function performMagic() {
    switch (this.type) {
        case 'rabbit':
            console.log("Hocus pocus! I'm a hopping rabbit!")
            break
        case 'wizard':
            console.log("Abracadabra! I cast a spell!")
            break
        case 'dragon':
            console.log("Roar! I breathe fire!")
            break
        default:
            console.log("Just a regular day at the JavaScript Circus!")
    }
}


const rabbit = { type: 'rabbit' }
const wizard = { type: 'wizard' }
const dragon = { type: 'dragon' }

const magicalRabbit = performMagic.bind(rabbit)
const magicalWizard = performMagic.bind(wizard)
const magicalDragon = performMagic.bind(dragon)

magicalRabbit() 
magicalWizard() 
magicalDragon() 
