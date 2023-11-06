function carregar() {
  var msg = window.document.getElementById("msg");
  var imagem = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  //hora = 1
  msg.innerHTML = `Agora são ${hora} horas.`;

  if (hora >= 0 && hora < 12) {
    // BOM DIA!
    imagem.src = "fotos/fotomanha.png";
    window.document.body.style.background = "#F8D4A6";
  } else if (hora >= 12 && hora < 18) {
    // BOA TARDE!
    imagem.src = "fotos/fototarde.png";
    window.document.body.style.background = "#A0C4F0";
  } else {
    //BOA NOITE!
    imagem.src = "fotos/fotonoite.png";
    window.document.body.style.background = "#12004A";
  }
}
