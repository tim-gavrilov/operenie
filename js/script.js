$(document).ready(function(){
  $('.header-burger-menu').click(function(event){
    $('.header-burger-menu,.site-navigation').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

$(document).ready(function(){
  $('.slider-list').slick({
    slidesToShow: 3,
    speed: 1500,
    // autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    waitForAnimate: true,
    centerMode: true,
    variableWidth: true,
  });
});
