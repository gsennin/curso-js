// Procurando Listas

const alunos = ['Geraldo', 'Bia', "ABC"]     
const mediaDosAlunos = [10,9,7]

let listaDeMediaEAlunos = [alunos, mediaDosAlunos]
// O includes retorna = Booleano
// O indexOf retorno o numero do índece
const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeMediaEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeMediaEAlunos[0].indexOf(nomeDoAluno)
        return listaDeMediaEAlunos[0][indice] + ' sua média é ' + listaDeMediaEAlunos[1][indice]
    } else {
        return "Aluno não está cadastrado no sistema"
    }
}

console.log(exibeNomeNota("Bia"))


