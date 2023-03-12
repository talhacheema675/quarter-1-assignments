"use strict";
let make_album = (art, tit, son) => {
    let comb = {};
    for (let i = 0; i < artist.length; i++) {
        comb = { artist: art[i], title: tit[i], songs: son[i] };
        console.log(comb);
    }
    return comb;
};
let comb = {};
let artist = ["atif", "ali zafar", "rahat fateh"];
let title = ["sad songs", "pop songs", "qawalis"];
let tracks = [4, 7, 10];
let out = make_album(artist, title, tracks);
console.log(comb);
