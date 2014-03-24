$(function() {
  $('.ImageMenu ul').kwicks({max: 140, duration: 400, easing: 'easeOutQuad'});
    $('div.ImageMenu ul li a').hover(
     function () {
       $(this).children('span').stop(true,true).fadeIn(300);},
     function () {
       $(this).children('span').stop(true,true).fadeOut(300);});
});
