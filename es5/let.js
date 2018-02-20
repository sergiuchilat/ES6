'use strict';

var divElements = document.querySelectorAll('div');

for (var i = 0; i <= divElements.length - 1; i++) {
	var divElement = divElements[i];

	divElement.innerHTML = i;
}

console.log(divElement);