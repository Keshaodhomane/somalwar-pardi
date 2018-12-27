$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed: 2000,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });



  $('.topslider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000
  });

  