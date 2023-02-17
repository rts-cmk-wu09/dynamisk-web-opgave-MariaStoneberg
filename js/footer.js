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
            headline: "Assistance",
            links: ["Support Center", "FAQs", "Cancallation Options", "Reliablity and Sequrity"]

        },

    ],
    
    rights: "EazyCamper. All rights reserved.",
    smalllinks: ["About", "Site Map", "Terms", "Privacy Policy", "Teams",]

};

// Code

let footer = document.createElement("footer");
document.body.appendChild(footer);
footer.style = `
display: flex;
justify-content: space-between;

padding: 100px;
margin: 150px;
background-color: #F7F7F7;
`

let container = document.createElement("div")
container.classList = "fotter-container";
footer.append(container)
container.style = `
display: flex;
flex-wrap: wrap;
justify-content: space-between;

`

let footWrap = document.createElement("div");
footWrap.classList = "footWrap";
container.append(footWrap);


let footheading = document.createElement("h2");
footheading.textContent = foot.headline;
footWrap.append(footheading);


let foottext = document.createElement("p");
foottext.innerHTML = foot.text.split(' ').join('<br>');
foottext.style = `
font-family: 'Merriweather', serif;
font-size: 39px;
`
footWrap.append(foottext);


let footwrapper = document.createElement("div");
footwrapper.classList = "footwrapper";
container.append(footwrapper);

footwrapper.style = `
display: flex;
gap: 20px;

`

foot.networks.forEach((network) => {
    let card = document.createElement("section");
    card.classList = "networkcard"
    let headline = document.createElement("h3");
    headline.innerText = network.headline
    
    let list = document.createElement("ul")
    network.links.forEach((link) => {
        let item = document.createElement("li")
        let a = document.createElement("a")
        a.innerText = link
        a.href = "#"
        
        a.style = `
        text-decoration: none;
        font-size: 14px;
        color: inherit;

        `
        
        item.append(a)
        list.append(item)
    })
    
    list.style = `
    list-style: none;
    
    `
    
    
    
    card.append(headline);
    card.append(list)
    footwrapper.append(card);
    
    

});

let fotterSmall = document.createElement("section");
fotterSmall.classList = "footer-small";
container.append(fotterSmall);

let right = document.createElement("p");
right.textContent = foot.rights;
fotterSmall.append(right)

let bottomlist = document.createElement("ul")
fotterSmall.append(bottomlist)
foot.smalllinks.forEach((link) => {
let item = document.createElement("li");
bottomlist.append(item)
let a = document.createElement("a");
item.append(a)
a.innerText = link
a.href = "#"

fotterSmall.style = `
display: flex;
align-items: flex-end;


`

bottomlist.style = `
display: flex;
list-style: none;
`

a.style = `
text-decoration: none;
font-size: 14px;
color: inherit;

`


});









