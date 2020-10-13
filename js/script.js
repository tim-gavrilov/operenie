$(document).ready(function(){
  $('.header-burger-menu').click(function(event){
    $('.header-burger-menu,.site-navigation').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
