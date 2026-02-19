let wheel = document.querySelector('.wheel');
let button = document.querySelector('.button');
let value = Math.ceil(Math.random() * 3600) / 9;

button.onclick = function() {
    wheel.style.transform = "rotate(" + value + "deg)";
    value += Math.ceil(Math.random() * 3600) / 9;
}