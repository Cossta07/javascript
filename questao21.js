/*
Como você pode verificar se um objeto contém uma determinada 
propriedade em JavaScript?
Resposta:
método hasOwnProperty
*/
const carro = {
    marca: 'Ford',
    modelo: 'Mustang',
    ano: 2020
  };

  console.log(carro.hasOwnProperty('marca')); // true
  console.log(carro.hasOwnProperty('cor')); // false