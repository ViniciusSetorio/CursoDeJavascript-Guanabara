var idade = 12
console.log(`Você tem idade de ${idade} anos.`);

if (idade < 16) {
  console.log("Não vota.");
} else if (idade < 18 || idade > 67) {
                   // || <- siginifica 'OU'
  console.log("Voto opicional.");
} else {
  console.log("Voto obrigatório.");
}
