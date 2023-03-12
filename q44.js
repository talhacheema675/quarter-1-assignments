"use strict";
let countt = 0;
function sandwich(...item) {
    countt++;
    console.log(`customer # ${countt} wanted: ${item} on his sandwich`);
}
sandwich("cheesa", "beef");
sandwich("kepchup", "chicken", "fries");
sandwich("olive ", "onion", "jalepeno", "sause");
