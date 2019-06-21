$(document).ready(function(){
 
 $(".topicture1").click(function(){
        $("#carouseloverlay, #myCarousel").carousel(0);
    });
 $(".topicture2").click(function(){
        $("#carouseloverlay, #myCarousel").carousel(1);
    });
 $(".topicture3").click(function(){
        $("#carouseloverlay, #myCarousel").carousel(2);
    });
 
 
$('.item').click(function(){
 
$('#overlay').fadeIn("slow");
 
});
 
$('.btn_close').click(function(){
 
$('#overlay').fadeOut("slow");
 
});
 
});
