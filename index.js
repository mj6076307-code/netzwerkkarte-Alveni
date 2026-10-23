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
        function myFunctionAnker8() {
            var element = document.getElementById("myDiv8");
            element.classList.toggle("Anker8");
        }
        function myFunctionAnker8() {
            var x = document.getElementById("myDiv8");
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
        function myFunctionAnker9() {
            var element = document.getElementById("myDiv9");
            element.classList.toggle("Anker9");
        }
        function myFunctionAnker9() {
            var x = document.getElementById("myDiv9");
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
        function myFunctionAnker8() {
            var element = document.getElementById("myDiv8");
            element.classList.toggle("Anker8");
        }
        function myFunctionAnker8() {
            var x = document.getElementById("myDiv8");
            x.style.margin = "8% 0 0% 0";
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";

            }
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
        await supabase
            .from('einrichtungen')
            .select('*')
            .order('id');

    if (error) {
        console.error(error);
        return;
    }

    const bereich =
        document.getElementById('neueEinrichtungen');

    if (!bereich) return;

    bereich.replaceChildren();

    data.forEach(einrichtung => {

        const spalte =
            document.createElement('div');

        spalte.className =
            'col-md-6 col-lg-4 mb-3';

        const karte =
            document.createElement('div');

        karte.className =
            'card border border-danger h-100';

        const inhalt =
            document.createElement('div');

        inhalt.className = 'card-body';

        inhalt.innerHTML = `
            <h3>${einrichtung.name || ''}</h3>
            <p><strong>Kategorie:</strong> ${einrichtung.kategorie || ''}</p>
            <p><strong>Adresse:</strong> ${einrichtung.adresse || ''}</p>
            ${einrichtung.telefon ? `<p>${einrichtung.telefon}</p>` : ''}
            ${einrichtung.email ? `<p>${einrichtung.email}</p>` : ''}
            ${einrichtung.website ? `<a href="${einrichtung.website}" target="_blank">Website öffnen</a>` : ''}
            ${einrichtung.beschreibung ? `<p>${einrichtung.beschreibung}</p>` : ''}
        `;

        karte.appendChild(inhalt);
        spalte.appendChild(karte);
        bereich.appendChild(spalte);
    });

    console.log(
        'Einrichtungen geladen:',
        data.length
    );
}

ladeEinrichtungen();
