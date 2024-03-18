/*
Como você pode remover o último elemento de um array em 
JavaScript?
*/

O método pop() remove o último elemento de um array e retorna aquele elemento.

var Alunos = ["thaua", "marans", "roa", "samuel"];

console.log(Alunos); // ["thaua", "marans", "roa", "samuel"]

var AlunosPop = Alunos.pop();

console.log(Alunos); // ["thaua", "marans", "roa" ]

console.log(AlunosPop); // 'samuel'