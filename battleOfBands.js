// A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

// Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.

const bandNumber = 1;
let newBandNumber = bandNumber;

const takeNumber = function (bandName) {
    event.preventDefault();
    let newBandName = document.getElementById("bandName").value;
    // console.log("New band: ", `${newBandNumber}. ${newBandName}`);

    // the following will create a new paragraph element with the new band name and number
    let newBandList = document.createElement('p');
    newBandList.innerHTML = `${newBandNumber}. ${newBandName}`;
    // bandNames is the ID of the div tag in the HTML
    bandNames.appendChild(newBandList); 
    // the following increments the band number
    newBandNumber ++;
}


