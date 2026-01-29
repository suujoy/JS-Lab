// Left Rotation

let arr = [1, 2, 3, 4, 5];

let temp = arr[0];

for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
}

arr[arr.length - 1] = temp;

console.log(arr);

// Right Rotation

let arr1 = [1, 2, 3, 4, 5];

let t = arr1[arr1.length - 1];

for (let i = arr1.length - 1; i > 0; i--) {
    arr1[i] = arr1[i - 1];
}

arr1[0] = t;
console.log(arr1);

let rot = [1, 2, 3, 4, 5, 6];
let k = 2;

for (j = 1; j <= k; j++) {
    let r = rot[0];

    for (let i = 1; i < rot.length; i++) {
        rot[i - 1] = rot[i];
    }

    rot[rot.length - 1] = r;
}

console.log(rot);
