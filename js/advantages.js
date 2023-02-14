/* ADVANTAGES */

// Data

let advantages = {
    headline: "Our Advantages",
    options: [
        {
            icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/compare.png",
            headline: "Convenience and Transparency",
            text: "You don’t have to find out later or only after camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin a fixed commission on each transaction of 5"
        },
        {
            icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/library_books.png",
            headline: "Digital marketing and editorial support",
            text: "You don’t have to find out later or only after camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin a fixed commission on each transaction of 5"
        },
        {
            icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/Compare-HSV.png",
            headline: "Community of services dedicated to campers",
            text: "You don’t have to find out later or only after camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin a fixed commission on each transaction of 5"
        },
    ]
}

// Code

let advantagesSection = document.querySelector(".advantages");

let heading = document.createElement("h2");
heading.classList = "advantages-h2";
heading.textContent = advantages.headline;

advantagesSection.append(heading);

let advantagesWrapper = document.createElement("div");
advantagesWrapper.classList = "advantagesWrapper";

advantagesSection.append(advantagesWrapper);

advantages.options.forEach((option) => {
    let card = document.createElement("section");
    card.classList = "advantagesCard"
    let image = document.createElement("img");
    let title = document.createElement("h2");
    let cardText = document.createElement("p");

    image.src = option.icon;
    title.textContent = option.headline;
    cardText.textContent = option.text;

    card.append(image);
    card.append(title);
    card.append(cardText);
    advantagesWrapper.append(card);

});
