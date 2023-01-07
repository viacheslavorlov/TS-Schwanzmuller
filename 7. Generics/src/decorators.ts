//* Decorators

function Logger(logString: string) {
    console.log('LOGGER Function #1')
    return function (constructor: Function) {
        console.log('LOGGER constructor #4')
        console.log(logString)
        console.log(constructor)
    }
}
//* More practical decorator
function WithTemlate(template: string, hookId: string) {
    console.log('TEMPLATE Function #2')
    return function (constructor: Function) {
        console.log('TEMPLATE constructor #3')
        const hookEl = document.getElementById(hookId);
        // @ts-ignore
        const p = new constructor()
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
}

// ? Decorators execute from last to firs (в обратном порядке)

@Logger('Logging')
@WithTemlate('<h1>My Object</h1>', 'app')
class Person {
    name: string = "Slava";

    constructor() {
        console.log('name', this.name)
    }
}
const pers = new Person();

console.log('pers', pers);

//***********************************//
//* Property decorator Log

function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator');
    console.log(target, propertyName);
}
//* Accessor decorator Log2
function Log2(target: any, name: string, descriptor: TypedPropertyDescriptor<number>) {
    console.log('Accessor decorator!')
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

//* Method decorator Log3
function Log3(target: any, name: string | Symbol, descriptor: TypedPropertyDescriptor<(T: number) => number>) {
    console.log('Method decorator!')
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

//* Parameter decorator Log4
function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter decorator!')
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string;
    private _price: number;
    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - should be positive!')
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }
    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}

//? decorators run when class instantiated

const p1 = new Product('War and Piece', 19.99);
const p2 = new Product('Master and Margaritta', 9.99);