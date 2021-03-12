/*
* to include js file write: `//= include ./path-to-file`
* */

//= include ../../node_modules/jquery/dist/jquery.js ;
//= include ../lib/jquery-nice-select-1.1.0/js/jquery.nice-select.js
//= include ../lib/waypoints/index.js

// CUSTOM SCRIPTS

$(document).ready(function () {
    function hideHeader() {
        $('.header').addClass('header_active');
    }

    //MOBILE MENU
    let nav = $('.header__nav');

    $('.btn-burger').on("click", function (e) {
        e.preventDefault();
        nav.addClass('open');
        jQuery('.backdrop').fadeIn();
        $("body").addClass("modal-open");
    });

    $('.btn-close, .backdrop, .menu__link').click(function (e) {
        e.preventDefault();
        nav.removeClass('open');
        jQuery('.backdrop').fadeOut();
        $("body").removeClass("modal-open");
    });

    //HEADER SCROLL
    //   let  scrollPrev = 0;
    //
    // $(window).scroll(function () {
    //     let scrolled = $(window).scrollTop();
    //
    //     if (scrolled > 100 && scrolled > scrollPrev) {
    //         $('.header').addClass('header_active');
    //     } else {
    //         $('.header').removeClass('header_active');
    //     }
    //     scrollPrev = scrolled;
    // });


     // SMOOTH SCROLL TO ANCHOR
    function smoothScrollToAnchor(selector) {
        $(selector).on('click', function (event) {
            let anchor = $.attr(this, 'href');

            if (anchor.match(/^#/) && anchor !== '#') {
                event.preventDefault();

                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - 0
                }, 1000);
            }
        });
    }

    smoothScrollToAnchor('.menu__link');


    // POPUPS
    $(".popupTrigger").click(function (e) {
        e.preventDefault();
        hideHeader();
        $("#popupOrder").addClass("modal_active");
        $("#overlay").fadeIn();
        $("body").addClass("modal-open");
    });

    $("#closePopup,  #overlay").click(function () {
        $("#popupOrder").removeClass("modal_active");
        $("#overlay").fadeOut();
        $("body").removeClass("modal-open");
    });


    //ACCORDION
    $('#accordion .panel__heading').on('click', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this)
              .siblings('.panel-collapse')
              .slideUp(500);
            $('#accordion .panel__heading .open-panel')
              .removeClass('open-panel:before')
              .addClass('open-panel')
        } else {
            $('#accordion .panel__heading .open-panel')
              .removeClass('open-panel:before')
              .addClass('open-panel');
            $(this)
              .find('open-panel')
              .removeClass('open-panel')
              .addClass('open-panel:before');
            $('#accordion .panel__heading').removeClass('open');
            $(this).addClass('open');
            $('.panel-collapse').slideUp(500);
            $(this)
              .siblings('.panel-collapse')
              .slideDown(500)
        }
    })

    //SWIPER-SLIDER
    let swiperGallery = new Swiper('.gallery__slider', {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: '.gallery .swiper-button-next',
            prevEl: '.gallery .swiper-button-prev',
        },
    });

    let keys = ['Кімната', 'Кухня', ' Передпокій', 'Санвузол', 'Лоджія'];
    let sliderDoClearing = new Swiper('.slider-clearing', {
        navigation: {
            nextEl: '.wrap-slider-clearing .swiper-button-next',
            prevEl: '.wrap-slider-clearing .swiper-button-prev',
        },
        pagination: {
            el: '.slider-clearing__pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<div class="' + className + '">' + (keys[index]) +
                  '</div>';
            },
        },
    });


     // CUSTOM SELECT
    $('.custom-select').niceSelect();

    //READ MORE BTN
    $('.text-hide .open-up').click(function(e) {
        e.preventDefault();
        $('.text-hide .mob-hide').removeClass('mob-hide');
        $(this).hide();
    });

});
