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
/*function contagemRegressiva(numero){

    console.log(numero);

    let proximoNumero = numero - 1;

    if(proximoNumero > 0)
        contagemRegressiva(proximoNumero);
}

contagemRegressiva(10);
*/

// Eventos
document.getElementById('formulario-01').addEventListener('submit', function(evento){
 
    evento.preventDefault();
    evento.stopPropagation();

    /*
    if(this.getAttribute('class').match(/'erro'/) ){
        return false;
    }
    */
   
    let dados = new FormData(this);

    let notas = [];

    for(let key of dados.keys()){

        let numero = dados.get(key).match(/\d*/) ? Number (dados.get(key)) : 0; // é um numero
       
        console.log(typeof 'numero');

        if(!isNaN(numero == 'number')){
            notas.push(numero);
        }

        //adiciona itens no array
        /*   notas.push(parseInt(dados.get(key)));   */
    }

    console.log(notas);

    texto = aprovacao(notas)

    document.getElementById('resultado').innerHTML = texto;
    
});

function validaCampo(elemento){
    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        if(this.value == ""){
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque!"
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }else{
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }
        
    });

}

function validaCampoNumerico(elemento){

    elemento.addEventListener('focusout', function(event){
        
        event.preventDefault();

        console.log(this.value);    
        
        if(this.value != "" && this.value.match(/[0-9]*/) && this.value >= 0 && this.value <= 10){
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }else{
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque!"
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
           
        }   
    });
}

let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero')

for( let emFoco of camposObrigatorios){
    validaCampo(emFoco)
}

for(let emFoco of camposNumericos){
    validaCampoNumerico(emFoco)
}