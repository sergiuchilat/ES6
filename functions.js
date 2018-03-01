/*Functii cu parametri impliciti*/
function Suma3(x = 0, y = 0, z = 0){
	return x + y + z;
}

console.log(Suma3(1, 2, 3));

console.log(Suma3(1, 2));

console.log(Suma3(1));

console.log(Suma3());