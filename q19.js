"use strict";
var guest = ["ali", "hamza", "tanveer", "adil"];
console.log("we found bigger table now inviting 3 more guests");
guest.push("talha");
guest.unshift("muhammad");
guest.splice(2, 0, "mazhar");
console.log(guest);
console.log("total guest coming: " + guest.length);
