//SCROLLSPY
$(document).ready(function(){
 $('#content').pushpin({
      top: $('#content').offset().top 
    });
    $('.scrollspy').scrollSpy({
    	scrollOffset: 0
    });


});
$(document).scroll(function(){
  var a = $(".about-me").offset().top;
  a = 600;
  console.log($(this).scrollTop());
    if($(this).scrollTop() > a)
    {   
        
       $('.nav-wrapper').css({"background-color":"#673ab7"; });


    } else {
       $('.nav-wrapper').css({"background":"transparent"});
    }
});