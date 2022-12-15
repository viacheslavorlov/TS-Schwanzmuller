interface Idepartment {
    name: string
}

class Department {
    //? readonly id: string;
    //? private name: string; // private can not extends to classes
    //? that inherits from this class
    protected employees: string[] = ['sasha', 'slava']; //? can extends to other classes
    // constructor(id: string, name: string) {
    //     this.id = id;
    //     this.name = name
    // }
    //* укороченное объявление приватных и обычных свойств в конструкторе
    constructor(protected readonly id: string, private name: string) {
    }

    describe(this: Department) {
        console.log('Deprtment: ' + this.name);
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.id);
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const library = new Department('1234','library');

library.describe();
//!  library.employees;  //error - property is private
library.printEmployeeInformation();
library.addEmployee('alex');
library.printEmployeeInformation();


const libraryCopy = {describe: library.describe};
//! не выдаст ошибку, хотя this === undefined !!!!
// libraryCopy.describe();  // Deprtment: undefined

// const libraryCopy2 = {name: 'Dummy', describe: library.describe};
//
// libraryCopy2.describe();

class ITDepartment extends Department {
    constructor(id: string, name: string, public admins: string[]) {
        super(id, name);
        this.admins = admins;
    }
}

const itDepartment = new ITDepartment('12nn424', 'IT', ['sonya', 'sana']);
itDepartment.addEmployee('slava');
itDepartment.admins[0] = 'red sonya';
itDepartment.printEmployeeInformation()
itDepartment.describe();
console.log(itDepartment);

interface IReport {
    date: string;
    income: number;
    outcome: number;
}

class Accounting extends Department {
    private lastReport: IReport | null;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        console.log('No report found!');
        return null;
    }

    set mostRecentReport(value) {
        if (value) {
            this.addReport(value);
        } else {
            throw new Error('set data for report!')
        }
    }

    constructor(id: string, name: string, private reports: IReport[]) {
        super(id, name);
        this.lastReport = reports[0];
    }
    addReport(text: IReport) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(employee: string) {
        super.addEmployee(employee);
    }
}

const accountingDep = new Accounting('3234', 'Accounting', [])
console.log(accountingDep.mostRecentReport);
accountingDep.addReport({
    date: '10.12.2022',
    income: 1302,
    outcome: 12344
});
accountingDep.addReport({
    date: '12.12.2022',
    income: 102,
    outcome: 1344
});
accountingDep.printReports();
accountingDep.mostRecentReport = {date: '14.12.2022', income: 123123, outcome: 1243};

console.log(accountingDep.mostRecentReport);
console.log(accountingDep)
// accountingDep.mostRecentReport = null;
console.log(accountingDep.describe());

//* Singleton & private constructor

 class SingletonClass extends Department {
     func: string;
     private static instance: SingletonClass;
     private constructor(id: string, name: string, func: string) {
         super(id, name);
         this.func = func;
     }

     static getInstance(id: string, name: string, func: string) {
         if (SingletonClass.instance) {
             return this.instance;
         }
         this.instance = new SingletonClass(id, name, func);
         return this.instance;
     }
 }

const single = SingletonClass.getInstance('adfa23', 'name', 'func')
const single2 = SingletonClass.getInstance('adf23', 'name2', 'func')

console.log('single', single, 'single2', single2)