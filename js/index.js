document.addEventListener("DOMContentLoaded", function() {

    // slå dig løs her...

hero.headline = hero.headline.replace (
    "save your time",
    "<span>save your time</span>"
);

    document.querySelector(".hero").innerHTML = `
    <figure class="hero-img">
    <img src="${hero.image}" alt="">
    </figure>

    <section class="hero-container">
    <h1>${hero.headline}</h1>
    <p>${hero.copy}</p>
    <button class="hero-btn">
    <img src="${hero.icon}" alt="">
    <p>Explore</p>
    </button>
    </section>
    
    `;

    

    //eksempel på at udskrive alle overskrifter i services i konsollen:
    services.forEach(service => console.log(service.headline))


    /* Services */
    let servicesSection = document.querySelector(".services");
    
    services.forEach((service) => {
        let card = document.createElement("section");
        card.classList = "servicesCard"
        let image = document.createElement("img");
        let title = document.createElement("h2");
        let cardText = document.createElement("p");
        let linktext = document.createElement("a");

        image.src = service.illustration;
        title.textContent = service.headline;
        cardText.textContent = service.text;
        linktext.textContent = service.linktext;

        card.append(image); 
        card.append(title);
        card.append(cardText);
        card.append(linktext);
        servicesSection.append(card);

    });

    /* Facilities */

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

    /* Sites */

    let sitesSection = document.querySelector(".sites");

    let sitesWrap = document.createElement("div");
    sitesWrap.classList = "sitesWrap";

    
    
    let headline = document.createElement("h2");
    headline.classList = "sites-h2";
    headline.textContent = sites.headline;
    
    let sitesText = document.createElement("p");
    sitesText.classList = "sitesText"
    sitesText.textContent = sites.text;
    
    sitesWrap.append(headline);
    sitesWrap.append(sitesText);
    


    let btnicon = document.createElement("button");
    btnicon.classList = "btnicon";
    btnicon.innerHTML = `<img src="${sites.btnicon}" alt="">Start`
    ;
     
     sitesWrap.append(btnicon);
     sitesSection.append(sitesWrap);
 


    let sitesWrapper = document.createElement("div");
    sitesWrapper.classList = "sitesWrapper";

    sitesSection.append(sitesWrapper);
    
        sites.places.forEach((place) => {
        let card = document.createElement("section");
        card.classList = "placeCard"
        let image = document.createElement("img");
        let name = document.createElement("h3");
        let city = document.createElement("p");
        let view = document.createElement("a")

        image.src = place.img;
        name.textContent = place.name;
        city.textContent = place.city;
        view.textContent = place.view;

        card.append(image); 
        card.append(name);
        card.append(city);
        card.append(view);
        sitesWrapper.append(card);

    });







    
    
}) // DOMContentLoaded slut





