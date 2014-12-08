
	$(document).ready($m = function(){
		$('body').blurjs({
			draggable: false,
			overlay: '',
			radius:1
		});
		$('.top-bar').blurjs({
			draggable: true,
			overlay: '',
			radius: .5
		});
		$('.main-content').blurjs({
			draggable: false,
			overlay: '',
			radius: .0
		});
		$('.footer').blurjs({
			draggable: true,
			overlay: '',
			radius: .5
		});
		
	});