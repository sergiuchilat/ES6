let request = new XMLHttpRequest();
request.open("GET", "data/PC.json");
request.send();

request.onreadystatechange = function(){
	if(this.readyState === 4){
		console.log(this.response);
		let PC = JSON.parse(this.response);
		document.getElementById("pc").innerHTML = 
			PC.processor.brand + ' ' + 
			PC.processor.model + ' ' +
			PC.processor.frequency
		;
	}
}