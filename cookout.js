const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// A first array containing the objects to be cooked.
const uncookedFood = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

console.log("uncooked before grilling", uncookedFood);
console.log("cooked before grilling", cookedFood);


function grill (currentObject) {
	for(let i = 0; i < uncookedFood.length; i++) {
		currentObject[i].cooked = true;
    }
    // Modify the food so that it is cooked
    cookedFood.cooked = true;
    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};

// grill(uncookedFood);

// console.log("uncooked after grilling", uncookedFood);
// console.log("cooked after grilling", cookedFood)