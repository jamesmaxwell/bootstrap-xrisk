$(function(){
	$('#tooltip').tooltip({
		html:true,
		placement: 'right',
		title: 'tool tip show',
		delay: {show: 200, hide: 100},
		container: 'body'
	});
	
	$('#popover').popover();
	
	var isInputSupported = 'placeholder' in document.createElement('input');
	if(!isInputSupported)
		$('input,textarea').placeholder();
	
	var inter = setInterval(function(){
		var pw = $('#pbar1').parent().width();
		var w = $('#pbar1').width();
		if(w <= pw){
			$('#pbar1').width((w+50 > pw) ? pw : w+50);
		}else{
			clearInterval(inter);
		}
	},1000);
});
