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
                document.getElementById(
                    "songButton"
                );

            button.innerHTML =
                "❤️ Our Song Is Playing...";

        })
        .catch(function (error) {

            console.log(
                "Song Error:",
                error
            );

            alert(
                "Song play કરવા માટે ફરી button tap કરજે ❤️"
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


    window.scrollTo(
        0,
        0
    );
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


    window.scrollTo(
        0,
        0
    );
}



/* =================================
   CARD FLIP
================================= */

function flipCard(card) {

    card.classList.toggle(
        "flipped"
    );

}



/* =================================
   FINAL
================================= */

function showFinal() {

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
