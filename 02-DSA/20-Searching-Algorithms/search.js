let prompt = require("prompt-sync")();

const arr = [1, 2, 3, 4, 8,5, 6, 0, 1];
const target = Number(prompt("Enter Your Number"));

let index = -1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        index = i;
        break
    }
}

console.log(index===-1?'Not Found':'Founded at index' +index)