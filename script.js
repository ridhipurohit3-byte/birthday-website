/* =========================
   SONG
========================= */

let song = null;


const songButton =
    document.getElementById("songButton");


songButton.addEventListener(
    "click",
    function () {

        if (!song) {

            song =
                new Audio(
                    "BIRTHDAY.mp3"
                );

            song.loop = true;

            song.volume = 0.6;
        }


        song.play()
            .then(function () {

                songButton.innerHTML =
                    "❤️ Our Song Is Playing...";

            })
            .catch(function (error) {

                console.log(
                    "Audio error:",
                    error
                );

                alert(
                    "Song play કરવા માટે ફરી button tap કરજે ❤️"
                );

            });

    }
);



/* =========================
   OPEN LETTER
========================= */

const openLetterButton =
    document.getElementById(
        "openLetterButton"
    );


openLetterButton.addEventListener(
    "click",
    function () {

        document.getElementById(
            "home"
        ).style.display = "none";


        document.getElementById(
            "letterSection"
        ).style.display = "flex";


        window.scrollTo(
            0,
            0
        );

    }
);



/* =========================
   LETTER → CARDS
========================= */

const cardsButton =
    document.getElementById(
        "cardsButton"
    );


cardsButton.addEventListener(
    "click",
    function () {

        document.getElementById(
            "letterSection"
        ).style.display = "none";


        document.getElementById(
            "cardsSection"
        ).style.display = "block";


        window.scrollTo(
            0,
            0
        );

    }
);



/* =========================
   CARDS
========================= */

const cards =
    document.querySelectorAll(
        ".card"
    );


cards.forEach(
    function (card) {

        card.addEventListener(
            "click",
            function () {

                card.classList.toggle(
                    "flipped"
                );

            }
        );

    }
);



/* =========================
   FINAL
========================= */

const finalButton =
    document.getElementById(
        "finalButton"
    );


finalButton.addEventListener(
    "click",
    function () {

        document.getElementById(
            "cardsSection"
        ).style.display = "none";


        document.getElementById(
            "finalSection"
        ).style.display = "flex";


        window.scrollTo(
            0,
            0
        );

    }
);
