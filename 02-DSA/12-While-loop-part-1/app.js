let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

console.log("Reverse of a number");

let n = 1234;
let rev = 0;

while (n > 0) {
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
}
console.log(rev);

console.log("Some of digits of number");

let c = 12345;

let digit = 0;

while (c > 0) {
    let rem = c%10;
    digit+=rem;
    c=Math.floor(c/10)
}
console.log(digit)


console.log('sorry')
console.log('Sorry')