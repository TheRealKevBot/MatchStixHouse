// This challenge will help you interpret mathematical relationships 
// both algebraically and geometrically.

// Matchstick Houses, Steps 1, 2 and 3

// Create a function that takes a number (step) as an argument and returns 
// the number of matchsticks in that step. See step 1, 2 and 3 in the image above. 

// Examples:

// matchHouses(1) ➞ 6

// matchHouses(4) ➞ 21

// matchHouses(87) ➞ 436

function matchHouses(step) {
	let answer = 0
    let house = 6
    let addHouse = 5
    step === 1 ? answer = house : null
    step > 1 ? answer = house + ((step - 1) * addHouse) : null
    return answer
} 

console.log(matchHouses(1), 6)
console.log(matchHouses(0), 0)
console.log(matchHouses(17), 86)
console.log(matchHouses(36), 181)
console.log(matchHouses(15), 76)
console.log(matchHouses(99), 496)
console.log(matchHouses(3), 16)
console.log(matchHouses(87), 436)