$(document).ready(function () {

    $('#banner').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        URLhashListener: true,
        startPosition: 'URLHash',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000:{
                items:1
            }
        }
    })
});

$(document).ready(function () {

    $('#review').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        URLhashListener: true,
        startPosition: 'URLHash',
        responsive: {
            0: {
                items: 2
            }   
        }
    })
});
