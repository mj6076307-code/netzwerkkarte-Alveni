// ======================================
// SUCHE
// ======================================

const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("input", function () {

        const searchTerm = this.value.toLowerCase();

        document
            .querySelectorAll("#searchResults div")
            .forEach(item => {

                const text =
                    item.textContent.toLowerCase();

                item.style.display =
                    text.includes(searchTerm)
                        ? "block"
                        : "none";
            });
    });
}


// ======================================
// CAROUSEL
// ======================================

let myIndex = 0;

function carousel() {

    const slides =
        document.getElementsByClassName("mySlides");

    if (!slides.length) return;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    myIndex++;

    if (myIndex > slides.length) {
        myIndex = 1;
    }

    slides[myIndex - 1].style.display = "block";

    setTimeout(carousel, 2000);
}

carousel();


// ======================================
// TOGGLE
// ======================================

function toggleElements(ids) {

    ids.forEach(id => {

        const element =
            document.getElementById(id);

        if (!element) {
            console.warn(
                `Element ${id} nicht gefunden`
            );
            return;
        }

        element.style.display =
            window.getComputedStyle(element).display === "none"
                ? "inline"
                : "none";
    });
}


// ======================================
// KATEGORIEN-CONTAINER
// ======================================

function getContainer(kategorie) {

    const containerMap = {

        "Rechtsberatung":
            "rechtsberatungContainer",

        "Schuldnerberatung":
            "schuldnerberatungContainer",

        "Medizin":
            "medizinContainer",

        "Wohnungslosenhilfe":
            "wohnungslosenhilfeContainer",

        "Formularhilfe":
            "formularhilfeContainer",

        "Migrationsberatung":
            "migrationsdiensteContainer",

        "Psychologische Beratungsstellen":
            "psychologischeberatungenContainer",

        "Freizeit und Gemeinschaft":
            "freizeitContainer"
    };

    return document.getElementById(
        containerMap[kategorie]
    );
}


// ======================================
// EINRICHTUNGEN LADEN
// ======================================

async function ladeEinrichtungen() {

    const { data, error } =
        await supabaseClient
            .from("einrichtungen")
            .select("*")
            .order("id");

    if (error) {
        console.error(error);
        return;
    }

    [
        "rechtsberatungContainer",
        "schuldnerberatungContainer",
        "medizinContainer",
        "wohnungslosenhilfeContainer",
        "formularhilfeContainer",
        "migrationsdiensteContainer",
        "psychologischeberatungenContainer",
        "freizeitContainer"
    ].forEach(id => {

        document
            .getElementById(id)
            ?.replaceChildren();
    });

    data.forEach(einrichtung => {

        const container =
            getContainer(
                einrichtung.kategorie
            );

        if (!container) return;

        const spalte =
            document.createElement("div");

        spalte.className =
            "col-md-6 col-lg-4 mb-3";

        spalte.innerHTML = `
            <div class="card border border-danger h-100">
                <div class="card-body">
                    <h3>${einrichtung.name || ""}</h3>

                    <p>
                        <strong>Adresse:</strong>
                        ${einrichtung.adresse || ""}
                    </p>

                    ${einrichtung.telefon
                        ? `<p>${einrichtung.telefon}</p>`
                        : ""}

                    ${einrichtung.email
                        ? `<p>${einrichtung.email}</p>`
                        : ""}

                    ${einrichtung.website
                        ? `<a href="${einrichtung.website}" target="_blank">Website öffnen</a>`
                        : ""}

                    ${einrichtung.beschreibung
                        ? `<p>${einrichtung.beschreibung}</p>`
                        : ""}
                </div>
            </div>
        `;

        container.appendChild(spalte);
    });

    console.log(
        "Einrichtungen geladen:",
        data.length
    );
}

ladeEinrichtungen();
