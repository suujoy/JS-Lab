// prime number

let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number: "));
let n = 7;

if (n <= 1) console.log("Not Prime");
else {
    let counter = 0;

    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) counter++;
    }

    counter === 0 ? console.log("Prime") : console.log("not Prime");
}

// Eficient

let a = Number(prompt("Enter a Number"));

if (a <= 1) console.log("Not Prime");
else if (a === 2) console.log("Prime");
else if (a % 2 === 0) console.log("Not Prime");
else {
    let isPrime = true;
    for (let i = 3; i <= Math.floor(Math.sqrt(a)); i += 2) {
        if (a % i === 0) {
            isPrime = false;
            break;
        }
    }
    console.log(isPrime ? "Prime" : "Not Prime");
}

let b = Number(prompt("First Number"));
let c = Number(prompt("Second Number"));

if (c <= 0 || b <= 0) console.log("Cant Perform function");
else {
    for (let i = 1; i <= b; i++) {
        return 
    }
}
