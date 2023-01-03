//* GENERICS

const names: Array<string> = ['slava', 'tanya'];


// Promise

const promise: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
        resolve('this is done!')
    }, 2000)
});

promise.then(data => {
    console.log(data.split(' '));
})
//
// function merge<T, U>(objectA: T, objectB: U) {
//     return Object.assign(objectA, objectB);
// }

function merge<T extends {}, U extends {}>(objectA: T, objectB: U) {
    //?constrains T extends specific type
    return Object.assign(objectA, objectB);
}

const metgedObj = merge({surname: 'slava'}, {age: 35})
const metgedObj2 = merge({name: 'slava'}, {age: 30})
console.log(metgedObj, metgedObj2);



// exersize
interface Lengthy {
    length: number
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
    //? argument must have length property!
    let describtionText = 'Got np value';
    if (element.length === 1) {
        describtionText = 'Got 1 element';
    } else if (element.length > 1) {
        describtionText = `Got ${element.length} elements`
    }
    return [element, describtionText];
}

console.log(countAndPrint('fucker'));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key]
}

console.log(extractAndConvert({name: 'slava'}, 'name'));

//* GENERIC CLASSES

class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T, prop?: keyof T) {
        if (typeof item !== "object"){
            if (this.data.indexOf(item) >= 0) {
                this.data.splice(this.data.indexOf(item), 1)
            }
        }
        if (typeof item === "object" && prop) {
            this.data = this.data.filter((element: T) => element[prop] !== item[prop])
        }
    }

    getItems() {
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>()

textStorage.addItem('first')
textStorage.addItem('second')
textStorage.addItem('third')
textStorage.removeItem('second')
console.log(textStorage.getItems());


const numberStorage = new DataStorage<number>()

numberStorage.addItem(1)
numberStorage.addItem(3)
numberStorage.addItem(5)
numberStorage.removeItem(3)

console.log(numberStorage.getItems())

interface INamed {
    name: string
}
const objectStorage = new DataStorage<INamed>()
objectStorage.addItem({name: 'slava'})
objectStorage.addItem({name: 'tanya'})
objectStorage.addItem({name: 'marina'})
objectStorage.removeItem({name: 'slava'}, 'name')

console.log(objectStorage.getItems());
