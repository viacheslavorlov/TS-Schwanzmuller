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