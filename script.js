let slideIndex = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

function showSlide(index) {
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    }
    document.querySelector('.slider').style.transform = `translateX(-${slideIndex * 100}%)`;
}

next.addEventListener('click', () => {
    slideIndex++;
    showSlide(slideIndex);
});

prev.addEventListener('click', () => {
    slideIndex--;
    showSlide(slideIndex);
});

showSlide(slideIndex);
