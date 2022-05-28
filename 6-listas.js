console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;   Ctrol + K + C = Comentar várias linhas.
// Alt + Shift + Seta pra baixo copia o codígo da linha atual p/ a linha de baixo.
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`) // Adicionando um item na lista 

console.log("Destinos possíveis:");
//console.log(salvador, saoPauo, rioDeJaneiro) // iMPRIMO A LISTA FEITA PELA ARRAY
console.log(listaDeDestinos)

listaDeDestinos.splice(1,3); // Reduzir item da lista (Numero na lista do item, repito nº ou tiro os em seguida)
console.log(listaDeDestinos)

