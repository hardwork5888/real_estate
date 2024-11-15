"use strict";
(function ($) {
  "use strict";
  $(document).ready(function () {
    $("select").niceSelect();
  });
})(jQuery);

//Sticky Navbar
window.addEventListener("scroll", () => {
  let headerWrapper = document.querySelector(".header_wrapper");
  headerWrapper.classList.toggle("navbar-fixed", scrollY > 0);
});

//Nav Menu Resposnive
var expandButton = document.querySelectorAll(".dropdown_list");
var dropdown_items = document.querySelectorAll(".dropdown_items_area");
var dropdownIcon = document.querySelectorAll(".dropdown_icon1");
expandButton.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("open");
  });
});

//Hamburger Icon
let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav_menu_area");
let headerWrapper = document.querySelector(".header_wrapper");

hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
  hamburger.classList.toggle("hamburger_active");
  navMenu.classList.toggle("navbar_active");
  headerWrapper.classList.toggle("header_color_active");
}




//Property Slider Area
var swiper = new Swiper('.property_slider_row .swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: true,
   // Responsive breakpoints
   breakpoints: {
   // when window width is >= 575px
    575: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }

});

//Testimonial Slider
var swiper = new Swiper('.testimonial_row .swiper', {
  autoplay: {
    delay: 5000,
  },
});

// ScrollToUp
window.addEventListener("scroll", function () {
  var scroll = document.querySelector(".scrolltop");
  scroll.classList.toggle("scroll_active", window.scrollY > 500);
});

function scrollUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
