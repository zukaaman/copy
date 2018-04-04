$(document).ready(function(){
  $('.info-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="info-button-left" type="button"><span class="visually-hidden">left</span></button>',
    nextArrow: '<button class="info-button-right" type="button"><span class="visually-hidden">right</span></button>'
  });
});
