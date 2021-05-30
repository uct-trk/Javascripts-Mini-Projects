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

// Every
// sonucları boalean olarak verir
// results will be a boalean
// ıf one result wont match result will be false
// every hepsi ile uyuşması gerekiyor bir tane bile uymazsa false döner

// 1. Does every character have blue eyes?
const allBlueEyes = characters.every(character => character.eye_color === "blue")
console.log(allBlueEyes)

// 2. Does every characterhave mass more than 40?
const allMassMoreThan40 = characters.every((character) => character.mass > 40)
console.log(allMassMoreThan40)

// 3. Is every character shorter than 200?
const allShorterThan200 = characters.every((character) => character.height > 200)
console.log(allShorterThan200)

// 4. Is every character male?
const allMale = characters.every((character) => character.gender === "male")
console.log(allMale) 
