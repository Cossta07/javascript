/*

Como você pode remover um elemento específico de um array 
em JavaScript?
Resposta:
Para remover um elemento de uma posição qualquer, 
primeiro se faz necessário localizar este elemento dentro do array. Para isso, podemos utilizar o método indexOf().
Depois de localizar o índice, podemos utilizar o método splice() para remover o elemento desejado.
*/
var numeros = [1, 2, 3, 4, 5, 7, 8, 9, 10];
var index = numeros.indexOf(3);
if (index > -1) {
    numeros.splice(index, 1);
  }