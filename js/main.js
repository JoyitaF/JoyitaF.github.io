(function ($) {
    "use strict";

    // Initiate the wowjs
    new WOW().init();
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    

    // Typed Initiate
    if ($('.profile .profile-text h2').length == 1) {
        var typed_strings = $('.profile .profile-text .typed-text').text();
        var typed = new Typed('.profile .profile-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 150,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
})(jQuery);

