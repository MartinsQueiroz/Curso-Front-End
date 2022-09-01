function obterMedia(){

    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);

    var media = (price1 + price2 + price3) /3; 

    document.getElementById("resultado").innerHTML = "Resultado:" + media;

}