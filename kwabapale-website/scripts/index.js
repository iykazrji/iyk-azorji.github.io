$(document).ready(function(){
	$(window).load(function(e){
       setTimeout(function(e){ preloader_img.fadeOut(300);
    }, 1000);
        setTimeout(function(e){ preloader.css({
                'width': '0px',
                'transition':'1s'
        });
    }, 2000);
});
	$('.slider-holder').unslider({ 
								autoplay: true,
								delay: 4000,
								dots: false
							});
	$('.unslider-arrow').empty();

});