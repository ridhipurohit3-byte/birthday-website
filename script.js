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
        .then(() => {

            const button =
                document.querySelector(".music-btn");

            button.innerHTML =
                "❤️ Our Song Is Playing...";

            button.disabled = true;

        })
        .catch((error) => {

            console.log(error);

            alert(
                "Song start નથી થયું. Browserમાં આ website માટે sound allow કરવું પડશે."
            );

        });
}


function openLetter() {

    document.getElementById("home").style.display =
        "none";

    document.getElementById("letterSection").style.display =
        "flex";

    window.scrollTo(0, 0);
}


function showCards() {

    document.getElementById("letterSection").style.display =
        "none";

    document.getElementById("cardsSection").style.display =
        "block";

    window.scrollTo(0, 0);
}


function flipCard(card) {

    card.classList.toggle("flipped");

}


function showFinal() {

    document.getElementById("cardsSection").style.display =
        "none";

    document.getElementById("finalSection").style.display =
        "flex";

    window.scrollTo(0, 0);
}
