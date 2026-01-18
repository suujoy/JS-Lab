let propmt = require("prompt-sync")();

let num = Number(propmt("Bhai Ek Number Likh :- "));
let original = num;
let rev = "";
let digit = 0;

while (num > 0) {
    digit = num % 10;
    rev += digit;
    num = Math.floor(num / 10);
}

console.log((original===Number(rev)?'This is palinodrome':'this is not palinodrome'))