let wheel = document.querySelector('.wheel');
let button = document.querySelector('.button');
let confetti = document.querySelector('#confetti');

// New audio objects
const confettiSound = new Audio();
const clappingSound = new Audio();
// Change audio file here 👇
confettiSound.src = "confetti-pop-sound.mp3";
clappingSound.src = "quiet-short-clap.mp3";
// CND object for blowing confetti
const blowConfetti = new JSConfetti();
let value = Math.ceil(Math.random() * 3600);

// Button on click event to spin, blow confetti, and play audio
button.onclick = function() {
    // Spin wheel
    wheel.style.transform = "rotate(" + value + "deg)";
    value += Math.ceil(Math.random() * 3600);
    setTimeout(() => {
        // Doubled up on confetti
        // I think it was too little...
        blowConfetti.addConfetti();
        blowConfetti.addConfetti();
        // Play the confetti and hand clap audio
        clappingSound.play();
        confettiSound.play();
    }, 3800)
}