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

   
    
    
function switchStyleSheets(theme){
  $('link[title="theme"]').attr('href', theme);
  }

$(document).ready(function(){
    
    
    $('#black').click(function(event){
        event.preventDefault();
        switchStyleSheets(
            'css/black.css'
        );
    });
    
            
    $('#default').click(function(event){
        event.preventDefault();
        switchStyleSheets(
            'css/green.css'        
        );
    });
    
    
    
    $('#orange').click(function(event){
        event.preventDefault();
        switchStyleSheets(
            'css/orange.css'        
        );
    });
    
    
    
    
    $('#green').click(function(event){
        event.preventDefault();
        switchStyleSheets(
            'css/default.css'
        );
    });
    
});
        
    
    
    /* this changes font size of */

    var originalSize = $('div').css('font-size');
    // reset
    $(".resetMe").click(function(){
    $('div').css('font-size', originalSize); 

    });

    // Increase Font Size
    $(".increase").click(function(){
    var currentSize = $('div').css('font-size');
    var currentSize = parseFloat(currentSize)*1.2;
    $('div').css('font-size', currentSize);

    return false;
    });

    // Decrease Font Size
    $(".decrease").click(function(){
    var currentFontSize = $('div').css('font-size');
    var currentSize = $('div').css('font-size');
    var currentSize = parseFloat(currentSize)*0.8;
    $('div').css('font-size', currentSize);

    return false;
    });
