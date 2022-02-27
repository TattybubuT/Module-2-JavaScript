class Restourant {
    constructor(name, type){
        this.name = name;
        this.type = type;
        this.served = 0;
    }

    showInfo(){
        return `${this.name} is a retaurant of ${this.type} meal.`;
    }

    isOpen(){
        let currentHour = new Date().getHours();
        let currentDay = new Date().getDay();

        if (currentDay === 6 || currentDay === 0){
            return `${this.name} is closed`;
        } else {
            if (currentHour > 9 && currentHour < 22){
                return `${this.name} is open`;
            } else {
                return `${this.name} is closed`;
            }
        }
    }

    serve(){
        return (this.served += 1);
    }

    setServed(num) {
        return (this.served += num);
    }

    showTotalServed(){
        return `${this.name} has served ${this.served} people`;
    }
}
const res = Number (prompt('How many people are you serving?'));
const pizza = new Restourant('American Pie Pizza', 'Italian');
console.log(pizza)
console.log(pizza.showInfo());
console.log(pizza.isOpen());
console.log(pizza.serve());
console.log(pizza.setServed(res));
console.log(pizza.showTotalServed());