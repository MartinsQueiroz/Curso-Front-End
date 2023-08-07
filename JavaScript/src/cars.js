"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cars = [
    {
        modelo: 'Palio',
        marca: 'Fiat',
        id: 1,
        color: 'branco',
        ano: 2005,
        portas: 4,
        cambio: 'manual',
        combustivel: 'gasolina'
    },
    {
        modelo: 'Corsa',
        marca: 'Chevrolet',
        id: 2,
        color: 'Preto',
        ano: 2008,
        portas: 4,
        cambio: 'manual',
        combustivel: 'gasolina'
    },
    {
        modelo: 'Celta',
        marca: 'Chevrolet',
        id: 3,
        color: 'Prata',
        ano: 2007,
        portas: 2,
        cambio: 'manual',
        combustivel: 'Flex'
    },
    {
        modelo: 'Fit',
        marca: 'Honda',
        id: 4,
        color: 'Prata',
        ano: 2008,
        portas: 4,
        cambio: 'Automático',
        combustivel: 'Flex',
    }
];
var getCars = function () {
    return cars;
};
exports.default = getCars();
