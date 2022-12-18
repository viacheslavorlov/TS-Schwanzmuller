interface Name {
    readonly name: string; //* не может быть изменено после создания
    surname?: string;
}

interface Age {
    age: number
}

interface Greet extends Name, Age {
    greet(prase: string): string;

    dataOnly?(): void;
}

class Person implements Greet {
    //*имплементация нескольких интерфейсов через запятую
    name: string;
    age: number;
    surname?: string;

    constructor(n: string, a: number, b?: string) {
        this.name = n;
        this.age = a;
        this.surname = b;
    }

    greet(prase: string) {
        return prase + ' ' + this.name + 'I\'m ' + this.age;
    }

    dataOnly() {
        console.log(this.name, this.age, this.surname ? this.surname : '');
    }
}

let user1: Greet;

user1 = {
    name: 'Slava',
    age: 34,
    greet(prase: string) {
        return prase + ' ' + this.name;
    }
}
// ? Interfaces in FUNCTIONS

// type AddFn = (a: number, b: number) => number;
interface AddFn {
    (a: number, b: number): number;
}

const addFn: AddFn = (a, b) => a + b;

console.log(addFn(5, 37));

const user2 = new Person('Anna', 2/*, 'Orlova'*/)

console.log(user2.greet('hi!'));

console.log(user1.greet('Hi i\'m'));


user2.dataOnly();
