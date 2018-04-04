$(document).ready(function(){
  $('.externals-slider').slick({
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    prevArrow: '<button class="externals-button-left" type="button"><span class="visually-hidden">left</span></button>',
    nextArrow: '<button class="externals-button-right" type="button"><span class="visually-hidden">right</span></button>'
  });
});
