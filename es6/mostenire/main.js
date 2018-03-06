class Transport{
    constructor(options){
        this.transportType = options.transportType;
        this.brand = options.brand;
    }

    pornesteMotor(){
        console.log(this.transportType + ' ' + this.brand + ' A pornit');
    }
    opresteMotorul(){
        console.log(this.transportType + ' ' + this.brand + ' opreste motorul');
    }

    seMisca(){

    }
}

class Terestru extends Transport{

}

class Aerian extends Transport{
    seMisca(){
        this.zboara();
    }
}

class Acvatic extends Transport{

}

class Automobil extends Terestru{

    seMisca(){
        console.log(`${this.transportType} Se misca`);
    }
}

class Avion extends Aerian{
    decoleaza(){
        console.log(this.transportType + ' Decoleaza');
    }

    zboara(){
        console.log(this.transportType + ' Zboara');
    }

    aterizeaza(){
        console.log(this.transportType + ' Aterizeaza');
    }
}


let auto = new Automobil({
    transportType: 'Automobil',
    brand: 'Mercedes'
});

//Automobilul porneste motorul
auto.pornesteMotor();
//Automobilul se misca
auto.seMisca();
//Automobilul opreste motorul
auto.opresteMotorul();


let avion = new Avion({
    transportType: 'Avion',
    brand: 'Boeing'
});

//Avionul porneste motoarele
avion.pornesteMotor();
//Avionul decoleaza
avion.decoleaza();
//Avionul zboara
avion.seMisca();
//Avionul aterizeaza
avion.aterizeaza();
//Avionul opresete motorul
avion.opresteMotorul();

let aerian = new Aerian({});

aerian.seMisca();