//* GENERICS

const names: Array<string> = ['slava', 'tanya'];


// Promise

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is done!')
    }, 2000)
});

promise.then(data => {
    console.log(data.split(' '));
})