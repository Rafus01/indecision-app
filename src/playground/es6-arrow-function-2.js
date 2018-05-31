//const add = (a, b) => a + b
//console.log(add(55, 1))

const user = {
    name: "Tom",
    cities: ['Phoenix','San Diego', 'New York'],
    printPlacesLived() {
       return this.cities.map((city) => this.name + ' Has lived in ' + city);
        
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};
console.log(multiplier.multiply());