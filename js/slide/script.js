const imgBox = document.querySelector('.imgBox'),
      slides = document.querySelectorAll('.slider_img'),
      header = document.querySelector("header"),
      nav = document.querySelector(".nav"),
      navMenu = document.querySelector(".nav__menu"),
      navList = document.querySelector(".nav__menu-list"),
      more = document.querySelector(".moreBtn");
let i = 0;

/*const menuMouseEnter = () => {
    header.classList.toggle("open")
}

header.addEventListener("mouseover",menuMouseEnter);


*/
// 공부후에 다시 수정...


const moreBtn = () => {
    const test = document.querySelectorAll(".test"); 
    Array.from(test).forEach(tests => {
        tests.classList.add("block");
    });    // test가 nodelist이기 때문에 Array.from을 사용해서 Array로 만든 후에 forEach로 적용.

    const moreBtn2 = () => {
        const test2 = document.querySelectorAll(".test2");
        Array.from(test2).forEach(tests => {
            tests.classList.add("block");
        });
        const moreBtn3 = () => {
            const test3 = document.querySelectorAll(".test3");
            Array.from(test3).forEach(tests => {
                tests.classList.add("block");
            });
            more.classList.add("BtnFadeOut");
        }
        more.addEventListener('click',moreBtn3);

    }
    more.addEventListener('click',moreBtn2);

}

more.addEventListener('click', moreBtn);

const headerScroll = () => {
    header.classList.toggle("fixed", window.scrollY > 100);
}
window.addEventListener("scroll",headerScroll)
// 메인화면에서 스크롤을 Y에서 100만큼 내릴 시 fixed 클래스 토글.


const NextSlide = () => {
    slides[i].classList.remove("first");
    slides[i].classList.remove("active");
    i = (i + 1) % slides.length;
    slides[i].classList.add("active");
}
// 나머지를 사용해서 i가 6이되면 처음으로 되돌아 오도록 구성

setInterval(NextSlide,5000);

const PrevSlide = () => {
    slides[i].classList.remove("first");
    slides[i].classList.remove("active");
    i = (i - 1 + slides.length) % slides.length;
    slides[i].classList.add("active");
}


