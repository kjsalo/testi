 $(document).on("pageinit", function(){
	var previousDate = localStorage.getItem('timeStamp');
	var today = new Date();
	var visitCount = localStorage.getItem('useCount');
	if(visitCount == null) {
		visitCount=0;
		}
	$('#vc').text(visitCount);
	$('#ts').text(previousDate);
//	$('button').click(function() {
		localStorage.setItem('timeStamp',today);
		visitCount++;
		localStorage.setItem('useCount', visitCount);
//	});
});