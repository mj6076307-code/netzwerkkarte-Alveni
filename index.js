//Menü klickbar toggle


document.querySelectorAll("#menuall1 .menu-btn").forEach(button => {
    button.addEventListener("click", function () {

        document.querySelectorAll("#menuall1 .menu-btn")
            .forEach(btn => btn.classList.remove("active"));

        this.classList.add("active");
    });
});



function oeffneMenubereich(button) {

    const ziel = button.getAttribute("href");
    const bereich = document.querySelector(ziel);

    if (!bereich) return;

    // Alle Menü-Sections schließen
    document.querySelectorAll("#menuall1 .menu-btn").forEach(btn => {

        const section = document.querySelector(btn.getAttribute("href"));

        if (section) {
            section.style.display = "none";
            section.classList.remove("menu-open");
        }

    });

    // Ausgewählte Section öffnen
    bereich.style.display = "block";
    bereich.classList.add("menu-open");

    // Automatisch und flüssig scrollen
    setTimeout(() => {
        bereich.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 100);
}


// Menü-Klicks
document.querySelectorAll("#menuall1 .menu-btn").forEach(button => {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        oeffneMenubereich(this);

    });

});


function myFunction() {
    var element = document.getElementById("myDiv");
    element.classList.toggle("Anker");
}
function myFunction() {
    var x = document.getElementById("myDiv");
    x.style.margin = "5% 0 0% 0";
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}
function myFunction1() {

    var element = document.getElementById("myDiv1");
    element.classList.toggle("Anker1");
}
function myFunction1() {

    var x1 = document.getElementById("myDiv1");
    x1.style.margin = "5% 0 5% 0";
    if (x1.style.display === "block") {
        x1.style.display = "none";
    } else {
        x1.style.display = "block";
        x.style.display = "none";
        x2.style.display = "none";
    }
}
function myFunction2() {
    var element = document.getElementById("myDiv2");
    element.classList.toggle("Anker2");
}
function myFunction2() {
    var x2 = document.getElementById("myDiv2");
    x2.style.margin = "8% 0 0% 0";
    if (x2.style.display === "block") {
        x2.style.display = "none";
    } else {
        x2.style.display = "block";
        x1.style.display = "none";
        x.style.display = "none";
    }
}
function myFunctionAnker() {
    var element = document.getElementById("myDiv3");
    element.classList.toggle("Anker3");
}
function myFunctionAnker() {
    var x = document.getElementById("myDiv3");
    x.style.margin = "8% 0 0% 0";
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
function myFunctionAnker1() {
    var element = document.getElementById("myDiv4");
    element.classList.toggle("Anker4");
}
function myFunctionAnker1() {
    var x = document.getElementById("myDiv4");
    x.style.margin = "8% 0 0% 0";
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
function myFunctionAnker2() {
    var element = document.getElementById("myDiv5");
    element.classList.toggle("Anker5");
}
function myFunctionAnker2() {
    var x = document.getElementById("myDiv5");
    x.style.margin = "8% 0 0% 0";
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
function myFunctionAnker3() {
    var element = document.getElementById("myDiv7");
    element.classList.toggle("Anker7");
}
function myFunctionAnker3() {
    var x = document.getElementById("myDiv7");
    x.style.margin = "8% 0 0% 0";
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
function myFunctionAnker6() {
    var element = document.getElementById("myDiv6");
    element.classList.toggle("Anker6");
}
function myFunctionAnker6() {
    var x = document.getElementById("myDiv6");
    x.style.margin = "8% 0 0% 0";
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
 function myFunction14() {
     var element = document.getElementById("myDiv14");
     element.classList.toggle("Anker14");
 }
 function myFunction14() {
     var x = document.getElementById("myDiv14");
     x.style.margin = "8% 0 0% 0";
     if (x.style.display === "block") {
         x.style.display = "none";
    } else {
         x.style.display = "block";

     }
}
function myFunctionAnker5() {
    var element = document.getElementById("myDiv9");
    element.classList.toggle("Anker9");
}
function myFunctionAnker5() {
    var x = document.getElementById("myDiv9");
    x.style.margin = "8% 0 0% 0";
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";

    }
}
function myFunctionAnker10() {
    var element = document.getElementById("myDiv10");
    element.classList.toggle("Anker10");
}
function myFunctionAnker10() {
    var x = document.getElementById("myDiv10");
    x.style.margin = "8% 0 0% 0";
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";

    }
}
function myFunctionAnker11() {
    var element = document.getElementById("myDiv11");
    element.classList.toggle("Anker11");
}
function myFunctionAnker11() {
    var x = document.getElementById("myDiv11");
    x.style.margin = "8% 0 0% 0";
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";

    }
}
 function myFunction13() {
    var element = document.getElementById("myDiv13");
    element.classList.toggle("Anker13");
 }
function myFunctionAnker13() {
    var x = document.getElementById("myDiv13");
    x.style.margin = "8% 0 0% 0";
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";

} }

function myFunction12() {
    var element = document.getElementById("myDiv12");
    element.classList.toggle("Anker12");
}
function myFunctionAnker8() {
    var x = document.getElementById("myDiv12");
    x.style.margin = "8% 0 0% 0";
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";

    }
}

function myFunction(button) {
    const ziel = button.getAttribute("href");
    const bereich = document.querySelector(ziel);

    if (!bereich) return;

    const istOffen = bereich.classList.contains("menu-open");

    bereich.classList.toggle("menu-open", !istOffen);
    bereich.style.display = istOffen ? "none" : "block";
}


function myInfotheck() {
    var menuall1 = document.getElementById("menuall1");
    var menuall = document.getElementById("menuall");

    if (menuall1.style.display === "block") {
        menuall1.style.display = "none";
        menuall.style.display = "block";
    } else if (menuall.style.display === "block") {
        menuall.style.display = "none";
        menuall1.style.display = "block";
    } else {
        menuall.style.display = "block";
    }
}

function myInfotheck1() {
    var menuall1 = document.getElementById("menuall1");
    var menuall = document.getElementById("menuall");

    if (menuall.style.display === "block") {
        menuall.style.display = "none";
    } else if (menuall1.style.display === "block") {
        menuall1.style.display = "none";
    } else {
        menuall1.style.display = "block";
    }
}



// Menü-Klicks


document.addEventListener("click", function (e) {

    if (!e.target.classList.contains("mehr-btn")) {
        return;
    }

    const content =
        e.target.parentElement.querySelector(".more-content");

    if (!content) {
        return;
    }

    if (content.style.display === "block") {

        content.style.display = "none";
        e.target.textContent = "Mehr lesen";

    } else {

        content.style.display = "block";
        e.target.textContent = "Weniger lesen";
    }
});

var elementIDs = ["dots", "more", "myBtn"];

// Umschalten der Elemente mit den angegebenen IDs
toggleElements(elementIDs);

// Definition der Funktion zum Umschalten der Elemente
function toggleElements(ids) {
    // Durchlaufen der ID-Liste
    ids.forEach(function (id) {
        // Abrufen des Elements anhand seiner ID
        var element = document.getElementById(id);
        // Überprüfen, ob das Element gültig ist
        if (element) {
            // Toggle the display of the element
            if (window.getComputedStyle(element).display === "none") {
                element.style.display = "inline"; // Ändern Sie "inline" in den entsprechenden Anzeigewert
            } else {
                element.style.display = "none";
            }
        } else {
            console.error("Element with ID '" + id + "' not found."); // Error handling, wenn das Element nicht gefunden wird
        }
    });
}
function toggleElement(id) {
    var elements = document.getElementsByClassName("toggle-element");
    var elementToShow = document.getElementById(id);
    if (elementToShow) {
        if (elementToShow.style.display !== "inline") {
            // Hide all elements
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = "none";
            }
            // Show the clicked element
            elementToShow.style.display = "inline";
        }
    } else {
        console.error("Element with ID '" + id + "' not found.");
    }
}
// JavaScript-Funktion zum Umschalten der Elemente


const searchInput = document.getElementById('searchInput');

if (searchInput) {
    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        const listItems = document.querySelectorAll('#searchResults div');

        listItems.forEach(function (item) {
            const textContent = item.textContent.toLowerCase();
            const isMatch = textContent.includes(searchTerm);
            item.style.display = isMatch ? 'block' : 'none';
        });
    });
}



var myIndex = 0;

function carousel() {
    var x = document.getElementsByClassName("mySlides");

    if (x.length === 0) {
        return;
    }

    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    myIndex++;

    if (myIndex > x.length) {
        myIndex = 1;
    }

    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000);
}

carousel();



async function ladeEinrichtungen() {

    const { data, error } =
        await supabaseClient
            .from('einrichtungen')
            .select('*')
            .order('id');

    if (error) {
        console.error(error);
        return;
    }

    // Container leeren
    document.getElementById("rechtsberatungContainer")?.replaceChildren();
    document.getElementById("schuldnerberatungContainer")?.replaceChildren();
    document.getElementById("medizinContainer")?.replaceChildren();
    document.getElementById("wohnungslosenhilfeContainer")?.replaceChildren();
    document.getElementById("formularhilfeContainer")?.replaceChildren();
    document.getElementById("migrationsdiensteContainer")?.replaceChildren();
    document.getElementById("psychologischeberatungenContainer")?.replaceChildren();
    document.getElementById("freizeitContainer")?.replaceChildren();
    document.getElementById("jungenmenschenContainer")?.replaceChildren();
    document.getElementById("asylverfahrensberatung")?.replaceChildren();
    document.getElementById("Beratung für Menschen außerhalb Deutschlands")?.replaceChildren();
    document.getElementById("Beratung zur Einbürgerung")?.replaceChildren();
    document.getElementById("Rentenberatung")?.replaceChildren();
document.getElementById("Familienberatungsstellen")?.replaceChildren();
   data.forEach(einrichtung => {

    let bereich;

    switch (einrichtung.kategorie) {

        case "Rechtsberatung":
            bereich = document.getElementById("rechtsberatungContainer");
            break;

        case "Schuldnerberatung":
            bereich = document.getElementById("schuldnerberatungContainer");
            break;

        case "Medizin":
            bereich = document.getElementById("medizinContainer");
            break;

        case "Wohnungslosenhilfe":
            bereich = document.getElementById("wohnungslosenhilfeContainer");
            break;

        case "Formularhilfe":
            bereich = document.getElementById("formularhilfeContainer");
            break;

        case "Migrationsberatung":
            bereich = document.getElementById("migrationsdiensteContainer");
            break;

        case "Psychologische Beratungsstellen":
            bereich = document.getElementById("psychologischeberatungenContainer");
            break;

        case "Freizeit und Gemeinschaft":
            bereich = document.getElementById("freizeitContainer");
            break;

        case "Beratung für jungen Menschen":
            bereich = document.getElementById("jungenmenschenContainer");
            break;

        case "Asylverfahrensberatung":
            bereich = document.getElementById("asylverfahrensberatungContainer");
            break;

        case "Beratung für Menschen außerhalb Deutschlands":
            bereich = document.getElementById("menschenausserhalbdeutschlandsContainer");
            break;

        case "Beratung zur Einbürgerung":
            bereich = document.getElementById("einbuergerungContainer");
            break;

        case "Rentenberatung":
            bereich = document.getElementById("rentenberatungContainer");
            break;

        case "Beratung für Menschen, die bereits länger als fünf Jahre in Deutschland leben":
            bereich = document.getElementById("langfristigedeutschlandContainer");
            break;

        case "Sozialbürgerhäuser":
            bereich = document.getElementById("sozialbuergerhaeuserContainer");
            break;

        case "Sprachkurse und Weiterbildung":
            bereich = document.getElementById("sprachkurseContainer");
            break;

        case "Soziale Beratungen der Caritas":
            bereich = document.getElementById("sozialeberatungenContainer");
            break;

        case "Sonstiges":
            bereich = document.getElementById("sonstigesContainer");
            break;
 case "Sonstiges":
            bereich = document.getElementById("familienberatungsstellenContainer");
            break;


        default:
            console.log(
                "Kategorie nicht gefunden:",
                einrichtung.kategorie
            );
            return;
    }

    console.log(
        einrichtung.name,
        einrichtung.kategorie,
        bereich
    );

    if (!bereich) {
        console.error(
            "Container nicht gefunden:",
            einrichtung.kategorie
        );
        return;
    }

const spalte = document.createElement("div");
spalte.className = "col-md-6 col-lg-4 mb-3";

const karte = document.createElement("div");
karte.className = "card border border-danger h-100";

const inhalt = document.createElement("div");
inhalt.className = "card-body d-flex flex-column";

// Beschreibung sicher als Text einsetzen
const beschreibung = einrichtung.beschreibung || "";

inhalt.innerHTML = `
    <h3 class="card-title">
        ${einrichtung.name || ""}
    </h3>

    <p>
        <strong>Adresse:</strong><br>
        ${einrichtung.adresse || ""}
    </p>

    ${einrichtung.telefon ? `
        <p>
            <strong>Telefon:</strong><br>
            ${einrichtung.telefon}
        </p>
    ` : ""}

    ${einrichtung.email ? `
        <p>
            <strong>E-Mail:</strong><br>
            <a href="mailto:${einrichtung.email}">
                ${einrichtung.email}
            </a>
        </p>
    ` : ""}

    ${einrichtung.website ? `
        <p>
            <strong>Website:</strong><br>
            <a href="${einrichtung.website}"
               target="_blank"
               rel="noopener noreferrer">
                Website öffnen
            </a>
        </p>
    ` : ""}

    <div class="details-bereich mt-2" hidden>
        <hr>
        <h5>Beschreibung</h5>
        <p class="beschreibung-text"></p>
    </div>

    <button type="button"
            class="btn btn-outline-danger detailsbtn">
        Mehr Details
    </button>
`;

// Beschreibung als Text einsetzen
const beschreibungText =
    inhalt.querySelector(".beschreibung-text");

beschreibungText.textContent = beschreibung;

// Button-Funktion
const detailsBtn =
    inhalt.querySelector(".detailsbtn");

const detailsBereich =
    inhalt.querySelector(".details-bereich");

detailsBtn.addEventListener("click", function () {

    const istVersteckt = detailsBereich.hidden;

    detailsBereich.hidden = !istVersteckt;

    detailsBtn.textContent = istVersteckt
        ? "Weniger Details"
        : "Mehr Details";

});

// Button nur anzeigen, wenn Beschreibung vorhanden ist
if (!beschreibung.trim()) {
    detailsBtn.remove();
}

karte.appendChild(inhalt);
spalte.appendChild(karte);

bereich.appendChild(spalte);


});


    console.log('Einrichtungen geladen:', data.length);
}

ladeEinrichtungen();
