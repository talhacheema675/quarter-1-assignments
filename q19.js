"use strict";
let guest3 = ["ali", "hamza", "tanveer", "adil"];
console.log("we found bigger table now inviting 3 more guests");
guest3.push("talha");
guest3.unshift("muhammad");
guest3.splice(2, 0, "mazhar");
console.log(guest3);
console.log("total guest coming: " + guest3.length);
