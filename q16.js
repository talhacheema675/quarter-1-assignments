"use strict";
let guest2 = ["ali", "hamza", "tanveer", "adil"];
console.log("we found bigger table now inviting 3 more guests");
guest2.push("talha");
guest2.unshift("muhammad");
guest2.splice(2, 0, "mazhar");
console.log(guest2);
