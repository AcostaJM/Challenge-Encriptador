function saltarlinea() {
    document.write("<br>");
}
function imprimir(frase) {
    document.write(frase);
    saltarlinea();
}

function copiar() {
  let copytext = document.getElementById("cajatext3");
  navigator.clipboard.writeText(copytext.textContent);
}

function encriptar(){
  // Variables
  let texto = document.getElementById("cajatext1").value;
  let textoencriptado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if (texto.length !=0) {
      const cajaP = document.getElementById("cajatext3");
        cajaP.hidden = false;
      const Boton = document.getElementById("copiarT");
        Boton.hidden = false;
      const output = document.getElementById("cajatext3");
        output.textContent=textoencriptado;
      let figura = document.getElementById("figura1");
      let text1 = document.getElementById("texto1");
      let text2 = document.getElementById("texto2");
      figura.parentNode.removeChild(figura);
      text1.parentNode.removeChild(text1);
      text2.parentNode.removeChild(text2);
    }
    else {
      const output = document.getElementById("cajatext3");
        output.textContent="Texto vacio";
      let figura = document.getElementById("figura1");
      let text1 = document.getElementById("texto1");
      let text2 = document.getElementById("texto2");
      figura.parentNode.removeChild(figura);
      text1.parentNode.removeChild(text1);
      text2.parentNode.removeChild(text2);
    }
}


function desencriptar(){
  // Variables
  let texto = document.getElementById("cajatext1").value;
  let textodesencriptado = texto
    .replace(/ai/gi, "a")
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (texto.length !=0) {
      const output = document.getElementById("cajatext3");
        output.textContent=textodesencriptado;
      let figura = document.getElementById("figura1");
      let text1 = document.getElementById("texto1");
      let text2 = document.getElementById("texto2");
      figura.parentNode.removeChild(figura);
      text1.parentNode.removeChild(text1);
      text2.parentNode.removeChild(text2);
    }
    else {
      const output = document.getElementById("cajatext3");
        output.textContent="Texto vacio";
      let figura = document.getElementById("figura1");
      let text1 = document.getElementById("texto1");
      let text2 = document.getElementById("texto2");
      figura.parentNode.removeChild(figura);
      text1.parentNode.removeChild(text1);
      text2.parentNode.removeChild(text2);
    }
}




