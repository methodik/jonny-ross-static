var  openSpan = '<span class="red">'
var  closeSpan = '</span>';

$('article h2').each(function() {
	var niceText = $(this).text()
	
	// make array out of words & get length of array
	niceText = niceText.split(' ');
	spanOpenPos = niceText.length - 2;

	// add closing span to end of array and before the pelnutimate word
	niceText.push(closeSpan);
	niceText.splice( spanOpenPos, 0, openSpan );

	// make string again & add to DOM
	niceText = niceText.join(' ');
	$(this).html( niceText );

})


