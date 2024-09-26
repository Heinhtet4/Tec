$(document).ready(function() {
    AOS.init();

    const currentLocation = window.location.href;

    const navLink = document.querySelectorAll(".nav-link");
    for (let i = 0; i < navLink.length; i++) {
        if (navLink[i].href === currentLocation) {
            $(navLink[i]).addClass("active fw-bold");
        }
    }

    // Responsive Navbar
    $(".navbar-toggler").click(function() {
        $("#navbar-items").toggleClass("show-nav");
        $(".ri-menu-line").toggleClass("ri-close-line");
    })
    $(".nav-link").click(function() {
        $("#navbar-items").toggleClass("show-nav");
        $(".ri-menu-line").toggleClass("ri-close-line");
    })

    // Navbar Scroll
    window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            $("#topbar").addClass("topbar-scrolled");
            $("#header").addClass("header-scrolled");
        } else {
            $("#topbar").removeClass("topbar-scrolled");
            $("#header").removeClass("header-scrolled");
        }
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            $(".back-to-top").addClass("show");
        } else {
            $(".back-to-top").removeClass("show");
        }
    }

    //Carousel
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 1,
                nav: true
            }
        }
    })
    $(".owl-prev").html('<i class="ri-arrow-left-s-line"></i>');
    $(".owl-next").html('<i class="ri-arrow-right-s-line"></i>');

})