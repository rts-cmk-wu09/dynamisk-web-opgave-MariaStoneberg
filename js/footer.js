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

footer.style = `
display: flex;
margin: 150px;
padding: 100px;

background-color: #F7F7F7;

`

let footWrap = document.createElement("div");
footWrap.classList = "footWrap";


let footheading = document.createElement("h2");
footheading.textContent = foot.headline;



let foottext = document.createElement("p");
foottext.innerHTML = foot.text.split(' ').join('<br>');

foottext.style = `
font-family: 'Merriweather', serif;

font-size: 39px;
`

footWrap.append(footheading);
footWrap.append(foottext);

footer.append(footWrap);


let footwrapper = document.createElement("div");
footwrapper.classList = "footwrapper";
footer.append(footwrapper);

footwrapper.style = `
display: flex;
justify-content: end;
gap: 20px;

`

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

