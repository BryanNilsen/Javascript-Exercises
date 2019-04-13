// Instructions
// It is absolutely critical that you read each of these requirements because as a professional you will be expected to completely understand what you are expected to do. If you submit code that does not fulfill the requirements, you will be sent to your room with no dinner.

// Create a tree function that should build a pine tree out of a character in the Chrome dev tools console.

// It accepts a single object as an argument. The object should have two key/value pairs.
// A key that specifies the height of the pine tree.
// The value for the height of the tree should be from user input in a <input type="text"> field in the DOM.
// A key that specifies which character to use to build the pine tree.
// The character to use should be from user input in a <input type="text"> field in the DOM.
// Once the user enters in a number, and a character, the user can either then just press the enter key (as long as the cursor is in one of the input fields), or click a button that is labeled "Grow your tree" and the tree should be shown in the console. This requires you to add an event listener to the button, as well as an event listener for the enter/return key.

// If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.

// Grow your tree

treeObject = {
  num: 25,
  char: "B"
};

function makeTree(object) {
  const num = object.num;
  const character = object.char;

  console.log(`your number was ${num}, and the character was ${character}`);

  treeStringArray = [];
  for (i = 0; i <= num; i++) {
    treeString = "";
    for (j = 0; j < num - i; j++) {
      treeString += " ";
    }
    for (k = 0; k < i * 2 - 1; k++) {
      treeString += `${character}`;
    }
    console.log(treeString);
  }
}

makeTree(treeObject);
