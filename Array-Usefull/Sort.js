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

// Sort
//sıralama

// 1. Sort by mass
// kücükten buyuge
const byMass = characters.sort((a,b) => a.mass - b.mass).map(c => c.mass)
console.log(byMass)
// buyukten kucuge
const byMass1 = characters.sort((a,b) => b.mass - a.mass).map(c => c.mass)
console.log(byMass1)

// 2. Sort by Height
const byHeight = characters.sort((a,b) => a.height - b.height)
console.log(byHeight)

// 3. Sort by Name
// alfabetik sıralama
// from a to z
const byName = characters.sort((a,b) => {
    if(a.name < b.name) return -1;
    return 1;
}).map(c => c.name)
console.log(byName)

// from z to a
const byName1 = characters.sort((a,b) => {
    if(a.name < b.name) return 1;
    return -1;
}).map(c => c.name)
console.log(byName1)

// Sort by gender
const byGender = characters.sort((a,b) => {
    if(a.gender === "famale") return 1;
    return -1;
}).map(c => c.gender)
console.log(byGender)

const byGender1 = characters.sort((a,b) => {
    if(a.gender === "famale") return -1;
    return 1;
}).map(c => c.gender)
console.log(byGender1)