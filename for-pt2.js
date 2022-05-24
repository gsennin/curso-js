const notas = [10, 6, 7, 5]
// importante declarar a somaDasNotas fora do For
let somaDasNotas = 0;

for ( let i = 0; i < notas.length ; i++){
// += soma a variavel da direito na esquerda.    
    somaDasNotas += notas[i]
}

let media = somaDasNotas / notas.length
console.log(media);
