(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 50,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    // Testimonial carousel

    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: true,
        dots: true,
        loop: true,
        margin: 0,
        nav: true,
        navText: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    // Fact Counter

    $(document).ready(function () {
        $('.counter-value').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: jQuery.easeInQuad,
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });


    // Navigation active state on scroll

    var nav_sections = $('section');
    var main_nav = $('.navbar-nav, .mobile-nav');
    var main_nav_height = $('#navbar').outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        nav_sections.each(function () {
            var top = $(this).offset().top - main_nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                main_nav.find('a').removeClass('active');
                main_nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });


    // Toggle features
    $(document).ready(function () {
        $(".toggle-button").on("click", function () {
            var id = $(this).attr("data-id");

            $(".toggle-button").removeClass("active");
            $(this).addClass("active");

            $(".feature-desc").addClass("d-none");
            $(id).removeClass("d-none");
        });
    });
    //Autoplay features (like a carousel)
    $(document).ready(function () {
        setInterval(function () {
            if ($(".toggle-button.active").next().length) {
                $(".toggle-button.active").next().click();
            } else {
                $("#first-toggle-button").click();
            }
        }, 4000);
    });



})(jQuery);

