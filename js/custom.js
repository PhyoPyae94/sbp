// show and hide menu

$(document).ready(function() {
    'use strict';
    $(window).scroll(function() {
        'use strict';
        if($(window).scrollTop() < 80) {
            $('.navbar').css ({
                'margin-top': '-100px',
                'opacity': '0'
            });


            $('.navbar-light').css({
                background: 'rgba(59, 59, 59, 0)'
            });
        } else {
            $('.navbar').css ({
                'margin-top': '0px',
                'opacity': '1'
            });
            $('.navbar-light').css({
                background: 'rgba(59, 59, 59, 0.7)'
            });
        }
    });
});




// add bxslider to screen
$(document).ready(function() {
    $('.bxslider').bxSlider({

        slideWidth: 292.5,
        auto: true,
        minSlides: 1,
        maxSlides: 3,
        slideMargin: 50
    });
});