const slideNodelist = document.querySelectorAll(".slide");

const next = document.querySelector('#next');

const slides = Array.prototype.slice.call(slideNodelist);

console.log(slides)


let slideValue = 0;
let clicked = 0
next.addEventListener("click", function () {
    if (slideValue < 1200) {
        slides.forEach(element => {
            element.style.transform = `translateX(-${slideValue + 320}px)`
        });
        slideValue = slideValue + 300
        console.log(slideValue)
        clicked++

    }
    if (slideValue == 1200) {
        slideValue = -320
        
    }


    slides[clicked].classList.add("active");
    slides[clicked - 1].classList.remove("active");

    console.log(clicked)




});