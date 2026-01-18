let propmt = require("prompt-sync")();

let num = Number(propmt("Bhai Please Ek Number Likh"));
let copy = num;
let original = num;

let count = 0;
let sum = 0;
let digit = 0;

while (num > 0) {
    count++;
    num = Math.floor(num / 10);
}

while(copy>0){
    digit=copy%10;
    sum+=digit**count;
    copy=Math.floor(copy/10)
}

console.log(original===sum?'isAmstarong':'No')