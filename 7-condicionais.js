console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanha = true;
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

//Minha condição               ALT + SHILF + F /// Visual Stdio formatar o codigo
if(idadeComprador >= 18){
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1);
}else if (estaAcompanha){
    console.log("Comprador está acompanhado");
    listaDeDestinos.splice(1,1);
} else {
    console.log("Não é maior de idade e não posso vender")
}

console.log(listaDeDestinos);