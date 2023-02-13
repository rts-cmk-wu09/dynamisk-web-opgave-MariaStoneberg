document.addEventListener("DOMContentLoaded", function() {

    // slå dig løs her... 
    document.querySelector(".hero").innerHTML = `
    <h1>
        ${hero.headline}
    </h1>
    <p>
        ${hero.copy}
    </p>
    <button>
        ${hero.icon}
    </button>
    
    `;

    

    //eksempel på at udskrive alle overskrifter i services i konsollen:
    services.forEach(service => console.log(service.headline))

    let servicesSection = document.querySelector(".services");
    
    services.forEach((service) => {
        let card = document.createElement("section");
        card.classList = "servicesCard"
        let image = document.createElement("img");
        let title = document.createElement("h3");
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
    
}) // DOMContentLoaded slut





