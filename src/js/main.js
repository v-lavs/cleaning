/*
* to include js file write: `//= include ./path-to-file`
* */

//= include ../../node_modules/jquery/dist/jquery.js ;

//= include ../lib/jquery-nice-select-1.1.0/js/jquery.nice-select.js

// CUSTOM SCRIPTS

$(document).ready(function () {
  function hideHeader () {
    $('.header').addClass('header_active')
  }

  //MOBILE MENU
  let nav = $('.header__nav')

  $('.btn-burger').on('click', function (e) {
    e.preventDefault()
    nav.addClass('open')
    jQuery('.backdrop').fadeIn()
    $('body').addClass('modal-open')

  })

  $('.btn-close, .backdrop, .menu__link').click(function (e) {
    e.preventDefault()
    nav.removeClass('open')
    jQuery('.backdrop').fadeOut()
    $('body').removeClass('modal-open')

  })

  // HEADER SCROLL
  let scrollPrev = 0

  $(window).scroll(function () {
    let scrolled = $(window).scrollTop()

    if (scrolled > 100 && scrolled > scrollPrev) {
      $('.header').addClass('header_active')
    } else {
      $('.header').removeClass('header_active')
    }
    scrollPrev = scrolled
  })

  // SMOOTH SCROLL TO ANCHOR
  function smoothScrollToAnchor (selector) {
    $(selector).on('click', function (event) {
      let anchor = $.attr(this, 'href')

      if (anchor.match(/^#/) && anchor !== '#') {
        event.preventDefault()

        $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top - 0
        }, 1500)
      }
    })
  }

  smoothScrollToAnchor('.menu__link')

  // POPUPS ORDERS
  $('.popupTrigger2').click(function (e) {
    e.preventDefault();
    $('#popupOrder').addClass('modal_active');
    $('.backdrop').fadeIn();
    $('body').addClass('modal-open');
  })

  $('#closePopup,  #overlay').click(function () {
    $('#popupOrder').removeClass('modal_active');
    $('.backdrop').fadeOut();
    $('body').removeClass('modal-open');
  });

  // POPUPS PHONE
  $('.popup-trigger-phone').click(function (e) {
    e.preventDefault();
    $('#popupPhone').addClass('modal_active');
    $('.backdrop').fadeIn();
    $('body').addClass('modal-open');
  })

  $('#closePopup,  #overlay').click(function () {
    $('#popupPhone').removeClass('modal_active');
    $('.backdrop').fadeOut();
    $('body').removeClass('modal-open');
  });

  // POPUPS QUESRIONS
  $('.popup-trigger-questions').click(function (e) {
    e.preventDefault();
    $('#popupQuestions').addClass('modal_active');
    $('.backdrop').fadeIn();
    $('body').addClass('modal-open');
  })

  $('#closePopup,  #overlay').click(function () {
    $('#popupQuestions').removeClass('modal_active');
    $('.backdrop').fadeOut();
    $('body').removeClass('modal-open');
  });
// POPUPS CALCULATOR
  $('.popup-trigger-payment').click(function (e) {
    e.preventDefault();
    $('#popupPayment').addClass('modal_active');
    $('.backdrop').fadeIn();
    $('body').addClass('modal-open');
  })

  $('#closePopup,  #overlay').click(function () {
    $('#popupPayment').removeClass('modal_active');
    $('.backdrop').fadeOut();
    $('body').removeClass('modal-open');
  });
  //POPUP SERVICES
  var $contentBlock = $('#popupMoreDetails .modal__content');

  $(".popupTrigger").click(function (e) {
    e.preventDefault();
    console.log(12343)
    var theme = $(this).data('theme');
    var contentId = $(this).data('content-id');
    var content = $('#' + contentId).html();

    $contentBlock.html(content);

    $("#popupMoreDetails").addClass(theme).addClass('modal_active');
    $(".backdrop").fadeIn();
    $('body').addClass('modal-open');
  });

  $("#closePopup, .backdrop").click(function (e) {
    e.preventDefault();
    $("#popupMoreDetails").removeClass('modal_active')
    $(".backdrop").fadeOut();
    $contentBlock.html();
    $('body').removeClass('modal-open');
  })


  //ACCORDION
  $('#accordion .panel__heading').on('click', function () {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open')
      $(this)
        .siblings('.panel-collapse')
        .slideUp(500)
      $('#accordion .panel__heading .open-panel')
        .removeClass('open-panel:before')
        .addClass('open-panel')
    } else {
      $('#accordion .panel__heading .open-panel')
        .removeClass('open-panel:before')
        .addClass('open-panel')
      $(this)
        .find('open-panel')
        .removeClass('open-panel')
        .addClass('open-panel:before')
      $('#accordion .panel__heading').removeClass('open')
      $(this).addClass('open')
      $('.panel-collapse').slideUp(500)
      $(this)
        .siblings('.panel-collapse')
        .slideDown(500)
    }
  })

  //SWIPER-SLIDER
  let swiperGallery = new Swiper('.gallery__slider', {
    speed: 1000,
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 2,
    navigation: {
      nextEl: '.gallery .swiper-button-next',
      prevEl: '.gallery .swiper-button-prev',
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
        slidesPerGroup: 2,
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 3,
      },
    }
  })

//SWIPER-SLIDER
  let sliderDoClearing = new Swiper('.slider-clearing', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    speed: 1000,
  })

  $('.slider-clearing .swiper-pagination-bullet').click(function (e) {
    e.preventDefault()
    const index = $(e.target).index()
    $('.slider-clearing .swiper-pagination-bullet').removeClass('swiper-pagination-bullet-active')
    $(e.target).addClass('swiper-pagination-bullet-active')

    sliderDoClearing.slideTo(index)
  })

  //HIDE CARDS
  let mobHideSevices = true;
  const showServicesBtn = $('#show-all-services');
  showServicesBtn.text('Переглянути всі послуги');

  showServicesBtn.click(function (e) {
    e.preventDefault();
    $('.services .services__item:nth-child(n+4)').slideToggle(500);
    const text = mobHideSevices ? 'Переглянути всі послуги' : 'Згорнути послуги';
    mobHideSevices = !mobHideSevices;
    $(this).text(text);
  })

  // CUSTOM SELECT

  $('.custom-select').niceSelect();

//  BTN TO TOP
  var myBtn = $('#myBtn');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 600) {
      myBtn.addClass('show');
    } else {
      myBtn.removeClass('show');
    }
  });
  myBtn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, '600');
  });
//BAGUETTE BOX
  window.addEventListener('load', function() {
    baguetteBox.run('.gallery', {
      buttons: 'auto', // arrows navigation
      noScrollbars: false,
      bodyClass: 'baguetteBox-open',
      titleTag: false,
      async: false,
      preload: 2,
      animation: 'fadeIn',
      overlayBackgroundColor: 'rgba (1,1,1, .25)'
    });
  });
})
