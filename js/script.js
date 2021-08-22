function ibg(){
	let ibg = document.querySelectorAll('.ibg');
	for(var i=0;i<ibg.length;i++){
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}

}
ibg();





$(document).ready(function(){
	$('.help-slider').slick({
		slidesToShow: 3,
		variableWidth: true,
		infinite:false,
		arrows:false,
		swipeToSlide: true,
		touchThreshold:10,
		responsive:[{
			breakpoint:1200,
			settings:{
				slidesToShow:1,
			}
		}]

	});
	$('.animal-slider').slick({
		slidesToShow:8,
		arrows:false,
		slidesToScroll: 1,
		touchThreshold:10,
		waitForAnimate:false,
		swipeToSlide: true,
		responsive:[{
			breakpoint:790,
			settings:{
				slidesToShow:4,
			}
		}]
	})



	

		

		
	
	

	




	
})
