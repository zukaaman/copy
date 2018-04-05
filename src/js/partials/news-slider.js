$(document).ready(function(){
  $('.news-list-slider').slick({
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    prevArrow: '<button class="news-button-left" type="button"><span class="visually-hidden">left</span></button>',
    nextArrow: '<button class="news-button-right" type="button"><span class="visually-hidden">right</span></button>'
  });
});
