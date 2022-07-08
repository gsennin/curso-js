/* Array-
Metodos de Array.
.push   -> Adicionar mais um parametro no ultimo elemento da lista.
.lenght -> Selecionar todos os itens da Array, caso queira multiplicar para saber a nota.
.pop()  -> Excluir i ultimo elemento da lista "Detalhe não preciso colocar a ordem do elemento."

*/

// Exemplo de Array       0  1  2  3
const notasDoBimestre = [10, 8, 5, 8]                                                                           //.Todos os 4 elementos
let media = (notasDoBimestre[0] + notasDoBimestre[1] + notasDoBimestre[2] + notasDoBimestre[3]) / notasDoBimestre.length 

console.log(`A média é ${media}`) // Template string `` ${ }
