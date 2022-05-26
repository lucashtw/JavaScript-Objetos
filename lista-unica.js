/*Extrair de uma listagem de clientes apenas as
informações de dependentes e montar uma lista única,
para análise de outros departamentos do banco.*/

const clientes = [
    {
        nome: "Andre",
        cpf: "12312312312",
        dependentes:[{
            nome: "Sara",
            parentesco: "filha",
            dataNasc: "20/03/2011"
        },
        {
            nome: "Samia",
            parentesco: "filha",
            dataNasc: "04/01/2014"
        }],
    },
    {
        nome: "Juliana",
        cpf: "56767867867",
        dependentes: [{
            nome: "Sophia",
            parentesco: "filha",
            dataNasc: "30/08/2020"
        }],
    }    
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

console.log(listaDependentes)

console.table(listaDependentes)