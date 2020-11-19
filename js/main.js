(function ($) {
 "use strict";
 
/*--
	Mobile Menu
------------------------*/
$('.mobile-menu nav').meanmenu({
	meanScreenWidth: "990",
	meanMenuContainer: ".mobile-menu",
	onePage: true,
});
 $('[data-toggle="tooltip"]').tooltip();
 /*----- main slider -----*/	
 $('#mainSlider').nivoSlider({
	directionNav: false,
	animSpeed: 500,
	slices: 18,
	pauseTime:100000,
	pauseOnHover: false,
	controlNav: true,	
	prevText: '<i class="fa fa-angle-left nivo-prev-icon"></i>',
	nextText: '<i class="fa fa-angle-right nivo-next-icon"></i>'
 });

			//topfixed nav  page
				  $('.nav_areas').scrollToFixed({
					preFixed: function() { $(this).find('.nav_area').addClass('prefix'); },
					postFixed: function() { $(this).find('.nav_area').addClass('postfix').removeClass('prefix'); }
				}); 


/*--
	One Page Nav
-----------------------------------*/
$('.navid').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 1000,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
});
	/*--
	Smooth Scroll
-----------------------------------*/
$('.menu ul li a').on('click', function(e) {
	e.preventDefault();
	var link = this;
	$.smoothScroll({
	  offset: -80,
	  scrollTarget: link.hash
	});
});	
/*--------------------
	testimonial 
-----------------------------------*/
  $(".testimonial_list").owlCarousel({
      autoPlay: true, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 1,
	  transitionStyle : "backSlide",     /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });
/*--------------------
	Blog 
-----------------------------------*/
  $(".blog_carousel").owlCarousel({
      autoPlay: false, 
	  slideSpeed:1000,
	  pagination:false,
	  navigation:true,	  
      items :4,
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,4],
	  itemsDesktopSmall : [980,4],
	  itemsTablet: [768,2],
	  itemsMobile : [479,1],
  });
  /*--------------------
	team 
-----------------------------------*/
  $(".team_carousel").owlCarousel({
      autoPlay: false, 
	  slideSpeed:1000,
	  pagination:false,
	  navigation:false,	  
      items :4,
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,4],
	  itemsDesktopSmall : [980,4],
	  itemsTablet: [768,2],
	  itemsMobile : [479,1],
  });

  /*---------------------
	button
	--------------------- */
  $(window).ready(function(){
$(".boton").wrapInner('<div class=botontext></div>');
    
    $(".botontext").clone().appendTo( $(".boton") );
    
    $(".boton").append('<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>');
    
    $(".twist").css("width", "25%").css("width", "+=3px");
});
	/*---------------------
	counterUp
	--------------------- */	
	$('.countr_text h1').counterUp({
		delay: 10,
		time: 1000
	});
	
	
	/*---------------------
	mixItUp
	--------------------- */	
	$('.prot_wrap').mixItUp();
	/*---------------------
	scrollUp
	--------------------- */
	$.scrollUp({
		scrollName: 'scrollUp',      // Element ID
		scrollDistance: 300,         // Distance from top/bottom before showing element (px)
		scrollFrom: 'top',           // 'top' or 'bottom'
		scrollSpeed: 1000,            // Speed back to top (ms)
		easingType: 'linear',       
		animation: 'fade',           // Fade, slide, none
		animationSpeed: 200,         // Animation speed (ms)
		scrollText: '<i class="fa fa-angle-up"></i>', // Text for element, can contain HTML
		zIndex: 2147483647           // Z-Index for the overlay
	});

    /* custom settings */
    $('.venobox').venobox({
        framewidth: '600px',        // default: ''
        frameheight: '500px',       // default: ''
        border: '5px',             // default: '0'
        bgcolor: '#5dff5e',         // default: '#fff'
        titleattr: 'data-title',    // default: 'title'
        numeratio: true,            // default: false
        infinigall: true            // default: false
    });
	
	
	
	new WOW().init();	
	
})(jQuery);    
