"use strict";
let arrr1 = ["talha", "adil", "admin", "ali", "hamza", "rasheed"];
console.log(arrr1.length);
let ddd = arrr1.length;
for (let i = 0; i < ddd; i++) {
    arrr1.pop();
}
console.log(`array : ${arrr1}`);
if (arrr1.length == 0) {
    console.log("we have to add some elements");
}
