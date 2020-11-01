// открытие/закрытие бургер меню
$(document).ready(function(){
  $('.header-burger-menu').click(function(event){
    $('.header-burger-menu,.site-navigation').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

// закрытие бургер меню после клика по пункту меню
document.querySelector('.site-navigation-item').onclick = function() {
  document.querySelector('.site-navigation').classList.remove('active');
  document.querySelector('body').classList.remove('lock');
  document.querySelector('.header-burger-menu').classList.remove('active');
};

document.querySelector('.site-navigation-item-2').onclick = function() {
  document.querySelector('.site-navigation').classList.remove('active');
  document.querySelector('body').classList.remove('lock');
  document.querySelector('.header-burger-menu').classList.remove('active');
};

document.querySelector('.site-navigation-item-3').onclick = function() {
  document.querySelector('.site-navigation').classList.remove('active');
  document.querySelector('body').classList.remove('lock');
  document.querySelector('.header-burger-menu').classList.remove('active');
};

document.querySelector('.site-navigation-item-4').onclick = function() {
  document.querySelector('.site-navigation').classList.remove('active');
  document.querySelector('body').classList.remove('lock');
  document.querySelector('.header-burger-menu').classList.remove('active');
};

// прокрутка к якорю при клике по меню
$('.site-navigation-item-1').on('click', function() {
  $('html,body').animate({scrollTop:$('.history').offset().top+"px"},{duration:1E3});
});

$('.site-navigation-item-2').on('click', function() {
  $('html,body').animate({scrollTop:$('.disciplines').offset().top+"px"},{duration:1E3});
});

$('.site-navigation-item-3').on('click', function() {
  $('html,body').animate({scrollTop:$('.facts').offset().top+"px"},{duration:1E3});
});

$('.site-navigation-item-4').on('click', function() {
  $('html,body').animate({scrollTop:$('.contacts').offset().top+"px"},{duration:1E3});
});

// слайдер
$(document).ready(function(){
  $('.slider-list').slick({
    slidesToShow: 3,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    waitForAnimate: true,
    centerMode: true,
    variableWidth: true,
  });
});
