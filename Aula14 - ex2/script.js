function tabuada() {
  var num = document.getElementById("txtn");
  var tabuada = document.getElementById("seltab");

  if (num.value.length == 0) {
    window.alert("[ERRO] Digite um número!");
  } else {
    var numero = Number(num.value);
    var contador = 1;
    tabuada.innerHTML = "";

    while (contador <= 10) {
      var val = document.createElement("option");
      val.text = `${numero} x ${contador} = ${numero * contador}`;
      contador++;
      tabuada.appendChild(val);
    }
  }
}
