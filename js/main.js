//SCROLLSPY
$(document).ready(function(){
 $('#content').pushpin({
      top: $('#content').offset().top 
    });
    $('.scrollspy').scrollSpy({
    	scrollOffset: 0
    });
window.sr = ScrollReveal();
sr.reveal('#AboutMe')
sr.reveal('#Portfolio')
});
/*$(document).scroll(function(){
  var a = $(".about-me").offset().top;
  a = 600;
  var b = $(".about-me").offset().top;
  b= 1450;
  console.log($(this).scrollTop());
    if($(this).scrollTop() > a)
    {   
        $('.nav-wrapper').css({"background-color":"white" });
       
       $('.nav-wrapper').css({"opacity":"50%" });


    } else {
       $('.nav-wrapper').css({"background":"transparent"});
    }
    if($(this).scrollTop() > b) {
      $('.nav-wrapper').css({"background-color":"#fafafa" });

    }
});
*/

$(".dropdown-trigger").dropdown();
        