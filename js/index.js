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












    
    
}) // DOMContentLoaded slut





