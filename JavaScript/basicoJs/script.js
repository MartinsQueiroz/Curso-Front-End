// na função foi adotado uma arrow function substituindo a necessidade de repetir a função

const calcularMedia = ( notas ) => {

    let soma = 0;

    for( let c = 0; c < notas.length; c++) {
        soma += notas[c];      
    }

    const media = soma / notas.length

    return media;
}

let media; //escopo global 

function aprovacao( notas ){

    let media = calcularMedia( notas ); //escopo local 

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Média: ' + media +  ' - Resultado: ' + condicao;
}


// função recursiva - na função foi adotado uma arrow function
 contagemRegressiva = (numero) => {

    console.log(numero);

    let proximoNumero = numero - 1;

    if(proximoNumero > 0)
        contagemRegressiva(proximoNumero);
}

contagemRegressiva(10);


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
    elemento.addEventListener('focusout', (event) => {

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

// a função anterior foi adpatada e transformada em uma classe, 'bind' é usado para controlar e definir o valor de 'this'
class ValidaCampoNumerico { 
    constructor(elemento){
        this.elemento = elemento
        this.addEventListener('focusout', this.validarCampo.bind(this));
    }

    validarCampo(event){
        event.preventDefault();

        console.log(this.elemento.value);    
        
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
    }
}

let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero')

for( let emFoco of camposObrigatorios){
    validaCampo(emFoco)
}

for(let emFoco of camposNumericos){
    validaCampoNumerico(emFoco)
}