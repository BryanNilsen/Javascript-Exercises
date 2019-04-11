// declare explanation element variable by id "explanation"
let explanationElement = document.getElementById(`explanation`);
// declare counter variable and define starting integer
let counter = 0;

// declare element variable by id "output"
let outputElement = document.getElementById(`output`);

// create function to accept two arguments: increment value and number of times to increment
function incrementCounterAndOutputToDom(incrementValue, numberOfTimes) {
  explanationElement.innerHTML = `These are the results of incrementing by ${incrementValue} a total of ${numberOfTimes} times:`;
  for (let i = 0; i <= numberOfTimes; i++) {
    // format last output to use a period
    if (i === numberOfTimes) {
      counter += incrementValue;
      outputElement.innerHTML += `${counter}.`;
    }
    // format output to be separated by commas
    else {
      counter += incrementValue;
      outputElement.innerHTML += `${counter}, `;
    }
  }
}

// invoke or execute function with arguments
incrementCounterAndOutputToDom(3, 10);
