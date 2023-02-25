let toggle = document.getElementById("menu_toggle");
let aside = document.querySelector("aside");
toggle.addEventListener("click", () => {
  aside.classList.toggle("show_aside");
});
let themeToggle = document.querySelector("#theme_toggler");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("change_mode");
});
//  I'm a junior web developer
let span = document.querySelector(".first");
const animatetext = () => {
  setTimeout(() => {
    span.textContent = "Web Developer";
  }, 0);
  setTimeout(() => {
    span.textContent = "Video editor";
  }, 4000);
  setTimeout(() => {
    span.textContent = "Photographer";
  }, 8000);
};
setInterval(animatetext, 12000);
animatetext();
// ...............................home active
// colorsSwitcher;
//  the btn up
let btnUp = document.querySelector(".btn-up");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 600) {
    btnUp.classList.add("show___btn");
  } else {
    btnUp.classList.remove("show___btn");
  }
});
btnUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
//  the swipper of the cards
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 15,
  effect: "coverflow",
  // effect: "cards",

  grabCursor: "true",
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  parallax: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    reverseDirection: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  disableOnInteraction: "false",
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 850px
    750: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  },
});
/* the swiper ======================================================= */
/* the swiper cards of the slider */
