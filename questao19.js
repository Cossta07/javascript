/*
Como você pode definir uma função de retorno de chamada 
(callback) em JavaScript?
*/

function somar(a, b, callback) {
    const resultado = a + b;
    callback(resultado);
  }
  
  function imprimirResultado(resultado) {
    console.log("O resultado é: " + resultado);
  }
  
  somar(5, 3, imprimirResultado);