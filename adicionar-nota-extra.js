const notasDoBimestre = [10, 9, 8, 7]
// Vamos adicionar 1 ponto a mais em cada nota
// Map retorna uma array atualizada! Em uma nova variavel
// Em seguida temos uma arrayFunction com o if --- Se nota for igual a 10 ele repete a nota 10, Senão acrescenta 1 nas notas diferentes de 10.
const notasAtualizadas = notasDoBimestre.map( nota => nota == 10 ? nota : ++nota)
console.log(notasDoBimestre)
console.log(notasAtualizadas)