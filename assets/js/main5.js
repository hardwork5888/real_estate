"use strict";
(function ($) {
  "use strict";
  $(document).ready(function () {
    //  sticky navbar
    $(window).scroll(function () {
      if ($(window).scrollTop() > 0) {
        $(".nav_wrapper ").addClass("navbar-fixed");
      } else {
        $(".nav_wrapper ").removeClass("navbar-fixed");
      }
    });
  });
})(jQuery);
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

//Hamburger Icon
let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav_items_area");
let headerWrapper = document.querySelector(".nav_wrapper");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("hamburger_active");
  navMenu.classList.toggle("navbar_active");
  headerWrapper.classList.toggle("header_color_active");
}

// Custom Select Box 01
let selectIcon1 = document.querySelector("#select_icon1");
let selectInput1 = document.querySelector("#select_input1");
let selectOption1 = document.querySelector("#option_dropdown1");

selectInput1.addEventListener("click", () => {
  selectOption1.classList.toggle("selectBox_active");
  selectIcon1.classList.toggle("selectIcon_active");
});
selectOption1.addEventListener("click", (e) => {
  let selectItem1 = e.target;
  let listValue1 = selectItem1.textContent;
  selectInput1.innerHTML = listValue1;
  selectOption1.classList.remove("selectBox_active");
  selectIcon1.classList.remove("selectIcon_active");
});
// Custom Select Box 02
let selectIcon2 = document.querySelector("#select_icon2");
let selectInput2 = document.querySelector("#select_input2");
let selectOption2 = document.querySelector("#option_dropdown2");

selectInput2.addEventListener("click", () => {
  selectOption2.classList.toggle("selectBox_active");
  selectIcon2.classList.toggle("selectIcon_active");
});
selectOption2.addEventListener("click", (e) => {
  let selectItem2 = e.target;
  let listValue2 = selectItem2.textContent;
  selectInput2.innerHTML = listValue2;
  selectOption2.classList.remove("selectBox_active");
  selectIcon2.classList.remove("selectIcon_active");
});
// Custom Select Box 03
let selectIcon3 = document.querySelector("#select_icon3");
let selectInput3 = document.querySelector("#select_input3");
let selectOption3 = document.querySelector("#option_dropdown3");

selectInput3.addEventListener("click", () => {
  selectOption3.classList.toggle("selectBox_active");
  selectIcon3.classList.toggle("selectIcon_active");
});
selectOption3.addEventListener("click", (e) => {
  let selectItem3 = e.target;
  let listValue3 = selectItem3.textContent;
  selectInput3.innerHTML = listValue3;
  selectOption3.classList.remove("selectBox_active");
  selectIcon3.classList.remove("selectIcon_active");
});

// Property Slider
var swiper1 = new Swiper(".property_slider_area .swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: true,

  autoplay: {
    delay: 5000,
  },
});

// Brand Slider
var swiper2 = new Swiper(".brand_slider_area .swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    // when window width is >=  1200px
    1200: {
      slidesPerView: 6,
      spaceBetween: 40,
    },
  },
});

//Offer Slider
var swiper3 = new Swiper(".offer_slider_area .swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

