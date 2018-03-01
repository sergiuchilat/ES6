let m = [1, 4, 6, 7, 8, 9, 10];

let Suma = 0;
for (let i = 0; i < m.length; i++) {
	Suma += m[i];
};

console.log('Suma(for) = ' + Suma);

Suma = 0;
let i = 0; 
while (i < m.length) {
	Suma += m[i];
	i++;
};
console.log(Suma);
Suma = 0;
i = 0; 
do{
	Suma += m[i];
	i++;
}while (i < m.length);

console.log(`Suma (DO WHILE) = ${Suma} Some text`);


/********/


for(let key in m){
	console.log(m[key]);
}

for(let element of m){
	console.log(element);
}

m.forEach(function(element, index){
	console.log(element, index);
});