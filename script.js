let song = null;

function playSong() {
    song = new Audio("BIRTHDAY.mp3");

    song.loop = true;
    song.volume = 0.6;

    song.play()
        .then(() => {
            document.getElementById("songButton").innerHTML =
                "❤️ Song Playing...";
        })
        .catch((error) => {
            console.log(error);
            alert("Song play નથી થયું 😭");
        });
}


function openLetter() {

    document.getElementById("home").style.display = "none";

    document.getElementById("letterSection").style.display = "flex";

    window.scrollTo(0, 0);
}


function showCards() {

    document.getElementById("letterSection").style.display = "none";

    document.getElementById("cardsSection").style.display = "block";

    window.scrollTo(0, 0);
}


function flipCard(card) {

    card.classList.toggle("flipped");

}


function showFinal() {

    document.getElementById("cardsSection").style.display = "none";

    document.getElementById("finalSection").style.display = "flex";

    window.scrollTo(0, 0);
}
