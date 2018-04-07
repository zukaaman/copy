$(document).ready(function(){
  $('.externals-slider').slick({
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    prevArrow: '<button class="externals-button-left" type="button"><span class="visually-hidden">left</span></button>',
    nextArrow: '<button class="externals-button-right" type="button"><span class="visually-hidden">right</span></button>',
    responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
    ]
  });
});
