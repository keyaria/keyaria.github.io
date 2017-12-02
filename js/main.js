//SCROLLSPY
$(document).ready(function(){
 $('#content').pushpin({
      top: $('#content').offset().top 
    });
    $('.scrollspy').scrollSpy({
    	scrollOffset: 0
    });

$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
      if (scroll > 54) {
        $(".navbar-fixed").css("background" , "blue");
      }

      else{
          $(".navbar-fixed").css("background" , "white");   
      }
  })
})