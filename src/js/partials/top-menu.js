$(document).ready(function(){
  $(function(){
    $(window).scroll(function() {
      if($(this).scrollTop() >= 153) {
        $('.header-bottom').addClass('sticky');
      }
      else{
        $('.header-bottom').removeClass('sticky');
      }
    });
  });
});
