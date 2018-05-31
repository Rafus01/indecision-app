var nameVar = 'Tom';
var nameVar = 'Tim';
console.log ('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log ('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName () {
    let petName = 'Hal';
    return petName;
}

const fullName = 'Tom Jansen';
const firstName;
if (fullName){
    let firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);