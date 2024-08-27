//Manipulação de Strings 
// 1. Declarar a variável texto
let texto = "Aprendendo JavaScript é divertido e recompensador!";

// 2. Converter o valor de texto para maiúsculas e exibir no console
let textoMaiusculo = texto.toUpperCase();
console.log(textoMaiusculo);

// 3. Verificar se texto contém a palavra "divertido" e exibir o resultado no console
let contemDivertido = texto.includes("divertido");
console.log(contemDivertido);

// 4. Dividir texto em um array de palavras e exibir o array resultante no console
let arrayDePalavras = texto.split(" ");
console.log(arrayDePalavras);

// 5. Juntar as palavras do array resultante em uma única string, separadas por hífens, e exibir o resultado no console
let textoComHifens = arrayDePalavras.join("-");
console.log(textoComHifens);
