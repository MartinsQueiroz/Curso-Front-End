function calcularMedia(notas){

    let soma = 0

    for(c = 0; c < notas.length; c++) {
        soma += notas[c];      
    }

    media = soma / notas.length

    return media;
}

let media; //escopo global 

function aprovacao( notas ){

    let media = calcularMedia( notas ); //escopo local 

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Média: ' + media +  ' - Resultado: ' + condicao;
}


// função recursiva
function contagemRegressiva(numero){

    let proximoNumero = numero - 1;

    console.log(numero);

if(numero >0)

    contagemRegressiva(numero--);
}

//contagemRegressiva(10);

document.addEventListener('submit', function(evento){

    evento.preventDefault();

    let formulario = document.getElementById('formulario-01');

    let dados = new FormData(formulario);

    let objeto = {};

    let notas = [];

    for(let key of dados.keys()){
        objeto[key] = dados.get(key);

        //adiciona itens no array
        notas.push(parseInt(dados.get(key)));
    }

    console.log(notas);

    console.log(objeto);

    document.getElementById('resultado').innerHTML = aprovacao(notas);
    
});