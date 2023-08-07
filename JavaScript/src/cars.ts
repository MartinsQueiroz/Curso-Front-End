
let cars: {
    modelo: string, marca: string, id: number, color: string,
    ano: number, portas: number, cambio: string, combustivel: string
}[] = [
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

const getCars = () => {
    return cars
}

export default getCars()