function obterMedia(){

    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    

    var soma = (a + b); 

    document.getElementById("resultado").innerHTML = "Resultado:" + soma;

}