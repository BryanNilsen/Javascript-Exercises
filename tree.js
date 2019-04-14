// Instructions
// Create a tree function that should build a pine tree out of a character in the Chrome dev tools console.

// It accepts a single object as an argument. The object should have two key/value pairs.
// A key that specifies the height of the pine tree.
// The value for the height of the tree should be from user input in a <input type="text"> field in the DOM.
// A key that specifies which character to use to build the pine tree.
// The character to use should be from user input in a <input type="text"> field in the DOM.
// Once the user enters in a number, and a character, the user can either then just press the enter key (as long as the cursor is in one of the input fields), or click a button that is labeled "Grow your tree" and the tree should be shown in the console. This requires you to add an event listener to the button, as well as an event listener for the enter/return key.

// If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.

// TREE OBJECT
treeObject = {
  lines: "",
  character: ""
};

// MAKE TREE OBJECT FROM INPUTS
function makeTreeObject() {
  treeObject.lines = document.getElementById("lines").value;
  treeObject.character = document.getElementById("character").value;
}

// ADD EVENT LISTENER TO BUTTON - check for completed inputs
document.getElementById("button").addEventListener("click", function() {
  makeTreeObject();
  if (treeObject.lines === "" || treeObject.character === "") {
    alert("both fields must have a value");
  } else {
    makeTree(treeObject);
  }
});

// ADD EVENT LISTENER TO LINES INPUT ON 'ENTER' - check for completed inputs
document.getElementById("lines").addEventListener("keypress", function(e) {
  var key = e.which || e.keyCode;
  if (key === 13) {
    makeTreeObject();
    if (treeObject.lines === "" || treeObject.character === "") {
      alert("both fields must have a value");
    } else {
      makeTree(treeObject);
    }
  }
});

// ADD EVENT LISTENER TO CHARACTER INPUT ON 'ENTER' - check for completed inputs
document.getElementById("character").addEventListener("keypress", function(e) {
  var key = e.which || e.keyCode;
  if (key === 13) {
    makeTreeObject();
    if (treeObject.lines === "" || treeObject.character === "") {
      alert("both fields must have a value");
    } else {
      makeTree(treeObject);
    }
  }
});

// MAKE TREE IN CONSOLE
function makeTree(object) {
  console.clear();
  console.log(
    `your number was ${object.lines}, and the character was ${object.character}`
  );
  for (i = 0; i <= object.lines; i++) {
    let treeString = "";
    for (j = 0; j < object.lines - i; j++) {
      treeString += " ";
    }
    for (k = 0; k < i * 2 - 1; k++) {
      treeString += `${object.character}`;
    }
    console.log(treeString);
  }
}
