let arr = [1, 2, 3, 4, 5, 6, 7];

let first = -Infinity;
let sec = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
        sec = first;
        first = arr[i];
    } else if (arr[i] > sec && arr[i] !== first) {
        sec = arr[i];
    }
}
console.log(sec);
console.log(first);

console.log(`Create a new array where
Each element is the square of the original element
But only include squares of even numbers.`);

let numbersList = [2, 3, 4, 5, 6, 7, 8];

let evenArr = [];

for (let i = 0; i < numbersList.length; i++) {
    if (numbersList[i] % 2 === 0) evenArr.push(numbersList[i]);
}

let squareArr = [];

for (let i = 0; i < evenArr.length; i++) {
    squareArr.push(evenArr[i] * evenArr[i]);
}
console.log(squareArr);

console.log();
console.log();

console.log(`Rotate the array by 1 position`);

let valueStore = [1, 2, 3, 4, 5, 6, 7, 8];

let firstElem = valueStore[0];

for (let i = 1; i < valueStore.length; i++) {
    valueStore[i - 1] = valueStore[i];
}

valueStore[valueStore.length - 1] = firstElem;
console.log(valueStore);

console.log();
console.log();
console.log(`Rotate this array to the left by 2 positions.
Do not use built in methods like slice, splice, or reverse.`);

let dataBucket = [10, 20, 30, 40, 50, 60];

let k = 3;

for (let i = 0; i < k; i++) {
    let firstVal = dataBucket[0];

    for (let j = 1; j < dataBucket.length; j++) {
        dataBucket[j - 1] = dataBucket[j];
    }

    dataBucket[dataBucket.length - 1] = firstVal;
}

console.log(dataBucket);
console.log();
console.log();
console.log(`Create a new array that contains only the unique elements.
Do not use Set or any built in methods like filter or includes.`);

let itemBox = [4, 5, 2, 5, 1, 2, 4, 3];
let newBox = [];

for (let i = 0; i < itemBox.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < newBox.length; j++) {
        if (itemBox[i] === newBox[j]) {
            isDuplicate = true;
            break;
        }
    }

    if (!isDuplicate) {
        newBox.push(itemBox[i]);
    }
}
console.log(newBox);

console.log();
console.log();
console.log(`Find the sum of all elements that are greater than 10.
Do not use reduce or filter.`);

let scoreCard = [12, 5, 8, 19, 3, 15, 6];

let sumGreater10 = 0;

for (let i = 0; i < scoreCard.length; i++) {
    if (scoreCard[i] > 10) {
        sumGreater10 += scoreCard[i];
    }
}

console.log(sumGreater10);

console.log();
console.log();
console.log(`Find the smallest and largest number in the array
using only one loop.`);


let dataPile = [7, 3, 9, 1, 5, 11, 2, 8];

let smallest = dataPile[0]
let largest = dataPile[0]

for(let i = 0 ; i <dataPile.length; i++){
    if(dataPile[i]>largest){
        largest=dataPile[i]
    }else if(dataPile[i]<smallest){
        smallest=dataPile[i]
    }
}


console.log(largest)
console.log(smallest)

console.log();
console.log();
console.log(`Move all zeros to the end of the array.
Keep the order of non zero elements the same.
Do not use filter, sort, or any built in methods.`)

let orderList = [1, 0, 2, 0, 3, 0, 4];

let nonZeroValues = []
let zeroValue = []
let count = 0 ;

for(let i = 0 ; i <orderList.length;i++){
    if(orderList[i]===0){
        count++
        zeroValue.push(orderList[i])
    }
    else nonZeroValues.push(orderList[i])

}

let newArrayZeroEnd = [...nonZeroValues,...zeroValue]

console.log(newArrayZeroEnd)

// count methods

let orderListZero = [1, 0, 2, 0, 3, 0, 4];

let result = []
let zeroCount = 0;

for(let i = 0; i<orderListZero.length;i++){
    if(orderListZero[i]===0) zeroCount++;
    else result.push(orderListZero[i])
}

for(let i =0 ; i <zeroCount;i++){
    result.push(0)
}

console.log(result)
console.log();
console.log();
console.log(`Find the first pair of numbers whose sum is 210.
Stop as soon as you find the pair.
Do not use nested built in methods.`);

let priceList = [120, 80, 200, 150, 60, 90];
const check = 210;

for(let i = 0 ; i < priceList.length; i ++){
    let find = []

    for(let j= i;j<i+1;j++){
        
    }
}