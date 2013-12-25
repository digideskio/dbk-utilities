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
		if (isNaN(upperBound)) continue;
		duration = isNaN(duration) ? 2300 : duration;
		showCounter(progresses[i], upperBound, duration);
	}
};

function showCounter(element, upperBound, duration) {
	var interval = Math.round(duration / upperBound);
	for (var i = 0; i <= upperBound; ++i) {
		(function(i){
			window.setTimeout(function(){
				element.innerHTML = i;
			}, i * interval);
		}(i));
	};
};