function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    //! это уже не нужно в TS
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incjrrect input!');
    // }
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return result;
    }
}

let x = 2; //* type number
const y = 2.2; //* type 2.2 beacose const
const printResult: boolean = true; //*  будет присвоет тип boolean
let resPhrase = 'Result is: ';
//? так нельзя сделать: resPhrase = 0;
// ! resPhrase = 0; при создании переменной ей присваивается тип присвоенных данных,
// ! не пожет быть переназначен даже для let;

const result = add(x, y, printResult, resPhrase);
console.log(result);
