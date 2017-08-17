$(function(){
	$('.fancybox').fancybox();
	$('input[type="tel"], input[name="phone"]').inputmask('+7(999)999-99-99');

	


	$('.toanchor').click(function(){
		var target = $($(this).attr('href')).offset().top;
		$('html, body').stop(true,true).animate({
			scrollTop: target
		},500)
		return false;
	});

	$(window).load(function(){
		// $('.last-works__item').width($(window).outerWidth()*.48);

		lastworksMargin();
		var lastWorksSlider = $('.last-works__list').addClass('owl-carousel').owlCarousel();
		lastWorksSlider.find('.active').eq(1).find('.last-works__item').addClass('center');
		lastWorksSlider.on('translated.owl.carousel', function(){
			lastWorksSlider.find('.last-works__item').removeClass('center');
			lastWorksSlider.find('.active').eq(1).find('.last-works__item').addClass('center');
		});
	});

	$(window).resize(function(){
		lastworksMargin();
	});

	$('[data-prop]').each(function(){ 
		var that = $(this); 
		that.hover(function(e){ 
			scrollHover(that); 
		}, function(){ 
			scrollHover.reset(that); 
		}); 
		imgPropForCont(that); 
		$(window).on({
			load:function(){
				imgPropForCont(that); 	
			},
			resize:function(){
				imgPropForCont(that); 		
			}
		})
	}); 

	function lastworksMargin(){
		var ratio = 5;
		if($(window).outerWidth() < 767){
			ratio = 2;
		}
		$('.last-works').css('margin', '0 -'+$('.last-works__item').width()/ratio+'px')
	}

	function imgPropForCont(el){ 
		var currentWidth = $(el).width(); 
		var propRatio = $(el).data('prop').split('x'); 
		propRatio = propRatio[0]/propRatio[1]; 
		$(el).css({ 
			height: currentWidth/propRatio, 
			overflow: 'hidden' 
		}); 
	} 

	function scrollHover(el){ 
		$(el).animate({ 
			scrollTop: el.find('img').height() 
		}, 5000, 'linear'); 
		scrollHover.reset = function(){ 
			$(el).stop(true, true).scrollTop(0); 
		} 
	}

	function techColor(){
		var index = 0;
		var items = $('.technology__list .dtc');
		var lengthItems = $('.technology__list .dtc').length;
		var interval = 300;
		var fillInterval,clearColorInterval;
		

		function fillColor(){
			index = 0;
			var fillInterval = setInterval(function(){
				items.eq(index).find('img').addClass('color');
				if(index == lengthItems){
					clearInterval(fillInterval);
					clearColor();
				}else{
					index+=1;
				}
			}, interval);
		}

		function clearColor(){

			index = 0;
			var clearColorInterval = setInterval(function(){
				items.eq(index).find('img').removeClass('color');
				if(index == lengthItems){
					clearInterval(clearColorInterval);
					fillColor();
				}else{
					index+=1;
				}
			}, interval);
		}
		fillColor();
	}
	techColor();
});
