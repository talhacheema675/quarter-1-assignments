"use strict";
let guest1 = ["ali", "hamza", "tanveer", "adil"];
for (let i = 0; i < guest1.length; i++) {
    console.log(guest1[i] + ", i would like to invite you on my party ");
}
console.log("New guest list as hamza not coming and talha coming at its place");
guest1.splice(1, 0, "talha");
console.log(guest1);
for (let i = 0; i < guest1.length; i++) {
    console.log(guest1[i] + ", i would like to invite you on my party ");
}
