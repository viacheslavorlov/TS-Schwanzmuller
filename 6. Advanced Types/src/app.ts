type Admin = {
    name: string;
    privileges: string[];
};

type Employe = {
    name: string;
    startDate: Date;
}

type ElevatedEmploye = Admin & Employe;

const e1: ElevatedEmploye = {
    name: 'Slava',
    privileges: ['create', 'admin'],
    startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

console.log(add(40, 2), add(40, '2'))

type UnknownEmployee = Employe | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Priveleges: ' + emp.privileges.join(', '))
    }
    if ('startDate' in emp) {
        console.log('Start date: ' + emp.startDate)
    }
}

printEmployeeInfo(e1);
printEmployeeInfo({name: 'Anna', startDate: new Date()})

class Carr {
    drive () {
        console.log('drive!!!')
    }
}

class Truck {
    drive() {
        console.log('Drive with cargo')
    }
    loadCargo(amount: number) {
        console.log('loading!!! ' + amount)
    }
}

type Veichel = Carr | Truck;

const v1 = new Carr();
const v2 = new Truck();

function useVehicle(vehicle: Veichel) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(10)
    }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
    }
    console.log('speed is ' +  speed)
}

moveAnimal({type: "bird", flyingSpeed: 20});
moveAnimal({type: "horse", runningSpeed: 15});

// DOM manipulation
//* first variant
//* const userInput = <HTMLInputElement>document.getElementById("message")!;
const userInput = document.getElementById("message")! as HTMLInputElement;

userInput.value = 'hi!!!!'


//INDEX PROPERTIES

interface ErrorContainer {
    [prop: string]: string;
}

const errorBug: ErrorContainer = {
    1: 'first property',
    email: "not found"
}

//* FUNCTION OVERLOADS

function add2(a: number, b: number): number;
function add2(a: string, b: string): string;
function add2(a: string, b: number): string;
function add2(a: string, b: number): string;

function add2(a: Combinable, b:Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = add2('Max', ' Slava');

result.split(' ');

//* OPTIONAL CHAINING

const fetchedData = {
    id: 'ui',
    name: 'Slava',
    // job: {
    //     title: 'CEO',
    //     description: 'startapp'
    // }
}

// console.log(fetchedData?.job?.title)

//* NULLISH COALESCING

const userInput2 = null;
// ?? - nullish coalescing
const storedData = userInput2 ?? 'Default'

console.log(storedData);

