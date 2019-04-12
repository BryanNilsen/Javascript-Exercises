// Write a function to return the nth element in Fibonacci sequence

// add event listener to button
document.getElementById("button").addEventListener("click", function() {
  fibonacci();
});

// fibonacci function
function fibonacci() {
  // grab value from text input
  let userInput = document.getElementById("input").value;
  let arr = [0, 1];
  for (let i = 2; i < userInput + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  // print result to DOM and convert to English quantity format
  document.getElementById("output").innerHTML = arr[userInput].toLocaleString(
    "en"
  );
  let sequenceNum = Number(userInput) + 1;
  document.getElementById("sequence").innerHTML = arr
    .slice(0, sequenceNum)
    .join(" * ");
}
