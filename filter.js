const nomes = ['Marcos', 'Geraldo', 'Beatriz', 'Guilhemer']
const notas = [10, 5, 4, 7]
//  O filter sempre retorna um Booleano
const reprovados = nomes.filter((aluno,indice) => notas[indice] < 5 )
console.log(`Reprovados: ${reprovados} `)