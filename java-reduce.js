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