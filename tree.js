function makeTree(num, character) {
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

makeTree(7, "#");
