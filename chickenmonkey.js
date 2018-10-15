/* Practice: ChickenMonkey
Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

To determine if a number can be evenly divided by 5 or 7, use the JavaScript remainder operator. */

let chickenMonkeyList = document.getElementById("chickenMonkey");
let text = ``;

function listCM () {
  let newListItem = document.createElement('li');
  newListItem.innerHTML = `${text}`;
  chickenMonkeyList = newListItem;
  chickenMonkey.appendChild(chickenMonkeyList); 
  console.log(`${text}`);
}

for (var i = 1; i <= 100; i++){
  if (i % 5 === 0 && i % 7 === 0){
    text = `ChickenMonkey`;
    listCM();
  } else if (i % 7 === 0) {
    text = `Monkey`;
    listCM();
  } else if (i % 5 === 0) {
    text = `Chicken`;
    listCM();
  } else {
    text = `${i}`;
    listCM(); 
  }
};
