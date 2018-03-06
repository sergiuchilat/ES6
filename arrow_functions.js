function add(a, b){
	return a + b;
}

let diff = (a, b) => a - b;

console.log(add(2, 3));
console.log(diff(2, 3));




let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let squares = [];

for (let i = 0; i < numbers.length ; i++){
	squares.push(numbers[i] * numbers[i]);
}

console.log(squares);

squares = numbers.map(n => n * n);

console.log(squares);