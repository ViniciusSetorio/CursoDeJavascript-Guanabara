let num = [5, 8, 4];
console.log(`Nosso vetor é o ${num}`);

num[3] = 6; // Cria um novo elemento com índice 3 e adiciona o 6. Obs: Pode ser usado para colocar um número no lugar do outro.
console.log(`Novo vetor é o ${num}`);

num.push(7); // Cria um novo elemento (ao final do vetor) e adiciona o 7.
console.log(`Novo vetor é o ${num}`);

console.log(`O elemento 0 é ${num[0]}`); // Mostra o valor do elemento 0.

console.log(`O comprimento do vetor é de ${num.length} elementos.`); // Mostra o complimeto do vetor. 

console.log(`Colocando o vetor em ordem crescente, temos: ${num.sort()}.`); // Coloca os elementos em ordem crescente.

let pos = num.indexOf(10) // Procura o número no vetor e retorna a chave(posição). Obs: caso o número não pertença ao vetor, retorna -1.
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`A chave pertencente ao número é ${pos}.`);
}
