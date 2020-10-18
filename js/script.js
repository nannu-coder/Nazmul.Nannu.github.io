// Hover Effect
const ANIMATEDCLASSNAME = "animated";
const ELEMENTS = document.querySelectorAll(".HOVER");
const ELEMENTS_SPAN = [];

ELEMENTS.forEach((element, index) => {

    if (!ELEMENTS_SPAN[index])
        ELEMENTS_SPAN[index] = element.querySelector("span");

    element.addEventListener("mouseover", e => {
        ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
        ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";

        if (addAnimation) element.classList.add(ANIMATEDCLASSNAME);
    });
});

//Banner slick slider
$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    autoplay: true,
    pauseOnHover: false,

});

//sticky nav-bar
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        if (scroll > 150) {
            $(".menu").css({
                "background-color": "white",
                "border-bottom": "1px solid #e6e5ea"
            });
            $(".menu").addClass("nav_bg");
        } else {
            $(".menu").css({
                "background-color": "transparent",
                "border": "none"
            });
            $(".menu").removeClass("nav_bg");
        }
    })
})

//bottom fixed button
$(window).scroll(function () {
    var scroll = $(this).scrollTop();
    if (scroll > 150) {
        $(".btn_bottom").addClass("bt_btn");
    } else {
        $(".btn_bottom").removeClass("bt_btn");
    }
})

// barfiller js
$(document).ready(function () {

    $('#bar1').barfiller();
    $('#bar2').barfiller();
    $('#bar3').barfiller({
        barColor: '#f5865d'
    });
    $('#bar4').barfiller({
        barColor: '#f5865d',
        duration: 3000
    });

    $('#bar5').barfiller();
    $('#bar6').barfiller();
    $('#bar7').barfiller({
        barColor: '#f5865d'
    });
    $('#bar8').barfiller({
        barColor: '#f5865d',
        duration: 3000
    });

});

//Client Slide 

$('.slider_box').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true,
    verticalSwiping: true,
    prevArrow: ".prev",
    nextArrow: ".next",
    responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 320,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
            }
        }
    ]
});

// direct aware hover
$(function () {

    $(' #da-thumbs > li ').each(function () {
        $(this).hoverdir({
            hoverDelay: 75
        });
    });

});

// Counter Up
jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

// Scrollspy
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#nav'
})

// onclick active
$(document).ready(function () {
    $('.nav-link').on('click', function () {
        $('.navbar-nav').find('.active').removeClass('active');
        $(this).addClass('active');
    });
});



// wow js
window.addEventListener('scroll', function (e) {
    if ($(window).scrollTop() <= 50) {
        $('.wow').removeClass('animated');
        $('.wow').removeAttr('style');
        new WOW().init();
    }
});

// $("#navbarSupportedContent").on('show.bs.collapse', function () {
//     $('a.nav-link').click(function () {
//         $("#navbarSupportedContent").collapse('hide');
//     });
// });