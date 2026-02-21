let wheel = document.querySelector('.wheel');
let button = document.querySelector('.button');
let confetti = document.querySelector('#confetti');
const blowConfetti = new JSConfetti();

let value = Math.ceil(Math.random() * 3600);

button.onclick = function() {
    wheel.style.transform = "rotate(" + value + "deg)";
    value += Math.ceil(Math.random() * 3600);
    setTimeout(() => {
        blowConfetti.addConfetti();
        blowConfetti.addConfetti();
    }, 4000)
}