// 1.Write a function that takes a string of a dog breed as an argument (like ‘border collie’)

// 2.Have the function return “my favorite dog breed is” plus the passed in string. If no argument is passed to the function, return “I like cats”.

// 3.Execute the function in a way that captures the returned value in a variable.

// 4.Console.log the string “When it comes to pets,” plus the returned value of the function.

// let returnedVar


// function favoriteBreed(breed) {
//     if (breed === undefined) {
//         returnedVar = `I like cats`
//         // return returnedVar
//     } else {
//         returnedVar = `My favorite dog breed is ${breed}`
//         // return returnedVar
//     }
//     return returnedVar

// }

// console.log(`When it comes to pets, ${returnedVar}`)





// 1.Create a function that creates an object with three properties: name, age, profession. Have the function take an array as an argument. In the body of the function, loop over the array to set the values of the object’s properties. log the result to the console as a table.


// function createObject(name, age, profession) {
//     let objectArray = [name, age, profession]
//     // return objectArray

//     for (let i = 0; i < objectArray.length; i++) {
//         let newObject = { objectArray[i]: value }

//         create object from array with key / value pairs
//         // }
//     }
// }


    // 2.Create a second function that takes three arguments: name, age, profession. Have the function place the three arguments into an array and pass that array to the first function by calling it.


// const personalObjectMaker = (array) => {
//     let personalObj = {}
//     const properties = ["name", "age", "profession"]
//     properties.forEach((property, index) => {
//         personalObj[property] = array[index]
//     });
//     return console.table(personalObj)

// }

// const personalInfo = (name, age, profession) => {
//     const personalArray = [name, age, profession]
//     personalObjectMaker(personalArray)
// }
// personalInfo("Bryan", "43", "Developer")



// const add = (a,b) => {
//     return a + b
// }

// const subtract = (a,b) => {
//     return a - b
// }

// const performAction = (a, b, action) =>  action(a,b)

// const test = performAction(5,8,add)
// const test2 = performAction(5,8,subtract)
// console.log("test 1: ", test)
// console.log("test 2: ", test2)




// 1. Create a function that logs the result of adding two numbers

const add = (number1, number2) => number1 + number2
const subtract = (a,b) => a - b
const multiply = (a,b) => a * b
const divide = (a,b) => a / b
const concat = (a,b) => `${a}${b}`

// 2. Create a second function called calculate that takes three arguments: two numbers and a function

const calculate = (c, a, b) => c(a,b)

// 3. Execute the second function and make it output 5

console.log("add: ", calculate(add, 7, 4))
console.log("subtract: ", calculate(subtract, 11, 4,))
console.log("concatenate: ", calculate(concat, 112, 43))


const AndyAdd = (x, y) => x + y + 47
console.log("Andy says: ", AndyAdd(4,10))
console.log("Andy add: ", calculate(AndyAdd, 1, 2))