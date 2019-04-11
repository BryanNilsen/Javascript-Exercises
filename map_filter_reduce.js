// 1) Make an array from the one below called fave_demo that contains only ages from 18 - 49
let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102]
let ageRange = ages.filter((age => age > 17 && age < 50))
ageRange
ageRange.sort((a,b) => a-b)
ageRange


// 2) Choose a loop method of your choice to get this result from this array:
// expected result: [3, 5, 7, 9, 11, 13]
let nums = [1, 2, 3, 4, "5", 6, "7"]
let ints = nums.map((number) => (parseInt(number)) + (parseInt(number))+1).filter((num => num < 15))

// alternative way
let ints2 = nums.map((number) => (+number) + ((+number)+1)).filter((num => num < 14))
ints2


// 3) Capitalize 'the', insert a comma after 'teacher' and output "Yoda says, "The greatest teacher, failure is"
let yoda_quote = ["the", "greatest", "teacher", "failure", "is"]
let challengeQuote = yoda_quote.reduce((a,b) => {
    if(a === "the") a = "The";
    if(b === "teacher") b = "teacher,";
    return `${a} ${b}`
})

challengeQuote

// 4)  * Sort the following numbers in descending order
const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8]
let sortedInts = integers.sort((a,b) => b-a).filter((num => num > 19)).map((x => (x *1.5) - 1))

console.log(sortedInts.reduce((a,b) => a+b))


//    * Remove any integers greater than 19.
//    * Multiply each remaining number by 1.5 and then substract 1.
//    * Then output (either in the DOM or the console) the sum of all the resulting numbers.