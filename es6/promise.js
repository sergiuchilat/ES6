let moneyBalance = 55;

const prices = {
   fundation: 50,
   walls: 35,
   roof: 15
};

const buildHome = function () {
    return new Promise((resolve, reject) => {
        if(moneyBalance > 0){
            console.log('Start build');
            resolve();
        }else{
            reject('No money for start');
        }
    });
};

const buildFoundation =  function(){
    return new Promise((resolve, reject) => {
        moneyBalance -= prices.fundation;
        if(moneyBalance > 0){
            console.log('Foundation build');
            resolve();
        }else{
            reject('No money for fundation');
        }
    });
};

const buildWalls =  function(){
    return new Promise((resolve, reject) => {
        moneyBalance -= prices.walls;
        if(moneyBalance > 0){
            resolve('Walls build');
        }else{
            reject('No money for walls');
        }
    });
};

buildHome()
    .then()
    .then(buildFoundation)
    .then(buildWalls)
    .catch((error) => console.log(error))
;