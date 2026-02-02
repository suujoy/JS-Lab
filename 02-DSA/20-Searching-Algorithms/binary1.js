let prompt = require("prompt-sync")();

let t = Number(prompt("Search Number"));

const arr = Array.from({ length: 10000 }, (_, i) => 10 + i * 3);


let start = 0;
let end = arr.length - 1;
let index = -1;
let count = 0

while (start <= end) {
    count++
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === t) {
        index = mid;
        break;
    } else if (arr[mid] < t) start = mid + 1;
    else end = mid - 1;
}


console.log(index===-1?'Not Found':`Found at index ${index}`)
console.log(`count -> ${count}`)

console.log(arr)