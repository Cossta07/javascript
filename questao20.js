/*
Como você pode chamar uma função de retorno de chamada em 
JavaScript?
*/

// Definindo uma função de retorno de chamada
function minhaFuncaoDeRetorno(argumento) {
    console.log("exemplo " + exemplo);
}

// Função principal que aceita uma função de retorno de chamada como argumento
function funcaoPrincipal(funcaoDeRetorno) {
    // Chamando a função de retorno de chamada passando um argumento
    funcaoDeRetorno("exemplo");
}

// Chamando a função principal e passando a função de retorno de chamada como argumento
funcaoPrincipal(minhaFuncaoDeRetorno);