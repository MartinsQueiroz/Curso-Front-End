
const form = document.getElementById('form');
const nome = document.querySelector('#nome');
const cpf = document.querySelector('#cpf');
const email = document.querySelector('#email');
const cep = document.querySelector('#cep');
const bairro = document.querySelector('#bairro')
const cidade = document.querySelector('#cidade')
const rua = document.querySelector('#rua')
const uf = document.querySelector('#uf')
const mensagem = document.querySelector('#mensagem')
const notNull = document.querySelector('.not-null')

function isEmpty(elem){
    return elem.value.length < 1 ? `O campo <strong>${elem.name}</strong> não pode ser vazio.` : ''; 
}


function validaEmail(elem) {
    return elem.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? '' : `Digite um <strong>E-mail<strong> válido`;
}

function validaCEP(elem) {
    if(!elem.value.match(/^[0-9]{8}/)) 
        return `Digite um CEP válido`;
    else return '';
}

function updateAdress(data) {
    if(!('erro' in data)) {
        rua.value=(data.logradouro);
        bairro.value=(data.bairro);
        cidade.value=(data.localidade);
        uf.value=(data.uf);
        mensagem.innerHTML = '';
    }else {
        mensagem.innerHTML = `CEP não encontrado`;
    }
}

form.addEventListener('submit', function(event){
    event.preventDefault();

    let msg = [];
    let markup = '';
   
    Array.from(notNull).forEach(field => {
        let fieldState = isEmpty(field);
        if(fieldState) 
            msg.push(fieldState);
    });

    const isEmail = validaEmail(email);
    if(isEmail) msg.push(isEmail);

    const isCEP = validaCEP(cep);
    if(isCEP.length > 0) {
        msg.push(isCEP);
    } else {  
        const script = document.createElement('script');
        script.src = 'https://viacep.com.br/ws/' + cep.value + '/json?callback=updateAdress';
        document.body.appendChild(script);
    }

    msg.forEach(item => {
        markup += `<p>${item}</p>` 
    });

    mensagem.innerHTML = markup;

    

});
