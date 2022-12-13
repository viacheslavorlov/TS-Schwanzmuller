function add2(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult2(num: number): void {
    console.log('Result: ' + num);
}

printResult2(add2(9, 9));

let comvineValue: (a: number, b: number) => number;

comvineValue = add2;
console.log(comvineValue(8,9))

//? параметры функции не подходят comvineValue != printResult;

function addAndHandle(n1: number, n2: number, cb: (a: number) => void) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(40, 2, (res) => console.log(res))

const errorGenertor = (message: string, code: number, msg2: string) => {
  throw {
      message,
      code,
      msg2
  }
}

errorGenertor('error occured', 404, "excluded files")