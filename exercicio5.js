//Manipulação de Arrays
let numeros = [10, 20, 30, 40, 50];

console.log("Array original:", numeros);

// 2. Usar o método push para adicionar o valor 60 ao final do array e exibir o array atualizado
numeros.push(60);
console.log("Array após adicionar 60 com push:", numeros);

// 3. Usar o método pop para remover o último valor do array e exibir o valor removido e o array atualizado
let valorRemovido = numeros.pop();
console.log("Valor removido com pop:", valorRemovido);
console.log("Array após remover o último valor com pop:", numeros);

// 4. Usar o método splice para remover o terceiro elemento do array (número 30) e exibir o array atualizado
numeros.splice(2, 1); // Remove 1 elemento na posição 2 (terceiro elemento)
console.log("Array após remover o terceiro elemento com splice:", numeros);

numeros.sort((a, b) => b - a);
console.log("Array ordenado em ordem decrescente:", numeros);