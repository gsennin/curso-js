function Cliente(nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function ClientePoupanca(nome,cpf,email,saldo,saldoPoup)
{
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}

const Geraldo = new ClientePoupanca("Geraldo","123456789","geraldo@email.com",100,200)

console.log(Geraldo)

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

Geraldo.depositarPoup(50)
console.log(Geraldo.saldoPoup)