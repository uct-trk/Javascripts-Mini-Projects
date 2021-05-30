const characters = [
    {
        name: "Luke Skywalker",
        height: 172,
        mass: 77,
        eye_color:"blue",
        gender: "male"
    },
    {
        name: "Darth Vader",
        height: 202,
        mass: 136,
        eye_color:"yellow",
        gender: "male"
    },
    {
        name: "Leia Organa",
        height: 150,
        mass: 77,
        eye_color:"blue",
        gender: "famale"
    },
    {
        name: "Anakin Skywalker",
        height: 188,
        mass: 84,
        eye_color:"blue",
        gender: "male"
    },
]

// Filter
// 1. Get character with mass grater than 100
const greater100Charecters = characters.filter(character => character.mass > 100)
console.log(greater100Charecters)

// 2.Get character with height less than 200
const shorterCharacters = characters.filter(character => character.height < 200)
console.log(shorterCharacters)

// 3. Get all male Characters
const male = characters.filter(character => character.gender === "male")
console.log("erkekler : ",male)

// 4. Get all famele charecters
const famale = characters.filter(character => character.gender === "female")
console.log(famale)