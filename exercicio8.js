//Manipulação de Datas e Horas
// 1. Criar uma data representando o próximo aniversário
let proximoAniversario = new Date('2008-11-22')

console.log(proximoAniversario)

//2-Crie uma data representando a data atual.
let dataAtual = new Date()

let diffMilissegundos = proximoAniversario - dataAtual

console.log(dataAtual)

//3-Calcule a diferença em dias entre a data atual e o seu 
//próximo aniversário e exiba o resultado no console.
let diffDias = Math.ceil(diffMilissegundos / (1000 * 60 * 60 * 24))

console.log(diffDias);

//Formate a data atual no formato "YYYY-MM-DD" e exiba no 
//console.
function formatarData(data) {
    let ano = data.getFullYear();
    let mes = (data.getMonth() + 1).toString().padStart(2, '0');
    let dia = data.getDate().toString().padStart(2, '0');
    return `${ano}-${mes}-${dia}`;
}
console.log("Data atual formatada:", formatarData(dataAtual));

//Adicione 30 dias à data atual e exiba a nova data no console.
let dataFutura = new Date(dataAtual);
dataFutura.setDate(dataAtual.getDate() + 30);

console.log("Data atual mais 30 dias:", formatarData(dataFutura));