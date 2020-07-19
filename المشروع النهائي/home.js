window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//الهمبرقر------------------------------------------------
function closeMenu() {
  document.getElementById("navbar").style.height = "0%";
}
function openMenu() {
  document.getElementById("navbar").style.height = "100%";
}
// ------------------السلايدات---------------
let swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 5,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
