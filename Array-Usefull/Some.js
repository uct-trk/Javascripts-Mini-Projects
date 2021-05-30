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
        mass: 77,
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

// Some
// sonucları bize boalean olarak verir
// result will be a boalean

// 1. Is there at least one male character?
const onMaleCharacter = characters.some((character) => character.gender === "male")
console.log(onMaleCharacter)

// 2 Is there at least one character with blue eyes?
const onBlueCharacter = characters.some((character) => character.eye_color === "blue")
console.log(onBlueCharacter)

// 3 Is there at least one character taller than 200?
const taller200 = characters.some((character) => character.height > 200);
console.log(taller200)

// 4. Is there at least one character that has mass less than 50?
const massLess = characters.some((character) => character.mass < 50)
console.log(massLess)