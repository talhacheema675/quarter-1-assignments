"use strict";
let guest = ["ali", "hamza", "tanveer", "adil"];
console.log("we found bigger table now inviting 3 more guests");
guest.push("talha");
guest.unshift("muhammad");
guest.splice(2, 0, "mazhar");
console.log(guest);
console.log("opps table not arriving on time now have to reduce 2 guests");
console.log("lenght of array" + guest.length);
for (let i = 1; i > 0; i++) {
    if (guest.length == 2) {
        break;
    }
    else {
        let d = guest.pop();
        console.log("sorry " + d + " i have to uninvite you.");
    }
}
console.log(guest);
