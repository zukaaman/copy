$(document).ready(function(){
  $('.previews-list').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="previews-button-left" type="button"><span class="visually-hidden">left</span></button>',
    nextArrow: '<button class="previews-button-right" type="button"><span class="visually-hidden">right</span></button>',
    responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
    ]
  });
});
