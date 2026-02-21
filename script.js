let wheel = document.querySelector('.wheel');
let button = document.querySelector('.button');
let confetti = document.querySelector('#confetti');

// New audio objects
const confettiSound = new Audio();
const clappingSound = new Audio();
// Change audio file here 👇
confettiSound.src = "confetti-pop-sound.mp3";
clappingSound.src = "quiet-short-clap.mp3";
const blowConfetti = new JSConfetti();

let value = Math.ceil(Math.random() * 3600);

button.onclick = function() {
    wheel.style.transform = "rotate(" + value + "deg)";
    value += Math.ceil(Math.random() * 3600);
    setTimeout(() => {
        blowConfetti.addConfetti();
        blowConfetti.addConfetti();
        clappingSound.play();
        confettiSound.play();
    }, 3800)
}