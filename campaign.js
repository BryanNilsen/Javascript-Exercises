
let candidate = {
    name: "Elizabeth Sanger",
    district: 5,
    platformStatements: {
        taxes: "hates them",
        jobs: "loves jobs",
        infrastructure: "could use mass transit",
        healthcare: "medicare for all",
        crime: "overhaul prison system",  
    },
    donationURL: "https://www.redcross.com",
    
    calendarOfEvents: [
        {
            date: "June 6",
            eventDescription: "ice cream social",
        }
    ],

    volunteers: [
        {
            name: "Joe",
            address: "Schmoe",
            email: "joeschmoe@gmail.com",
            phone: "555-123-4567",
            availability: "weekends after 6pm",
            activitiesWilling: [
                "answering phones",
                "making signs",
                "baking cookies"
            ]
        }
    ],

    biography: "This is where the candidate's biography goes.",
    imageGallery: {
        headshot: "headshotlink",
        family: "familylink",
        constituents: "constituentslink",
    },
    missionStatement: "My mission is to do good for the people of Earth!",
    voterRegisterURL: "https://www.vote.org",

}


// PLATFORM - should write a function here to automatically create a list item with the object's key and value
let platformObjects = Object.entries(candidate.platformStatements);
let platformList = document.getElementById("platformStatements");
function platformStatementPop () {
    for (var i = 0; i < platformObjects.length; i++) {
        // create list element
        let newListItem = document.createElement('li');
        newListItem.innerHTML = "<span class='platformTitle'>" + platformObjects[i][0] + ": " + "</span>" + platformObjects[i][1];
        // add list item to unordered list
        platformList.appendChild(newListItem);        
    }
}




// this function will populate the page with the info from the candidate variable
function populatePage() {
    document.getElementById("candidateName").innerHTML = candidate.name;
    document.getElementById("congressionalDistrict").innerHTML = candidate.district;

    platformStatementPop()

    // let platformStatementCategories = Object.getOwnPropertyNames(candidate.platformStatements);
    // console.log(platformStatementCategories);

    let imageGalleryNames = Object.getOwnPropertyNames(candidate.imageGallery);
    console.log(imageGalleryNames);
    
    // // image population
    // function populateImages() {
    //     candidate.imageGallery;
    //     document.getElementById("gallery");
        
    // }

}
populatePage()



// this function will change the candidate's name - upon button submit in HTML
function changeCandidateName() {
    event.preventDefault();
    let candidateName = document.getElementById("candidateName").innerHTML;
    let newName = prompt("Enter New Name", document.getElementById("candidateName").innerHTML);
    candidateName = newName;
    document.getElementById("candidateName").innerHTML = candidateName;
}

// this function will add a platform issue and position on the issue
function addPlatform () {
    event.preventDefault();
    // grab the input from the form
    let newPlatformIssue = document.getElementById("newPlatformIssue").value;
    // console.log(newPlatformIssue);
    let newPlatformPosition = document.getElementById("newPlatformPosition").value;
    // console.log(newPlatformPosition);
    let newPlatformArray = [newPlatformIssue, newPlatformPosition]
    platformObjects.push(newPlatformArray);
    
    // console.log("The platform objects now are: ", platformObjects);

    // create list element
    let newListItem = document.createElement('li');
    newListItem.innerHTML = "<span class='platformTitle'>" + newPlatformIssue + ": " + "</span>" + newPlatformPosition;
    // add list item to unordered list
    platformList.appendChild(newListItem);   

}

