const playButton = document.querySelector(".record-center");
const record = document.querySelector(".record");
const envelope = document.querySelector(".envelope");
const letter = document.querySelector(".letter");
const music = document.querySelector("#music");
const photoScene = document.querySelector(".photo-scene");
const title = document.querySelector("#title");
const questionFloat = document.querySelector(".question-float");
const heartContainer = document.querySelector(".heart-container");

let started = false;



playButton.addEventListener("click", () => {

    if (started) return;

    started = true;

    music.play();

    setTimeout(() => {
        title.textContent = "Open the envelope please";
    }, 1000);

    record.classList.add("move-left");

    setTimeout(() => {
        envelope.classList.add("show");
    }, 900);

});



envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    questionFloat.style.animation = "none";
    questionFloat.style.opacity = "0";

    setTimeout(() => {

        photoScene.classList.add("show");

        heartContainer.classList.add("show");

        envelope.classList.remove("show");
        envelope.classList.remove("open");

        letter.classList.add("show");

    }, 850);

});