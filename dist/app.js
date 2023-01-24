/*
File: valami.html
Author: Szávai Balázs
Copyright: 2022.01.17, Szávai Balázs
Group: Szoft I/1/E
Date: 2022-01-17
Github: https://github.com/janos/
Licenc: GNU GPL
*/
const baseElem = document.querySelector("#base");
const heightElem = document.querySelector("#height");
const calcButton = document.querySelector("#calcButton");
const areaElem = document.querySelector("#area");


calcButton.addEventListener('click', () => {
    var base = Number(baseElem.value);
    var height = Number(heightElem.value);
    var area = calcTriangleArea(base, height);
    console.log("Terület: " + area);
    areaElem.value = area
});

function calcTriangleArea(base, height) {
    return base * height / 2;
}


