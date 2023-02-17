/* Facilities */

//Data

let facilities = {
    headline: "Making your facility known is our priority",
    options : [
        {
            icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/list-check.png",
            headline: "Choose the type of stop",
            text: "Select the type of stopover you are ordering from Equipped Area, Camping and Agricamping"
        },
        {
            icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/spellcheck.png",
            headline: "Describe your structure",
            text: "Describe thee property, location and nearby attractions"
        },
        {
            icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/Text-Frame-Add.png",
            headline: "Build your showcase",
            text: "Add photos, videos and descriptions Define the price of each type of that make your propety truly"
        },
        {
            icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/Calendar-Today.png",
            headline: "Prices and Availability",
            text: "pitch and configure the availablity calendar."
        },
    ]
}

// Code

    let facilitiesSection = document.querySelector(".facilities");

    let heading = document.createElement("h2");
    heading.classList = "facilities-h2";
    heading.textContent = facilities.headline;

    facilitiesSection.append(heading);

    let facilitieWrapper = document.createElement("div");
    facilitieWrapper.classList = "facilitieWrapper";

    facilitiesSection.append(facilitieWrapper);
    
        facilities.options.forEach((option) => {
        let card = document.createElement("section");
        card.classList = "optionCard"
        let image = document.createElement("img");
        let title = document.createElement("h2");
        let cardText = document.createElement("p");

        image.src = option.icon;
        title.textContent = option.headline;
        cardText.textContent = option.text;

        card.append(image); 
        card.append(title);
        card.append(cardText);
        facilitieWrapper.append(card);

    });
