document.getElementById('firstInput').value = 'This is a input value';


let secondInput = document.createElement('input');
secondInput.setAttribute('value', 'This is second input');
secondInput.setAttribute('id', 'secondInput');
document.body.appendChild(secondInput);

console.log('======');


let selectElement = document.createElement('select');

let optionElement = document.createElement('option');
optionElement.innerText = '1';
optionElement.value = 1;
selectElement.appendChild(optionElement);


document.body.insertBefore(selectElement, secondInput);


/*
* */

let selectElement2 = document.createElement('select');


for (let i = 1; i <= 10 ; i++){
    optionElement = document.createElement('option');
    optionElement.innerText = i;
    optionElement.value = i;
    selectElement2.appendChild(optionElement);
}



document.body.insertBefore(selectElement2, secondInput);

