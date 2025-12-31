let prompt = require("prompt-sync")();

// let day = Number(prompt("Enter a Day Number"));

let day = 5;
switch (day) {
    case 1: {
        console.log("Monday");
        break;
    }
    case 2: {
        console.log("Tuesday");
        break;
    }
    case 3: {
        console.log("Wednusday");
        break;
    }
    case 4: {
        console.log("Thrusday");
        break;
    }
    case 5: {
        console.log("Fryday");
        break;
    }
    case 6: {
        console.log("Saterday");
        break;
    }
    case 7: {
        console.log("Sunday");
        break;
    }
    default:
        console.log("Fuck You");
}

// let string = prompt("Enter any word ");
let string = "Sujoy Saha";

let consonent = 0,
    vowel = 0;

for (let i = 0; i < string.length; i++) {
    let ch = string.charAt(i);

    switch (ch) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            vowel++;
            break;
        default:
            consonent++;
    }
}

console.log(vowel);
console.log(consonent);

// let monthNum = Number(prompt('Enter Month Number To know the Month Name :-'))
let monthNum = 8;

console.log(`Your Month Number Is ${monthNum}`);

switch (monthNum) {
    case 1: {
        console.log("January");
        break;
    }
    case 2: {
        console.log("February");
        break;
    }
    case 3: {
        console.log("March");
        break;
    }
    case 4: {
        console.log("April");
        break;
    }
    case 5: {
        console.log("May");
        break;
    }
    case 6: {
        console.log("June");
        break;
    }
    case 7: {
        console.log("July");
        break;
    }
    case 8: {
        console.log("August");
        break;
    }
    case 9: {
        console.log("September");
        break;
    }
    case 10: {
        console.log("October");
        break;
    }
    case 11: {
        console.log("November");
        break;
    }
    case 12: {
        console.log("December");
        break;
    }

    default:
        console.log("Invalid Number ");
}

// let num1 = Number(prompt("Enter First Number :-"));
// let num2 = Number(prompt("Enter Second Number :-"));

// let operator = prompt("Which Operator You Want to use ? :-");
let result = 0;

let num1 = 5;
let num2 = 3;

let operator = "-";

switch (operator) {
    case "+": {
        result = num1 + num2;
        break;
    }
    case "-": {
        result = num1 - num2;
        break;
    }
    case "/": {
        result = num1 / num2;
        break;
    }
    case "*": {
        result = num1 * num2;
        break;
    }
    default:
        console.log("Thank You");
}

console.log(result);




