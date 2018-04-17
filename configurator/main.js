import Phone from '/es6/configurator/samsungs9plus.js';

console.log(Phone);


loadColors(Phone);
loadRam(Phone);
loadStorage(Phone);
calculatePrice(Phone);

handleChangeOptions();



function calculatePrice(Phone){
    let price = Phone.base_price;

    let selectColorElement = document.getElementById('color');
    price += parseInt(selectColorElement.value);

    let selectRamElement = document.getElementById('ram');
    price += parseInt(selectRamElement.value);

    let selectStorageElement = document.getElementById('storage');
    price += parseInt(selectStorageElement.value);

    document.getElementById('total-price').innerHTML = price;
}

function loadColors(Phone){
    let selectElement = document.getElementById('color');
    for (let i = 0 ; i < Phone.colors.length ; i++){
        let optionElement = document.createElement('option');
        optionElement.innerText = Phone.colors[i].color;
        optionElement.value = Phone.colors[i].add_price;
        selectElement.appendChild(optionElement);
    }
}

function loadRam(Phone){
    let selectElement = document.getElementById('ram');
    for (let i = 0 ; i < Phone.ram.length ; i++){
        let optionElement = document.createElement('option');
        optionElement.innerText = Phone.ram[i].volume;
        optionElement.value = Phone.ram[i].add_price;
        selectElement.appendChild(optionElement);
    }
}

function loadStorage(Phone){
    let selectElement = document.getElementById('storage');
    for (let i = 0 ; i < Phone.storage.length ; i++){
        let optionElement = document.createElement('option');
        optionElement.innerText = Phone.storage[i].volume;
        optionElement.value = Phone.storage[i].add_price;
        selectElement.appendChild(optionElement);
    }
}


function handleChangeOptions(){
    let selectColorElement = document.getElementById('color');
    selectColorElement.addEventListener('change', function(){
        calculatePrice(Phone);
    });

    let selectRamElement = document.getElementById('ram');
    selectRamElement.addEventListener('change', function(){
        calculatePrice(Phone);
    });

    let selectStorageElement = document.getElementById('storage');
    selectStorageElement.addEventListener('change', function(){
        calculatePrice(Phone);
    });
}