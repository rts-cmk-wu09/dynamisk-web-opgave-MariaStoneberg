/* FOOTER */

// Data

let foot = {
    headline: "Easy Camper",
    text: "When Passion Meets Comfort.",
    networks: [
        {
            headline: "Discover the Network",
            links: ["Where to shop", "Tour Guided", "Our Tours", "About Us"]
        },

        {
            headline: "Become a Manager",
            links: ["Join your Pairing", "Offer your Service", "Are you a guide?"]
        },

        {
            headlinde: "Assistance",
            links: ["Support Center", "FAQs", "Cancallation Options", "Reliablity and Sequrity"]

        },

    ]

}

// Code


let footer = document.createElement("footer");
document.body.appendChild(footer);

let footheading = document.createElement("h2");
footheading.textContent = foot.headline;

let foottext = document.createElement("p");
foottext.textContent = foot.text;

footer.append(footheading);
footer.append(foottext);

let footwrapper = document.createElement("div");
footwrapper.classList = "footwrapper";
footer.append(footwrapper);

foot.networks.forEach ((network) => {
    let card = document.createElement("section");
    card.classList = "networkcard"
    let headline = document.createElement("h2");
    headline.innerText = network.headline

    let list = document.createElement("ul")
    network.links.forEach((link) => {
        let item = document.createElement("li")
        let a = document.createElement("a")
        a.innerText = link
        a.href = "#"
        item.append(a)
        list.append(item)
    })

    card.append(headline);
    card.append(list)
    footwrapper.append(card);

});

