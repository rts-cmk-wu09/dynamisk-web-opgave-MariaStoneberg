    /* Sites */

    // Data

    let sites = {
        headline: "Join the community campervan sites managers.",
        text: "Discover all the equibbed areas in Italy. Find the shop with all the services for you and your camper.",
        btnicon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/arrow-icon.png",
        places: [
            {
                img: "https://dazzling-squirrel-77a63d.netlify.app/imgs/lucciano.png",
                name: "Lucciano",
                city: "Rome",
                view: "View the site",
            },
            {
                img: "https://dazzling-squirrel-77a63d.netlify.app/imgs/cremonesi.png",
                name: "Cremonesi",
                city: "Florence",
                view: "View the site",
    
            },
            {
                img: "https://dazzling-squirrel-77a63d.netlify.app/imgs/beneventi.png",
                name: "Beneventi",
                city: "Venice",
                view: "View the site",
    
            },
        ]
    }
    
    //Code

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
