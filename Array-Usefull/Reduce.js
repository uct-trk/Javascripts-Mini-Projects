const characters = [
    {
        name: "Luke Skywalker",
        height: 172,
        mass: 77,
        eye_color: "blue",
        gender: "male"
    },
    {
        name: "Darth Vader",
        height: 202,
        mass: 136,
        eye_color: "yellow",
        gender: "male"
    },
    {
        name: "Leia Organa",
        height: 150,
        mass: 97,
        eye_color: "blue",
        gender: "famale"
    },
    {
        name: "Anakin Skywalker",
        height: 188,
        mass: 84,
        eye_color: "blue",
        gender: "male"
    },
]

// Reduce

// 1. Get total mass of all characters
const totalMass = characters.reduce((acc, current) => {
    return acc + current.mass;
}, 0)
console.log(totalMass)

// 2. Get totalheight of all characters

const totalHeight = characters.reduce((acc, current) => acc + current.height, 0)
console.log(totalHeight)

// 3. Get total number of characters by eye color
const charactersByEyeColor = characters.reduce((acc, current) => {
    const color = current.eye_color
    if(acc[color]){
        acc[color] = acc[color] + 1
    } else {
        acc[color] = 1
    }
    return acc;
}, {})
console.log(charactersByEyeColor)

// 4 Get total number of characters in all the character names
const totalNameCharacter = characters.reduce((acc, current) => acc + current.name.length, 0)
console.log(totalNameCharacter)