const elizabeth = {
    district: "5th",
    platformStatements: 
        {
            taxes:"Tax cuts for everyone",
            jobs: "Jobs are good",
            infrastructure: "We need to work on this",
            healthCare: "We need to talk about this",
            CrimeAndEnforcement: "We will work on this",
        },
    donationForm: "url here",
    calendarOfEvents: "link here",
    volunteerInfo: [
        {
            name:"Bob",
            address:"345 ave",
            email: " ",
            phoneNumber: " ",
            availablitiy: " ",
            activities: " ",
        },
        {
            name:"Jeff",
            address:" ",
            email: " ",
            phoneNumber: " ",
            availablitiy: " ",
            activities: " ", 
        }
    ],
    biography: " ",
    imageGallery: {
        headShot:" ",
        pictureOfFamily: " ",
        pictureOfConstituents: " "
    },
    missionStatement:" ",
    registerToVote: " ",
}

// This is the first function
function changeDistrict ( districtName) {
    elizabeth.district = districtName;
    console.log (elizabeth.district);
}

changeDistrict( "4th");


// This is the second function
function changeStatement (taxesStatement, jobStatement, inStatement, hcStatement, ceStatement) {
    elizabeth.platformStatements.taxes = taxesStatement;
    elizabeth.platformStatements.jobs = jobStatement;
    elizabeth.platformStatements.infrastructure = inStatement;
    elizabeth.platformStatements.healthCare = hcStatement;
    elizabeth.platformStatements.CrimeAndEnforcement = ceStatement;
    console.log ('plateformStatement', elizabeth.platformStatements)
}

changeStatement ("Tax cuts are good", "More Jobs", "More Info", "More Health", "Better stuff");


// This is the third function
function changeDonation (donation) {
    elizabeth.donationForm = donation;
    console.log(elizabeth.donationForm);
}

changeDonation ("more");


// This is the fourth function
function changeCal  (cal) {
    elizabeth.calendarOfEvents = cal;
    console.log(elizabeth.calendarOfEvents);
}

changeCal ("even more");


// // This is the fifth function
// function changeVol (order, newName, newAdd, newEmail, newNum, newAva, newAct) {
//     console.log (elizabeth.volunteerInfo[0].name);
//     console.log(elizabeth.volunteerInfo[0].address);
//     console.log(elizabeth.volunteerInfo[order]);
    
//     elizabeth.volunteerInfo[order].name = newName;
//     elizabeth.volunteerInfo[order].address = newAdd;
//     elizabeth.volunteerInfo[order].email = newEmail;
//     elizabeth.volunteerInfo[order].phoneNumber = newNum;
//     elizabeth.volunteerInfo[order].availablitiy = newAva;
//     elizabeth.volunteerInfo[order].activities = newAct;
//     console.log (elizabeth.volunteerInfo);
// }

// changeVol (1, "George", "123 Street", "me@me.com", "222-222", "Mon & Tue", "registration");

function version2 (order, volInfoObj) {
    console.log("volunteer info object", order, volInfoObj);
    console.log("volunteer info to be replaced", elizabeth.volunteerInfo[order]);
    elizabeth.volunteerInfo[order]  = volInfoObj;
    console.log("array of vol", elizabeth.volunteerInfo)
}

var newPerson = {
    name: "George",
    address: "123 Street",
    email: "me@me.com",
    phoneNumber: "222-222",
    availablitiy: "Mon & Tue",
    activities: "registration"
}

version2 (0, newPerson);



// advanced challenge -------------------------------------------------------

let lizArticle = document.createElement("article")
lizArticle.setAttribute("id", elizabeth.district)

const divRef = document.querySelector("#content-container")
divRef.appendChild(lizArticle)



