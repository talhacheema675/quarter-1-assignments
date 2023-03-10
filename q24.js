"use strict";
let str = "adil";
let str2 = "talha";
let num1 = 5;
let arr1 = ["talha", "adil", "hamza", "ali"];
if (str == str2) {
    console.log("string match");
}
else {
    console.log("string not matched");
}
if (str.toLowerCase() == str2.toLowerCase()) {
    console.log("string match");
}
else {
    console.log("string not match");
}
if (num1 >= 0 && num1 <= 10) {
    console.log("number is in range");
}
else {
    console.log("number not in range");
}
if (num1 <= 1 || num1 <= 10) {
    console.log("num is less than 10 ");
}
else {
    console.log("num greater than 10");
}
for (var i = 0; i < arr1.length; i++) {
    if (str == arr1[i]) {
        console.log(`desired value exist at: ${i} index of array`);
    }
    if (str2 == arr1[i]) {
        console.log(`desired value exist at: ${i} index of array`);
    }
}
