let num = document.querySelector("input#fnum");
let lista = document.querySelector("select#flista");
let res = document.querySelector("div#res");
valores = [];

function éNúmero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function emLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (éNúmero(num.value) && emLista(num.value, valores) == false) {
    let número = Number(num.value);
    valores.push(número);
    let v = document.createElement("option", "value");
    v.text = `O valor ${número} foi adicionado.`;
    lista.appendChild(v);
  } else {
    window.alert("Número inválido ou presente na lista.");
  }
}

function verificar() {
  let soma = 0;
  let n = 0;
  while (n < valores.length) {
    soma += valores[n];
    n += 1;
  }

  Mval = valores.sort((a, b) => b - a);

  res.innerHTML = `<p>Ao todo, temos ${valores.length} números cadastrados.`;

  res.innerHTML += `<p>O maior valor informado foi ${Mval[0]}.`;

  res.innerHTML += `<p>Somando todos os valores, temos: ${soma}.`;

  res.innerHTML += `<p>A média dos valores digitados é ${soma / valores.length}.`;
}
