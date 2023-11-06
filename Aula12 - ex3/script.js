function verificar() {
  var data = new Date() // Data atua do computador 
  var ano = data.getFullYear() // Ano atual (4 dígitos -> 2023)
  var fAno = document.getElementById('txtano') // Ano digitado pelo usuário
  var res = document.querySelector('div#res') // resultado que irá aparecer

  if (fAno.value.length == 0 || fAno.value > ano) { // Verifica se o valor digitado é igual a zero ou maior que o ano atual
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex') // 'fsex' recebe 'Masculino' ou 'Feminino'
    var idade = ano - Number(fAno.value) // Calcula a idade
    var gênero = '' // Vazia
    var img = document.getElementById("foto"); // 'img' recebe id = "foto"
    
    if (fsex[0].checked) { // Verifica se 'fsex[0](Masculino)' foi marcado
      gênero =  'Homem'

      if (idade >= 0 && idade <= 10) { // if para verificar a faixa etária masculina
        // Criança
        img.src = 'fotos/bebe-menino.png'

      } else if (idade < 21) {
        // Jovem
        img.src = 'fotos/jovem-homem.png'

      } else if (idade < 65) {
        // Adulto
        img.src = 'fotos/adulto.png'

      } else {
        // Idoso
        img.src = 'fotos/idoso.png'

      }

    } else {
      gênero = 'Mulher'

      if (idade >= 0 && idade <= 10) { // if para verificar a faixa etária feminina
        // Criança
        img.src = 'fotos/bebe-menina.png'

      } else if (idade < 21) {
        // Jovem
        img.src = 'fotos/jovem-mulher.png'

      } else if (idade < 65) {
        // Adulta
        img.src = 'fotos/adulta.png'

      } else {
        // Idosa
        img.src = 'todos/idosa.png'

      }
    }
    res.innerHTML = `Detectamos: ${gênero} de ${idade} anos.` // texto que aparece na tela
    res.appendChild(img) // Adiciona o elemento 'img'
  }

}