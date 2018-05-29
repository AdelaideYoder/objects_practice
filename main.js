const elizabeth = {
    district: "5th",
    platformStatements: 
        {
            taxes:" ",
            jobs: " ",
            infrastructure: " ",
            healthCare: " ",
            CrimeAndEnforcement: " ",
        },
    donationForm: "url here",
    calendarOfEvents: "link here",
    volunteerInfo: [
        {
            name:" ",
            address:" ",
            email: " ",
            phoneNumber: " ",
            availablitiy: " ",
            activities: " ",
        },
        {
            name:" ",
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

function changeDistrict ( districtName) {
    elizabeth.district = districtName;
    console.log (elizabeth.district);
}

changeDistrict( "4th");