interface Idepartment {
    name: string
}

class Department {
    name: string
    constructor(n: string) {
    this.name = n;
    }

    describe() {
        console.log('Deprtment: ' + this.name);
    }
}

const library = new Department('library');

library.describe();

