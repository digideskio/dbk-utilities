window.addEventListener( 'load', utils );

function utils () {
	addProgressCounter();
};

function addProgressCounter() {
	var progresses = docoment.getElementsByTagName('span').getElementsByClassName('counter');

	for (var i = 0; i < progresses; ++i) {
		var upperBound = parseInt(progresses[i].innerHTML);
		if (isNaN(upperBound)) continue;
		showCounter(progresses[i], upperBound);
	}
};

function showCounter(element, upperBound) {
	for (var i = 0; i < upperBound; ++i) {
		(function(i){
			window.setTimeout(function(){
				element.innerHTML = i;
			}, i * 500);
		}(i));
	};
};