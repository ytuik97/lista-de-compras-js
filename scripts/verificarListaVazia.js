const mensagemItemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia(listaDeCompras){
    const itensDaLista = listaDeCompras.querySelectorAll("li");
    
    if(itensDaLista.length === 0){
        mensagemItemListaVazia.style.display = "block";
    } else {
        mensagemItemListaVazia.style.display = "none";
    }
}

export default verificarListaVazia;