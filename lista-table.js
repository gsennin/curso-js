const cliente = [
    {
        nome: 'Geraldo',
        idade: 26,
        cpf: '123456789',
        email: 'geraldo@email.com',
        fones: [ '5599123456', '551329451634' ],
        dependentes: [
        { nome: 'Sara Silva', 
        parentesco: 'filha', 
        dataNasc: '20/03/2011' },
        { nome: 'Alice', 
        parentesco: 'filha', 
        dataNasc: '04/01/2014' }      
        ],
        nome: 'Ronaldo',
        idade: 23,
        cpf: '1236789',
        email: 'geraldo@email.com',
        fones: [ '55991236', '551329634' ],
        dependentes: [{ 
        nome: 'Beatriz', 
        parentesco: 'filha', 
        dataNasc: '20/03/2011'
        },
      { nome: 'Julia', 
      parentesco: 'filha', 
      dataNasc: '04/01/2014' 
        }],
    },
]

const listaDependentes = [...cliente[0].dependentes,...cliente[1].dependentes]
console.table(listaDependentes)
