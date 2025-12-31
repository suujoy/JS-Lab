// 👇👇👇 If Else Statment

let prompt = require("prompt-sync")();
// let age = prompt('Enter Your age')
let age = 45;
if (age >= 18) {
    console.log("You Can Vote");
} else {
    console.log("You are not eligible");
}

// 👇👇👇 Else if

// let marks = Number(prompt("Enter Your Marks"));
let marks = 45;

if (marks > 85) console.log("AA");
else if (marks > 75 && marks <= 85) console.log("A");
else if (marks > 50 && marks <= 75) console.log("B");
else if (marks > 35 && marks <= 50) console.log("C");
else console.log("Fail");

// Q 10. Accept two numbers and print the greatest between them

// let num1 = Number(prompt("Enter First Number-:"));
// let num2= Number(prompt('Enter Second Number-:'))
let num2 = 112;
let num1 = 12;
if (num1 > num2) console.log(num1);
else console.log(num2);

// Q 11. Accept an integer and check whether it is an even number or odd.

// let number = Number(prompt('What is Your number '))

let number = 45;

if (number % 2 === 0) console.log("Even");
else console.log("Odd");

// Q 12. Accept name and age from the user. Check if the user is a valid voter or not.

// let name = prompt("What is your name");
// let age2 = Number(prompt("What is your age"));
let name = "Sujoy Saha";
let age2 = 45;

if (age2 > 18) console.log(`${name} in a vlaid voter`);
else console.log(`${name} is not a valid voter`);

// Q 13. Accept three numbers and print the greatest among them

// let num11 = Number(prompt("Enter First Number"));
// let num12 = Number(prompt("Enter Second Number"));
// let num13 = Number(prompt("Enter Third Number"));

let num11 = 13;
let num12 = 12;
let num13 = 11;

if (num11 > num12 && num11 > num13)
    console.log(`${num11} is the Gteatest among these three number `);
else if (num12 > num11 && num12 > num13)
    console.log(`${num12} is the Gteatest among these three number `);
if (num13 > num12 && num13 > num11)
    console.log(`${num13} is the Gteatest among these three number `);

// Q 14. Accept a year and check if it a leap year or not (google to find out what's a leap year) :

// let year = Number(prompt('What is Your Year'))

let year = 2000;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
    console.log(`${year} is a lepyer`);
else console.log(`${year} is not a leapyear`);

// Q 15. Shop discount - Description on Graphic
// let amount = Number(prompt("What is the amount"));

let amount = 6000;
if (amount <= 5000) console.log(`You have to pay :${amount}`);
else if (amount >= 5001 && amount <= 7000)
    console.log(`You have to pay ${amount - (amount * 5) / 100}`);
else if (amount >= 7001 && amount <= 9000)
    console.log(`You have to pay ${amount - (amount * 10) / 100}`);
else if (amount > 9000)
    console.log(`You have to pay ${amount - (amount * 20) / 100}`);

// Q 16. Bijli Bill - Description on Graphic

let unit = Number(prompt("Lets Calculate Elictric bill"));
// let unit = 100;
let unitAmount = 0;
if (unit > 0 && unit <= 100) console.log(unit * 4.2);
else if (unit > 100 && unit <= 200) {
    console.log(100 * 4.2 + (unit - 100) * 6);
} else if (unit > 200 && unit <= 400) {
    console.log(100 * 4.2 + 100 * 6 + (unit - 200) * 8);
} else if (unit > 400) {
    console.log(100 * 4.2 + 100 * 6 + 200 * 8 + (unit - 400) * 13);
}

if (unit > 400) {
    unitAmount = (unit - 400) * 13;
    unit = 400;
}
if (unit > 200 && unit <= 400) {
    unitAmount += (unit - 200) * 8;
    unit = 200;
}
if (unit > 100 && unit <= 200) {
    unitAmount += (unit - 100) * 6;
    unit = 100;
}
unitAmount+=unit*4.2

console.log(unitAmount);

// Q 17. Counting number of days in a given month of a year
