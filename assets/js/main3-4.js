"use strict";
(function ($) {
  "use strict";
  $(document).ready(function () {
    //  sticky navbar
    $(window).scroll(function () {
      if ($(window).scrollTop() > 0) {
        $(".header_wrapper ").addClass("navbar-fixed");
      } else {
        $(".header_wrapper ").removeClass("navbar-fixed");
      }
    });

    $(".hero_tab_area").skeletabs({
      breakpoint: false,
    });

    //Rating Star
    /* 1. Visualizing things on Hover - See next part for action on click */
    $(".stars li")
      .on("mouseover", function () {
        var onStar = parseInt($(this).data("value"), 10); // The star currently mouse on

        // Now highlight all the stars that's not after the current hovered star
        $(this)
          .parent()
          .children("li.star")
          .each(function (e) {
            if (e < onStar) {
              $(this).addClass("hover_rating");
            } else {
              $(this).removeClass("hover_rating");
            }
          });
      })
      .on("mouseout", function () {
        $(this)
          .parent()
          .children("li.star")
          .each(function (e) {
            $(this).removeClass("hover_rating");
          });
      });

    var i;

    /* 2. Action to perform on click */
    $(".stars li").on("click", function () {
      var onStar = parseInt($(this).data("value"), 10); // The star currently selected
      var stars = $(this).parent().children("li.star");

      for (i = 0; i < stars.length; i++) {
        $(stars[i]).removeClass("selected_rating");
      }

      for (i = 0; i < onStar; i++) {
        $(stars[i]).addClass("selected_rating");
      }
    });
    // Choose Section and  MagnificPopup
    // init Isotope
    var $grid = $(".choose_filter_row").isotope({
      // options
    });
    // filter items on button click
    $(".choose_header").on("click", "li", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({
        filter: filterValue,
      });
    });
    // filter items on button active class
    $(".choose_header").on("click", "li", function () {
      $(this).addClass("choose_active").siblings().removeClass("choose_active");
    });

    $(".choose_filter_row").magnificPopup({
      type: "image",
      delegate: "a",
      gallery: { enabled: true },
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

//Nav Menu Resposnive
var expandButton = document.querySelectorAll(".dropdown_list");
var dropdown_items = document.querySelectorAll(".dropdown_items_area");
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

// Search active box
var searchIcon = document.querySelector(".search_icon");
var searchBox = document.querySelector(".header_search");
var navItemsSection = document.querySelector(".navbar_items_section");
function navSearch() {
  searchBox.classList.toggle("search_active");
  navItemsSection.classList.toggle("hide_nav_items");
  searchIcon.classList.toggle("search_icon_active");
}

// Custom Select Box 01
let selectDropdown1 = document.querySelector("#select_box1");
let selectInput1 = document.querySelector("#select_input1");
let selectOption1 = document.querySelector("#option_dropdown1");


if(selectInput1){
  selectInput1.addEventListener("click", () => {
    selectDropdown1.classList.toggle("selectBox_active");
  });
}
if(selectOption1){
  selectOption1.addEventListener("click", (e) => {
    let selectItem1 = e.target;
    let listValue1 = selectItem1.attributes.location.value;
    selectInput1.value = listValue1;
    selectDropdown1.classList.remove("selectBox_active");
  });
}


// Custom Select Box 02
let selectDropdown2 = document.querySelector("#select_box2");
let selectInput2 = document.querySelector("#select_input2");
let selectOption2 = document.querySelector("#option_dropdown2");


if(selectInput2){
  selectInput2.addEventListener("click", () => {
    selectDropdown2.classList.toggle("selectBox_active");
  });
}
if(selectOption2){
  selectOption2.addEventListener("click", (e) => {
    let selectItem2 = e.target;
    let listValue2 = selectItem2.attributes.location.value;
    selectInput2.value = listValue2;
    selectDropdown2.classList.remove("selectBox_active");
  });
}


// Custom Select Box 03
let selectDropdown3 = document.querySelector("#select_box3");
let selectInput3 = document.querySelector("#select_input3");
let selectOption3 = document.querySelector("#option_dropdown3");


if(selectInput3){
  selectInput3.addEventListener("click", () => {
    selectDropdown3.classList.toggle("selectBox_active");
  });
}
if(selectOption3){
  selectOption3.addEventListener("click", (e) => {
    let selectItem3 = e.target;
    let listValue3 = selectItem3.attributes.location.value;
    selectInput3.value = listValue3;
    selectDropdown3.classList.remove("selectBox_active");
  });
}


// Custom Select Box 04
let selectDropdown4 = document.querySelector("#select_box4");
let selectInput4 = document.querySelector("#select_input4");
let selectOption4 = document.querySelector("#option_dropdown4");


if(selectInput4){
  selectInput4.addEventListener("click", () => {
    selectDropdown4.classList.toggle("selectBox_active");
  });
}
if(selectOption4){
  selectOption4.addEventListener("click", (e) => {
    let selectItem4 = e.target;
    let listValue4 = selectItem4.attributes.location.value;
    selectInput4.value = listValue4;
    selectDropdown4.classList.remove("selectBox_active");
  });
}

// Custom Select Box 05
let selectDropdown5 = document.querySelector("#select_box5");
let selectInput5 = document.querySelector("#select_input5");
let selectOption5 = document.querySelector("#option_dropdown5");


if(selectInput5){
  selectInput5.addEventListener("click", () => {
    selectDropdown5.classList.toggle("selectBox_active");
  });
}
if(selectOption5){
  selectOption5.addEventListener("click", (e) => {
    let selectItem5 = e.target;
    let listValue5 = selectItem5.attributes.location.value;
    selectInput5.value = listValue5;
    selectDropdown5.classList.remove("selectBox_active");
  });
}

// Custom Select Box 06
let selectDropdown6 = document.querySelector("#select_box6");
let selectInput6 = document.querySelector("#select_input6");
let selectOption6 = document.querySelector("#option_dropdown6");
if(selectInput6){
  selectInput6.addEventListener("click", () => {
    selectDropdown6.classList.toggle("selectBox_active");
  });
}
if(selectOption6){
  selectOption6.addEventListener("click", (e) => {
    let selectItem6 = e.target;
    let listValue6 = selectItem6.attributes.location.value;
    selectInput6.value = listValue6;
    selectDropdown6.classList.remove("selectBox_active");
  });
}

// Custom Select Box 07
let selectDropdown7 = document.querySelector("#select_box7");
let selectInput7 = document.querySelector("#select_input7");
let selectOption7 = document.querySelector("#option_dropdown7");
if(selectInput7){
  selectInput7.addEventListener("click", () => {
    selectDropdown7.classList.toggle("selectBox_active");
  });
}
if(selectOption7){
  selectOption7.addEventListener("click", (e) => {
    let selectItem7 = e.target;
    let listValue7 = selectItem7.attributes.location.value;
    selectInput7.value = listValue7;
    selectDropdown7.classList.remove("selectBox_active");
  });
}

// Custom Select Box 08
let selectDropdown8 = document.querySelector("#select_box8");
let selectInput8 = document.querySelector("#select_input8");
let selectOption8 = document.querySelector("#option_dropdown8");
if(selectInput8){
  selectInput8.addEventListener("click", () => {
    selectDropdown8.classList.toggle("selectBox_active");
  });
}

if(selectOption8){
  selectOption8.addEventListener("click", (e) => {
    let selectItem8 = e.target;
    let listValue8 = selectItem8.attributes.location.value;
    selectInput8.value = listValue8;
    selectDropdown8.classList.remove("selectBox_active");
  });
}

// Custom Select Box 09
let selectDropdown9 = document.querySelector("#select_box9");
let selectInput9 = document.querySelector("#select_input9");
let selectOption9 = document.querySelector("#option_dropdown9");
if(selectInput9){
  selectInput9.addEventListener("click", () => {
    selectDropdown9.classList.toggle("selectBox_active");
  });
}


if(selectOption9){
  selectOption9.addEventListener("click", (e) => {
    let selectItem9 = e.target;
    let listValue9 = selectItem9.attributes.location.value;
    selectInput9.value = listValue9;
    selectDropdown9.classList.remove("selectBox_active");
  });
}
//property
var swiper1 = new Swiper(".property02_slider_area .swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },

  breakpoints: {

    575: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

//Brand Slider
var swiper2 = new Swiper(".brand_slider_area .swiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    // when window width is >= 320px
    1: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    // when window width is >= 768px
    575: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});

// Property Slider
var swiper3 = new Swiper(".property_slider_area .swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  breakpoints: {
    // when window width is >= 320px
    1: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    // when window width is >= 768px
    575: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Testimonial Slider

var swiper4 = new Swiper(".Testimonial_slider_area .swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});

// AOS On Page Scroll JS
$(function () {
  AOS.init({
    duration: 1100,
    offest: 50,
  });
});
$(window).on("load", function () {
  AOS.refresh();
});
