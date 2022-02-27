class Cars {
    constructor(brand, year, power, color){
        this.brand = brand;
        this.year = year;
        this.power = power;
        this.color = color;
    }
    showInfo(){
        return `
        Brand: ${this.brand};
        Year: ${this.year};
        Power: ${this.power};
        Color: ${this.color}`;
    }
}

class ElectroCars extends Cars {
    constructor(brand, year, power, color, battery){
        super(brand, year, power, color);
        this.battery = battery;
    }
    showInfo(){
        return `
        Brand: ${this.brand};
        Year: ${this.year};
        Power: ${this.power};
        Color: ${this.color}
        Battery: ${this.battery}`;
    }

    promote(){
        return `${this.brand} is a new model of ${this.year}. Battery is ${this.battery} and power is ${this.power}.`;
    }
}
const Tesla = new Cars('Tesla', '2015', '200', 'black');
const electrocars = new ElectroCars('Tesla', '2020', '250', 'red', '100');  
console.log(Tesla.showInfo());
console.log(electrocars.promote());
console.log(electrocars.showInfo());