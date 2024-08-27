//Trabalhando com Funções de Callback

//1-Declare uma função executaOperacao que aceite dois números 
//e uma função de operação como parâmetros, e retorne o 
//resultado da operação aplicada aos números.
function executaOperacao(numero1, numero2, operacao) {
    return operacao(numero1, numero2);
}
console.log(executaOperacao(5, 3, soma))


//2-Use a função executaOperacao para somar dois números, 
//passando uma função de soma como callback.
function soma(a, b) {
    return a + b;
}
console.log(executaOperacao(5, 3, soma))

//3-Use a função executaOperacao para multiplicar dois números,
// passando uma função de multiplicação como callback.
function multiplicacao(a, b) {
    return a * b;
}
console.log(executaOperacao(4, 5, multiplicacao))

// 4-Crie uma função repetirOperacao que aceite um número e 
//uma função de operação, e repita a operação esse número de 
//vezes, exibindo o resultado a cada iteração.
function repetirOperacao(numero, operacao) {
    let resultado = 0;
    for (let i = 0; i < numero; i++) {
        resultado = operacao(resultado);
        console.log(`Resultado após iteração ${i + 1}:`, resultado);
    }
}

function incrementar(valor) {
    return valor + 1;
}

repetirOperacao(5, incrementar);

console.log('Repetir operação (adicionar 5, 3 vezes):')
repetirOperacao(3, adicionar5)

//5-Declare uma função contarOcorrencias que receba uma string 
//e um caractere, e use forEach para contar quantas vezes o caractere aparece na string.

function contarOcorrencias(string, caractere) {
    let count = 0;
    string.split('').forEach(char => {
        if (char === caractere) {
            count++;
        }
    });
    return count;
}

let ocorrencias = contarOcorrencias("string", "a");
console.log("Número de ocorrências do caractere 'a':", ocorrencias);