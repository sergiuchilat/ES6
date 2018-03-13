class Person{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
}

let p = new Person('Jonh', 123);

console.log(p);

let pJSON = JSON.stringify(p);

console.log(pJSON);

let person = JSON.parse(pJSON);
console.log(person);


/*-------*/

let JSONStringPC = `{
	"processor": {
		"brand": "Intel",
		"model": "Core i7",
		"frequency": "3.4 GHz"
	}
}`;

console.log(JSONStringPC);

let PC = JSON.parse(JSONStringPC);
console.log(PC);


/***************/
