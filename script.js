const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
/*const prevB = document.getElementById('prev');
const nextB = document.getElementById('next');*/
const slides = document.querySelectorAll('.carousel-slide');
//const slidees = document.querySelectorAll('.carousel-slide1')
//let currentIndex1 = 0;
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

/*function prevSlide1() {
    currentIndex = (currentIndex1 - 1 + slidees.length) % slidees.length;
    showSlide(currentIndex1);
}

function nextSlide1() {
    currentIndex = (currentIndex1 + 1) % slidees.length;
    showSlide(currentIndex1);
}

function showSlide1(index) {
    slidees.forEach((slidee, i) => {
        if (i === index) {
            slidee.style.display = 'block';
        } else {
            slidee.style.display = 'none';
        }
    });
}*/

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}



prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);
//prevB.addEventListener('click', prevSlide1);
//nextB.addEventListener('click', nextSlide1);

// Show the initial slide
showSlide(currentIndex);
//showSlide1(currentIndex1);
