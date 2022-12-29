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

function merge<T, U>(objectA: T, objectB: U) {
    return Object.assign(objectA, objectB);
}

const metgedObj = merge<>({name: 'slava'}, {age: 35})
console.log(metgedObj.age)