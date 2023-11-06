function contar() {
    var inicio = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){ // Verifica se algum campo está vazio.
        //window.alert('[ERRO] Verifique os dados e tente novamente.')
        res.innerHTML = 'Não foi possível fazer a conta!'
    } else {
      var i = Number(inicio.value); // X recebe o valor numérico de Y.
      var f = Number(fim.value);
      var p = Number(passo.value);
      var contador = i;
      res.innerHTML = "Contando: <br>";

      if (p <= 0) {
        // Verifica se 'passo' está vazio.
        window.alert("[ERRO] Passo não definido! Executando PASSO igual 1.");
        p = 1;
      }

      if (i < f) {
        // Se inicio menor que fim...
        while (contador < f) {
          res.innerHTML += `${contador} \u{27A1} `; // \u{27A1} = ➡
          contador += p;
        }
      } else if (i > f) {
        // Se inicio maior que fim...
        while (contador > f) {
          res.innerHTML += `${contador} \u{27A1} `; // \u{27A1} = ➡
          contador -= p;
        }
      }
      res.innerHTML += `\u{1F6A9}`; // \u{1F6A9} = 🚩
    }
}