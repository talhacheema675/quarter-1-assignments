"use strict";
let alien = ["green", "yellow", "red"];
for (let i = 0; i < alien.length; i++) {
    if (alien[i] == "green") {
        console.log("you earn 5 points");
    }
    else if (alien[i] == "yellow") {
        console.log("you earn 10 points");
    }
    else if (alien[i] == "red") {
        console.log("you earn 15 points");
    }
}
