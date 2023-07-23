"use strict";
let cats = ["img/cat1.jpg", "img/cat2.jpg", "img/cat3.jpg"];
let div = document.querySelector('#slider');
let left = document.querySelector('#left');
let right = document.querySelector('#right');

let i = 0;

left.addEventListener('click', function (event) {
    event.preventDefault();
    i--;
    if (i < 0) {
        i = i = cats.length - 1;
    }
    update();

});
right.addEventListener('click', function (event) {
    event.preventDefault();
    i++;
    if (i >= cats.length) {
        i = 0;
    }
    update();
});

function update() {
    div.innerHTML = '';
    let img = document.createElement('img');
    img.src = cats[i];
    div.appendChild(img);
}

update();
