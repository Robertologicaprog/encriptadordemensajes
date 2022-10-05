function encriptar(){
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

    // i toma mayusculas y minusculas
    // g roma toda la linea
    // m  toma multiples lineas

    var textoencriptado = frase.replace(/e/img, "enter");
    var textoencriptado = textoencriptado.replace(/o/img, "ober");
    var textoencriptado = textoencriptado.replace(/i/img, "imes");
    var textoencriptado = textoencriptado.replace(/a/img, "ai");
    var textoencriptado = textoencriptado.replace(/u/img, "ufat");
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("textoDesencriptado").innerHTML = textoencriptado;
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";

}

function desencriptar(){
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

    // i toma mayusculas y minusculas
    // g roma toda la linea
    // m  toma multiples lineas

    var textoencriptado = frase.replace(/enter/img, "e");
    var textoencriptado = textoencriptado.replace(/ober/img, "o");
    var textoencriptado = textoencriptado.replace(/imes/img, "i");
    var textoencriptado = textoencriptado.replace(/ai/img, "a");
    var textoencriptado = textoencriptado.replace(/ufat/img, "u");
    document.getElementById("textoDesencriptado").innerHTML = textoencriptado;
}

function copiar(){
    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");
}