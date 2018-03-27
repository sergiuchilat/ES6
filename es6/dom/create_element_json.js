fetch('data/countries.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(countries) {
        createCountriesSelect(countries);
    });


fetch('data/cities.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(cities) {
        fillCitiesSelect(cities);
    });


function createCountriesSelect(countries){
    let selectElement = document.createElement('select');

    for (let i = 0 ; i < countries.length ; i++){
        let optionElement = document.createElement('option');
        optionElement.innerText = countries[i].name;
        optionElement.value = countries[i].code;
        selectElement.appendChild(optionElement);
    }
    document.body.appendChild(selectElement);
}

function fillCitiesSelect(cities){
    let selectElement = document.getElementById('cities');

    for (let i = 0 ; i < cities.length ; i++){
        let optionElement = document.createElement('option');
        optionElement.innerText = cities[i].name;
        optionElement.value = cities[i].code;
        selectElement.appendChild(optionElement);
    }

    document.body.appendChild(selectElement);
}