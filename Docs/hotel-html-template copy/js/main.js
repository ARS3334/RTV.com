(function ($) {
    "use strict";

    // Credit to GPT and Youtube
    $(document).ready(function() {
        setTimeout(function () {
            $('#spinner').removeClass('show');
        }, 1);
    });

    // Credit to GPT and Youtube
    $(document).ready(function() {
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            margin: 25,
            dots: false,
            loop: true,
            nav: true,
            navText: [
                '<i class="bi bi-arrow-left"></i>',
                '<i class="bi bi-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                }
            }
        });
    });

})(jQuery);
