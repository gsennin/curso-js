const cliente = {
    nome: 'Geraldo',
    idade: 26,
    cpf: '123456789',
    email: 'geraldo@email.com',
    fones: [ '5599123456', '551329451634' ],
    dependentes: [
      { nome: 'Sara Silva', parentesco: 'filha', dataNasc: '20/03/2011' },
      { nome: 'Alice', parentesco: 'filha', dataNasc: '04/01/2014' }      
    ], // Comportamento nos objetos
    saldo:0, // Inicio com saldo 0
    depositar:function(valor){ 
        this.saldo += valor
    }
  }
let relatorio ="";

for ( let info in cliente) {
    if ( typeof cliente[info] === "object" || typeof cliente[info]
    === "function"){
        continue
    }else {
        relatorio += `
        ${info} ==> ${cliente[info]}
        `
    }
}

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes"));
    {
        console.log(`Oferta de segura de vida para ${obj.nome}`);
    }
}

console.log(Object.values(cliente))
console.log(Object.keys(cliente))
console.log(Object.entries(cliente))

oferecerSeguro(cliente)