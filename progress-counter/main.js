window.addEventListener( 'load', utils );

function utils () {
	addProgressCounter();
};

function addProgressCounter() {
	var progresses = [],
		spans = document.getElementsByTagName('span');

	for (var i = 0; i < spans.length; ++i)
		if (spans[i].getElementsByClassName('counter'))
			progresses.push(spans[i]);

	// console.log(spans);
	// console.log(progresses);
	for (var i = 0; i < progresses.length; ++i) {
		var upperBound = parseInt(progresses[i].innerHTML);
		console.log(upperBound)
		if (isNaN(upperBound)) continue;
		showCounter(progresses[i], upperBound);
	}
};

function showCounter(element, upperBound) {
	for (var i = 0; i <= upperBound; ++i) {
		(function(i){
			window.setTimeout(function(){
				element.innerHTML = i;
			}, i * 100);
		}(i));
	};
};