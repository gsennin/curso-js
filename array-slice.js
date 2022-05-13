// Aray   -> .slice "Cortar" o tamanho da minha array.
const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie',
'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Vivian', 'Bia',
'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo']
                                //Monstrar todos os alunos
console.log("Tamanho da Array:", alunos.length)
// João é o 0, Todos os alunos / metade
const sala1 = alunos.slice(0, alunos.length / 2)
// Metade e vai até o final
const sala2 = alunos.slice(alunos.length / 2)
//Template string
console.log(`Alunos da Sala1: ${sala1}`)
console.log(`Alunos da Sala2: ${sala2}`)

/* slipe( , , ,) Recebe 3 Parametros
1º Qual indice vai começar a tirar
2º Quantos elementos vai remover " até onde vai"
3º Adiciono um elemento novo no lugar!    */

const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'] 
listaDeChamada.splice(1,2,'Rodrigo')
//Posso somente adicionar tbm, colocando 0 no segundo parametro Ex:(1,0,'Rodrigo') Adiciona o rodrigo depois da Ana
console.log(`A chamada é:  ${listaDeChamada}`)