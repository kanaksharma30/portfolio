// Typing Animation

const text =
"B.Tech CSE Student | Future Software Developer";

let index = 0;

function typeEffect() {

if (index < text.length) {

document.getElementById("typing").innerHTML
+= text.charAt(index);

index++;

setTimeout(typeEffect, 70);

}

}

window.onload = typeEffect;



// Smooth Scroll

function scrollToSection(id) {

document
.getElementById(id)
.scrollIntoView({

behavior: "smooth"

});

}



// Fade Animation

const faders =
document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {

const triggerBottom =
window.innerHeight * 0.8;

faders.forEach(fade => {

const boxTop =
fade.getBoundingClientRect().top;

if (boxTop < triggerBottom) {

fade.classList.add("show");

}

});

});



// Contact Button

function showMessage() {

document.getElementById("message")
.innerHTML =
"Thanks for visiting my portfolio!";

}