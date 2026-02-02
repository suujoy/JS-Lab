let prompt = require("prompt-sync")();

let target = Number(prompt("Searce Number"));

let arr = [12, 16, 23, 36, 45, 56, 67, 77, 78, 79, 89, 91, 95];

let count = 0
let start = 0;
let end = arr.length - 1;
let index = -1;

while (start <= end) {
    count++
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
        index = mid;
        break;
    } else if (arr[mid] < target) start = mid + 1;
    else if (arr[mid] > target) end = mid - 1;
}

if (index === -1) console.log(`Not Found`);
else console.log(`Found at ${index} index`);
console.log(count);

