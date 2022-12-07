console.log('Send data ....')


const btn = document.querySelector('button')!;

btn.addEventListener('click', () => {
    console.log('clicked!')
})

const mappp = new Map()

console.log(mappp);

let logged;

function sendAnalytics(data: string): void {
    console.log(data);
    logged = true;
    console.log(logged)
}

sendAnalytics('some data for server');