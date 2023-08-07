"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cars_js_1 = require("./cars.js");
var filterCars = cars_js_1.default.filter(function (cars) {
    return cars.id === 1;
});
var toPrint = '';
cars_js_1.default.forEach(function (car) {
    toPrint += car.cambio + ', ';
});
var testDrive = filterCars.reduce(function (test) {
    return test;
});
var cachorros = [10, 15, 7, 8, 9];
var years = cachorros.map((function (cachorro) {
    return cachorro * 4;
}));
var app = document.getElementById("app")
    + '<br> Carros disponiveis: ' + testDrive + '<br>Idade humana em cachorros: ' + years + ' ';
