const imgBox = document.querySelector('.imgBox'),
      slides = document.querySelectorAll('.slider_img');
let i = 0;


const NextSlide = () => {
    slides[i].classList.remove("first");
    slides[i].classList.remove("active");
    i = (i + 1) % slides.length;
    slides[i].classList.add("active");
}
setInterval(NextSlide,5000);

const PrevSlide = () => {
    slides[i].classList.remove("first");
    slides[i].classList.remove("active");
    i = (i - 1 + slides.length) % slides.length;
    slides[i].classList.add("active");
}


