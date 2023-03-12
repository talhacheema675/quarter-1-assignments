"use strict";
let maagic = ["talha", "nadir", "muh", "ali"];
let maagic2;
function show_maagic(arr, ar2) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`${arr[i]} the great`);
    }
    console.log("copied array : " + ar2);
}
function make_great(arr2) {
    let copy = arr2;
    return copy;
}
maagic2 = make_great(maagic);
show_maagic(maagic, maagic2);
