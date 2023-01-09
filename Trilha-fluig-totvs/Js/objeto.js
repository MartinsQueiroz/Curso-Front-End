function externo(){
    var pessoa = {
        nome         : "Lucas",
        sobrenome    : "Martins",
        departamento : "fluig"
    };

    document.getElementById("local").innerHTML = pessoa.nome + " trabalha no " + pessoa.departamento + "<br />" + pessoa.nome + " " + pessoa.sobrenome;
}