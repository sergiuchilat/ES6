class Person{
	constructor(_firstName, _lastName, _age){
		this.firstName = _firstName;
		this.lastName = _lastName;
		this.age = _age;
	}
	
	getAge(){
		return this.age;
	}

	get fullName(){
		return `${this.firstName} ${this.lastName}`;
	}

	set Age(value){
		this.age = value;
	}

}

let person = new Person('Mihai', 'Eminescu', 22);


person.Age = 23; // person.Age(32)
console.log(person);
console.log(person.getAge());

console.log(person.fullName);