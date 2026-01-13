// 1. Write a loop to find the first number between 1 and 100 that is divisible by both 7 and 9.

for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0 && i % 9 === 0) {
        console.log(i);
    }
}

// 2. Given an array of numbers, use a loop to count how many are prime numbers.

const arr = [2, 7, 48, 9, 13, 19, 70];

arr.forEach((val) => {
    let isPrime = true;
    let n = val;
    if (n <= 1) isPrime = false;
    else if (n === 2) isPrime = true;
    else if (n % 2 === 0) isPrime = false;
    else {
        for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2)
            if (n % i === 0) {
                isPrime = false;
                break;
            }
    }
    console.log(isPrime ? "Prime" : "Not Prime");
});

// 3. Use a loop to reverse a string without using any built in methods.

const name = "Sujoy";
let reverse= ''

for (let i = 0; i <= name.length-1; i++) {
    let char = name[i]
    reverse=char+reverse
}
console.log(reverse)


let rev = ''
for(let i = name.length-1;i>=0;i--){
    let char = name[i];
    rev+=char
}
console.log(rev)
