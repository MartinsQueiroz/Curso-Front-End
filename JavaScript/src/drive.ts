import cars from "./cars.js";

const filterCars = cars.filter((cars) => {
    return cars.id === 1
})

let toPrint = ''

cars.forEach(car => {
    toPrint += car.cambio + ', '
});

let testDrive = filterCars.reduce((test) => {
    return test 
});

const cachorros = [10, 15, 7, 8, 9]

let years = cachorros.map((cachorro =>{
    return cachorro * 4
}));


const app = document.getElementById("app")
+ '<br> Carros disponiveis: ' + testDrive + '<br>Idade humana em cachorros: ' + years + ' '



