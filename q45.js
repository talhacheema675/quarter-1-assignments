"use strict";
function cars(manu, model, condition, color) {
    let info = { manufactures: manu, registration_year: model, outlook: condition, variant: color };
    console.log(info);
}
cars("toyota", 2022);
cars("honda", 2021, "9/10");
cars("vezel", 1998, "1/19", "white");
