import months from './months.js'

// Filtra meses
const filteredMonths = months.filter( (months)=> {
    return months.days === 31
})

console.log(filteredMonths)

let toPrint = ''

// Lista meses
filteredMonths.forEach(month => {
    toPrint += month.month + ', ' 
});

let meses = [30,30,30] // array comum

// Reduce - executa função como todos os itens do array e devolve um valor único
let sumMonthDays = filteredMonths.reduce( (prev, next) =>{

    return {days: prev.days + next.days}

})

// Map - Faz funções em arrays de retorno indivudual (cada valor de um array)
let cachorros = [10, 15, 7, 8, 9]

let years = cachorros.map((cachorro =>{
    return cachorro * 7
}))

document.getElementById('main').innerHTML = toPrint + '<br> soma dos dias dos meses selecionados: ' + sumMonthDays.days + '<br> Idade humana em cachorros: ' + years + ' '