

let divElements = document.querySelectorAll('div');


for (let i = 0; i <= divElements.length - 1; i++) {
	var divElement = divElements[i];

	divElement.innerHTML = i;
}

console.log(divElement);