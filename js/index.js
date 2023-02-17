document.addEventListener("DOMContentLoaded", function() {

    // slå dig løs her...

    //Hero
 
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





