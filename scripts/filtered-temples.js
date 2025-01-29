// Current year for footer
document.getElementById("current-year").textContent = new Date().getFullYear();

// Last modified date
document.getElementById("last-modified").textContent = `Last Modified: ${document.lastModified}`;

// Hamburger button //
const hamburgerElement = document.querySelector('#Menu');
const navElement = document.querySelector('#animate');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});

// Temples

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40551-main.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "São Paulo Brazil",
        location: "São Paulo, Brazil",
        dedicated: "1978, October, 30",
        area: 59246,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg"
    },
    {
        templeName: "St. George Utah",
        location: "St. George, Utah",
        dedicated: "1877, April, 6",
        area: 143969,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st.-george-utah-temple-40435-main.jpg"
    },
    {
        templeName: "Quetzaltenango Guatemala",
        location: "Quetzaltenango City, Guatemala",
        dedicated: "2011, December, 11",
        area: 21085,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/quetzaltenango-guatemala-temple/quetzaltenango-guatemala-temple-15696-main.jpg"
    },
    // Additional temples can be added here
];

function displayTemples(filterFunction) {
    const container = document.getElementById("temple-cards");
    container.innerHTML = "";

    const filteredTemples = filterFunction ? temples.filter(filterFunction) : temples;

    filteredTemples.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("temple-card");

        card.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        <div class="details">
          <h2>${temple.templeName}</h2>
          <p><strong>Location:</strong> ${temple.location}</p>
          <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
          <p><strong>Area:</strong> ${temple.area} sq. ft.</p>
        </div>
      `;

        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    displayTemples();

    document.querySelector("nav").addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            event.preventDefault();
            const filterType = event.target.textContent;

            switch (filterType) {
                case "Old":
                    displayTemples(temple => parseInt(temple.dedicated.split(",")[0]) < 1900);
                    break;
                case "New":
                    displayTemples(temple => parseInt(temple.dedicated.split(",")[0]) > 2000);
                    break;
                case "Large":
                    displayTemples(temple => temple.area > 90000);
                    break;
                case "Small":
                    displayTemples(temple => temple.area < 10000);
                    break;
                case "Home":
                default:
                    displayTemples();
                    break;
            }
        }
    });
});
