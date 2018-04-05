$(document).ready(function(){
  $('.projects-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="projects-button-left" type="button"><span class="visually-hidden">left</span></button>',
    nextArrow: '<button class="projects-button-right" type="button"><span class="visually-hidden">right</span></button>',
    responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    ]
  });
});
