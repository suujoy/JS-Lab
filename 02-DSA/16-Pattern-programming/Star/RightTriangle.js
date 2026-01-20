let prompt = require("prompt-sync")();

let n = Number(prompt("Enter any Number"));

// right angled triangle pattern
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ");
    }
    console.log();
}

// Right angled inverted  triangle
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
        process.stdout.write("* ");
    }
    console.log();
}

// right angled inverted triangle.
for (let i = 1; i <= n; i++) {
    for (let j = n; j >= i; j--) {
        process.stdout.write("* ");
    }
    console.log();
}

// Right aligned inverted right angled star triangle
// Right aligned inverted triangle
for (let i = 1; i <= n; i++) {
    // right angled triangle pattern
    for (let j = 1; j <= i; j++) {
        process.stdout.write("  ");
    }

    // right angled inverted triangle.
    for (let j = n; j >= i; j--) {
        process.stdout.write("* ");
    }
    console.log();
}

// Right aligned increasing right angled star triangle
// Right aligned triangle
for (let i = 1; i <= n; i++) {
    for (let j = n; j >= i; j--) {
        process.stdout.write("  ");
    }

    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ");
    }

    console.log();
}

// Normal Triangle

for (let i = 1; i <= n; i++) {
    for (let j = n; j >= i; j--) {
        process.stdout.write(" ");
    }

    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ");
    }

    console.log();
}

// Main diagonal star pattern
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (i === j) process.stdout.write("* ");
        else process.stdout.write("  ");
    }
    console.log();
}

// Anti diagonal star pattern
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (j + i === n + 1) process.stdout.write("* ");
        else process.stdout.write("  ");
    }
    console.log();
}

// X star Patern

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (i === j || j + i === n + 1) process.stdout.write("* ");
        else process.stdout.write("  ");
    }
    console.log();
}


// V pattern by me 

for(let i = 1 ; i <=n;i++){
    for(let j = 1;j<=n;j++){
        if(i===j) process.stdout.write(' *')
            else process.stdout.write('  ')
    }
    for(let j = 1; j<=n; j++){
        if(i+j===n+1)process.stdout.write(' *')
            else process.stdout.write('  ')
    }
    console.log();
}

//  V patern by GPt
for (let i = 1; i <= Math.floor(n / 2) + 1; i++) {
    for (let j = 1; j <= n; j++) {
        if (j === i || j === n - i + 1) {
            process.stdout.write("* ");
        } else {
            process.stdout.write("  ");
        }
    }
    console.log();
}
