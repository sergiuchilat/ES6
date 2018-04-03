loadCountries();





function loadCountries() {
    fetch('data/countries.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(countries) {
            createCountriesSelect(countries);
            let selectCountries = document.getElementById('countries');
            selectCountries.addEventListener('change', function(){
                loadCities(selectCountries.value)
            });
        });
}

function loadCities(countryCode){

    fetch('data/cities.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(cities) {
            fillCitiesSelect(cities, countryCode);
        });
}


function createCountriesSelect(countries){
    let selectElement = document.getElementById('countries');

    for (let i = 0 ; i < countries.length ; i++){
        let optionElement = document.createElement('option');
        optionElement.innerText = countries[i].name;
        optionElement.value = countries[i].code;
        selectElement.appendChild(optionElement);
    }
}

function fillCitiesSelect(cities, countryCode){
    let selectElement = document.getElementById('cities');

    while (selectElement.firstChild) {
        selectElement.removeChild(selectElement.firstChild);
    }

    for (let i = 0 ; i < cities.length ; i++){
        if(countryCode === cities[i].country_code){
            let optionElement = document.createElement('option');
            optionElement.innerText = cities[i].name;
            optionElement.value = cities[i].code;
            selectElement.appendChild(optionElement);
        }
    }
}