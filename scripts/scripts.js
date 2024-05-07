document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', function() {
        nav.classList.toggle('nav-active');

        // Burger Animation
        burger.classList.toggle('toggle');
    });
});

//GALLERY SLIDESHOW
var slideIndex = 1;
showSlides(slideIndex);

var slides,dots,timer;

function plusSlides(position) {
    clearInterval(timer);
    if (position < 0){
        showSlides(slideIndex -= 1);
    } else {
        showSlides(slideIndex += 1); 
    }
    if (position === -1){
        timer = setInterval(function(){plusSlides(position + 2)}, 5000);
    } else {
        timer = setInterval(function(){plusSlides(position + 1)}, 5000);
    }
}

function currentSlide(index) {
    clearInterval(timer);
    timer = setInterval(function(){plusSlides(index + 1)}, 5000);
    showSlides(slideIndex = index);
}

function showSlides(position) {
    var i;
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");
    if (position > slides.length) {slideIndex = 1}
    if (position < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

window.onload = function() {
    timer = setInterval(function(){plusSlides(1)}, 5000);
}
