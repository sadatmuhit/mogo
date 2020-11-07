$(document).ready(function () {
    //onepagenav
    $('.navbar').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function () {
            //I get fired when the animation is starting
        },
        end: function () {
            //I get fired when the animation is ending
        },
        scrollChange: function ($currentListItem) {
            //I get fired when you enter a section and I pass the list item of the section
        }
    });
    $(window).scroll(function () {
        if ($(document).scrollTop() > 450) {
            $("#main_nav").addClass("fixed-top navbg");
        } else {
            $("#main_nav").removeClass("fixed-top navbg");
        }
    });
    //smoothscroll
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 500,
        speedAsDuration: true,
        easing: "Linear"
    });
    //counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    //lightbox
    var glightbox = $('.glightbox a').simpleLightbox({});
    //scrollToTop
    $(function () {
        $('.bck').backToTop({
            iconName: 'fas fa-arrow-up',
            fxName: 'rightToLeft'
        });
    });
});