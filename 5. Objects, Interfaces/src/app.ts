interface Person {
    name: string;
    age: number;

    greet(prase: string): void;
}

let user1: Person;

user1 = {
    name: 'Slava',
    age: 34,
    greet(prase: string) {
        console.log(prase + ' ' + this.name)
    }
}

user1.greet('Hi i\'m');