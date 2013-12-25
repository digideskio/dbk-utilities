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

	for (var i = 0; i < progresses.length; ++i) {
		
		var upperBound = parseInt(progresses[i].innerHTML);
		var duration = parseInt(progresses[i].getAttribute('data-duration'));
		var from = parseInt(progresses[i].getAttribute('data-from'));
		
		if (isNaN(upperBound)) continue;

		duration = isNaN(duration) ? 2300 : duration;
		from = isNaN(from) ? 0 : from;

		showCounter(progresses[i], from, upperBound, duration);
	}
};

function showCounter(element, from, upperBound, duration) {

	var interval = Math.round(duration / (upperBound - from));

	for (var i = from, j = 0; i <= upperBound; ++i, ++j) {
		(function(i, j){
			window.setTimeout(function(){
				element.innerHTML = i;
			}, j * interval);
		}(i, j));
	};
};