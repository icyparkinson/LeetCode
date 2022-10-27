//Sum an array of potions' many properties

let potions = [
    {
        volume: 5,
        weight: 0.2
    },
    
    {
        volume: 10,
        weight: 0.1
    },
    
    {
        volume: 15,
        weight: 0.3
    }
    ]
    
let mixed = potions.reduce((acc, c) => {
    return {
        volume: acc.volume + c.volume,
        weight: acc.weight + c.weight
    }
},
    {
        volume: 0,
        weight: 0
    }
)

console.log(mixed)