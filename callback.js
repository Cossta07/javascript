function minhaFuncaoPrincipal(funcaoCallBack) {
    console.log("Executando lógica na minhaFuncaoPrincipal...")

    setTimeout(function(){
        console.log("Operação assícrona concluída...")

        //Chamada callBack
        funcaoCallBack();
    }, 2008)
}

function minhaCallBack() {
    console.log("CallBack executada")
}

minhaFuncaoPrincipal(minhaCallBack)