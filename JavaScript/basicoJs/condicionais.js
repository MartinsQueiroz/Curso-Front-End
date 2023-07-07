git//Condicionais

var km;
var revisao = 10;

for(km = 0; km < 10; km++){
    console.log("apenas" + km + "kms então pode rodar")
}


//Calculo de media de alunos

var alunos = [
    [6, 7, 8, 6],
    [8, 5, 6, 8],
    [10, 6, 8, 7]
    [8, 8, 8, 8]
    [6, 6, 6, 6, 6]
]

var nota = 0;

for(var i = 0; i < alunos.length; i++){
    nota = 0
    notasAluno = alunos[i]
    console.log("Aluno : " + i);
    console.log("Notas: " + notasAluno)

    for(c = 0; c < notasAluno.length; c++){
        nota += notasAluno[c]
    }

    media = nota / 4;

    if(media >= 7) {
        resultado = "aprovado";
    }else {
        resultado = "reprovado";
    }
    
    console.log("Media: " + media + " - " + resultado);
}


//While (enquanto)

/*while( [condição] ){
    [execução]
}*/

var minuto = 60;
while(minuto > 0){
    console.log(minuto)
    minuto--;
}

console.log("total de minuto: " + minuto)



//Do

/* do{
        [execução]
    } while( [condição] )
*/

do{
    [execução]
}while( [condição] )

 
//Funções

function calcularMedia(notas){

    let soma = 0
    for(c = 0; c < notas.length; c++) {
        soma += notas[c];      
    }

    media = soma / notas.length

    return media;
}
// let media; escopo global 
function aprovacao( notas ){

    let media = calcularMedia( notas ); //escopo local 
    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Média: ' + media +  ' - Resultado: ' + condicao;
}

console.log( aprovacao ([8, 8, 7]) );

console.log( aprovacao ([8, 8, 10]) );

console.log( aprovacao ([8, 9]) );