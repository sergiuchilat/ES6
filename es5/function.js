"use strict";

function suma(a, b, c) {
	return a + b + c;
}

console.log(suma(2, 3, 4));

/**/

var numbers = [1, 5, 9, 11];

console.log(suma(numbers[0], numbers[1], numbers[2]));
console.log(suma.apply(undefined, numbers));