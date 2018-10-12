// let aboutMe = {
//     name: "Bryan",
//     age: 43,
//     hairColor: "blond",
//     sayMyName: () => `Hi, my name is ${aboutMe.name}. I'm ${aboutMe.age} years old, and I have ${aboutMe.hairColor} hair.`
// }

// let aboutYou = {
//     name: "Alfonso",
//     age: 26,
//     timeSpan: 5,
//     futureAge: () => { aboutYou.age + aboutYou.timeSpan },
//     hairColor: "brown",
//     sayMyName: () => `Hi, my name is ${aboutYou.name}. I'm ${aboutYou.age} years old. In ${aboutYou.timeSpan} years I will be ${aboutYou.futureAge()}. I have ${aboutYou.hairColor} hair.`
// }



// let employee = {
//     name: "Jeff Winger",
//     age: 37,
//     department: "legal",
//     hire_date: "09/22/2010"
//   }



// let painter = {
//   tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
//   uniform: "white overalls",
//   cost_per_hour: 25.00,
//   insured: true
// }

// painter.action = "mixing paint";

// document.write(painter.action)

// painter.tools.push("dry brushes")
// console.log(painter.tools)

// 1. Add an action that the painter can perform.
// 2. Have her take that action by execucting the method you created.

// BONUS:
// Add a method that allows us to add new tools for the painter.



// Use dot notation to access the value of the key "meaning_of_life" in this object

// let hitchhikers_guide = {
//     characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
//     catchphrase: "Don't Panic",
//     random_facts: {
//         copies_sold: 14000000,
//         formats: ["radio", "TV", "film", "graphic novel"],
//         ultimate_answer: {
//             meaning_of_life: 42
//         }
//     }
// }

// console.log("exercise 2: ", hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life)

// let meaning = hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life;
// console.log("meaning: ", meaning)
// Now access it using a variable called "meaning": `let meaning = "meaning_of_life"`


// let tools = ["brush", "roller", "caulk", "sandpaper", "dropcloth"];

 
// for (let i = 0; i < tools.length; i++ ) {
//     debugger;
//     console.log("The painter uses this: ", tools[i])
// }


// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#), to find a way to output the string "I am a rockstar ninja unicorn JS dev" from this array


let hyperbole = ["dev", "JS", "unicorn", "ninja", "rockstar", "a", "am", "I"]


document.write(hyperbole.reverse().join(" "))

// let string = " ";
// console.log('log array: ', hyperbole);
// console.log("string reversed: ", hyperbole.reverse())

// let reverseHyperbole = hyperbole.reverse();


// for(let i = 0; i < hyperbole.length; i++){
//     document.write(reverseHyperbole[i] + string);
// }

// function printHyperbole() {
// reverseHyperbole.forEach((word) => {
//     document.write(word + " ");
// });
// document.write("!!!");
// }
