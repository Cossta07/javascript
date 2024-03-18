/*

Como você pode verificar se uma variável é definida em 
JavaScript?
Resposta:
O typeof é uma palavra-chave em JavaScript que retornará o tipo da variável quando você a chama.
Você pode usá-la para validar parâmetros de função ou verificar se as variáveis estão definidas.
*/
let variavel;

if (typeof variavel !== 'undefined') {
    console.log('A variável está definida.');
} else {
    console.log('A variável não está definida.');
}