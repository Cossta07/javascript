// Declaração de uma variável
//let nome; // Escopo de bloco
var idade; // Escopo global
const PI = 3.14; // Escopo global

function soma() {
  if(true) {
   var nome = "Costa"
    console.log(nome)
  }
  nome = "Samuel"
  console.log(nome)
}
soma()