let valores = [5, 6, 4, 7, 8, 9]
// console.log(valores)

/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`O elemento ${pos} tem valor ${valores[pos]}`)
}
*/

for (let pos in valores) {
    console.log(valores[pos])
}