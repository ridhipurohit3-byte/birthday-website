/* =================================
   PLAY BIRTHDAY SONG
================================= */

function startMusic() {

    const song =
        document.getElementById(
            "birthdaySong"
        );

    const musicButton =
        document.getElementById(
            "musicButton"
        );

    const letterButton =
        document.getElementById(
            "letterButton"
        );


    // Volume

    song.volume = 0.5;


    // Play song

    song.play()
        .then(function () {

            console.log(
                "BIRTHDAY.MP3 is playing ❤️"
            );

        })
        .catch(function (error) {

            console.log(
                "Music error:",
                error
            );

        });


    // Hide music button

    musicButton.style.display =
        "none";


    // Show letter button

    letterButton.style.display =
        "inline-block";

}



/* =================================
   OPEN LETTER
================================= */

function openLetter() {

    document.getElementById(
        "openingScreen"
    ).style.display =
        "none";


    document.getElementById(
        "letterScreen"
    ).style.display =
        "flex";


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
        "letterScreen"
    ).style.display =
        "none";


    document.getElementById(
        "cardsSection"
    ).style.display =
        "block";


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
    ).style.display =
        "none";


    document.getElementById(
        "finalSection"
    ).style.display =
        "flex";


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}