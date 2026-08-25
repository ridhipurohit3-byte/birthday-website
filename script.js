/* =================================
   MUSIC
================================= */

let song = null;

function playSong() {

    if (!song) {

        song = new Audio(
            "https://ridhipurohit3-byte.github.io/birthday-website/BIRTHDAY.mp3"
        );

        song.loop = true;

        song.volume = 0.6;
    }


    song.play()
        .then(function () {

            const button =
                document.querySelector(
                    ".song-btn"
                );

            button.innerHTML =
                "❤️ Our Song Is Playing...";

            button.style.opacity =
                "0.85";

        })

        .catch(function (error) {

            console.log(
                "Audio Error:",
                error
            );

            alert(
                "Song start નથી થયું. ફરી એકવાર button tap કરજે ❤️"
            );

        });

}


/* =================================
   OPEN LETTER
================================= */

function openLetter() {

    document.getElementById(
        "home"
    ).style.display = "none";


    document.getElementById(
        "letterSection"
    ).style.display = "flex";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =================================
   SHOW CARDS
================================= */

function showCards() {

    document.getElementById(
        "letterSection"
    ).style.display = "none";


    document.getElementById(
        "cardsSection"
    ).style.display = "block";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =================================
   FLIP CARD
================================= */

function flipCard(card) {

    card.classList.toggle(
        "flipped"
    );

}


/* =================================
   FINAL SCREEN
================================= */

function showFinal() {

    document.getElementById(
        "cardsSection"
    ).style.display = "none";


    document.getElementById(
        "finalSection"
    ).style.display = "flex";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
