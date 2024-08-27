//Trabalhando com Null, Undefined, e NaN
let nulo = null;

// Verificar se nulo é igual a undefined (usando ==) e se nulo é estritamente igual a undefined (usando ===)
let igualUndefined = (nulo == undefined);
let estritamenteIgualUndefined = (nulo === undefined);
console.log("nulo é igual a undefined (usando ==):", igualUndefined);
console.log("nulo é estritamente igual a undefined (usando ===):", estritamenteIgualUndefined);

// 2. Declarar uma variável indefinido sem atribuir nenhum valor
let indefinido;

// Verificar se indefinido é NaN usando a função isNaN
let indefinidoEhNaN = isNaN(indefinido);
console.log("indefinido é NaN:", indefinidoEhNaN);

// 3. Declarar uma variável numStr2 com o valor "123abc" e tentar convertê-la para um número
let numStr2 = "123abc";
let convertido = Number(numStr2);

// Verificar se o resultado é NaN
let resultadoEhNaN = isNaN(convertido);
console.log("Resultado da conversão de '123abc' é NaN:", resultadoEhNaN);