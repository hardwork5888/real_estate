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

// Hero Section TAb Area
//Button Selector
let heroTAbButton = document.querySelectorAll("#tab_button_area1 li");
if (heroTAbButton) {
  heroTAbButton.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      //Pass selector as a parametter
      tab(btn, index, "#tab_button_area1 li", "#tab_items_area1");
    });
  });
}
function tab(btn, index, tabButtonList, tabItemsContent) {
  let tabButton = document.querySelectorAll(tabButtonList);
  let tabItems = document.querySelectorAll(tabItemsContent);
  //Remove Parent Class OF Button
  tabButton.forEach((removeclass) => {
    removeclass.classList.remove("tab_button_active");
  });
  //Active Class To Button
  btn.classList.add("tab_button_active");
  //Hide Tab Content
  tabItems.forEach((hideTAb) => hideTAb.classList.remove("tab_items_active"));
  //Display Tab Content
  tabItems[index].classList.add("tab_items_active");
}

//Testimonial Slider
var swiper = new Swiper(".testimonial_row .swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".slider_next_icon",
    prevEl: ".slider_prev_icon",
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
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
