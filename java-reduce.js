const salaJs = [10, 4, 5, 7, 8, 9, 10]
const salaJava = [5, 4, 6, 1]
const salaPython = [10, 4, 5, 6, 2, 10]

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum, 10)
    return somaDasNotas/notasDaSala.length
}

console.log(`Média da sala de JS ${mediaSala(salaJs)}`)
console.log(`Média da sala de Java ${mediaSala(salaJava)}`)
console.log(`Média da sala de Python ${mediaSala(salaPython)}`)

/* 1) O método reduce() está trabalhando com dois parâmetros. 
O primeiro é a função callback obrigatória para retornar o cálculo e o segundo parâmetro é um número que representa o valor inicial - no caso, 0.

2) A função callback foi escrita diretamente dentro do reduce(), e esta função também está recebendo dois parâmetros, ambos obrigatórios: 
O valor acumulado e o valor atual.

3) A função callback foi escrita na forma de arrow function; nesse caso,
quando só temos uma linha de instrução dentro da função (atual + acum) não precisamos usar chaves e nem da palavra-chave return. */
