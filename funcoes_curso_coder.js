// Function declaration
//Sem parametro e não retorna nada.
function sayHello() {
    console.log('Hello!')
}

sayHello()

// Com parametro e não retorna nada.
function sayHelloTo(name) {
    console.log(`Hello ${name}!`)
}

sayHelloTo('Mike')

// Não recebe parametro mas retorna algo.
function returnHi(){
    return 'Hi!'
}

const ola = returnHi()
console.log(returnHi())

//Com parametro e com retorno.
function returnHiTo(name) {
    return `Hi ${name}!`
}

console.log(returnHiTo('Geraldo'))
