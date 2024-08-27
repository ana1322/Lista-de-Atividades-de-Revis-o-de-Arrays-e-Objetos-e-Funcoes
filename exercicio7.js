//Funções e Escopo

//1-Declare uma função soma que aceite dois parâmetros e retorne a soma deles.
function soma(a, b) {
    return a + b
}
console.log(soma(5, 3))

//2-Declare uma função ehPar que receba um número como parâmetro 
//e retorne true se o número for par, ou false se for ímpar.
function ehPar(numero) {
    return numero % 2 === 0;
}
console.log(ehPar(4))

//3-Declare uma função dobraValores que receba um array de 
//números e retorne um novo array com cada valor dobrado.
function dobraValores(array) {
    return array.map(valor => valor * 2);
}

//4-Crie uma função contaCaracteres que receba uma string e 
//retorne o número de caracteres na string.
function contaCaracteres(string) {
    return string.length;
}
console.log(dobraValores([1, 2, 3, 4]))

//5-Declare uma função fatorial que calcule o 
//fatorial de um número (ex.: fatorial de 5 é 5*4*3*2*1 = 120).

function fatorial(n) {
    if (n < 0) return "Fatorial de número negativo não definido"
    if (n === 0) return 1; // O fatorial de 0 é 1
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado
}
console.log("Soma de 5 e 3:", soma(5, 3))