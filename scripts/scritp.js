import {criarItemDaLista} from "./criarItemDaLista.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia();
})

const mensagemItemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia(){
    const itensDaLista = listaDeCompras.querySelectorAll("li");
    
    if(itensDaLista.length === 0){
        mensagemItemListaVazia.style.display = "block";
    } else {
        mensagemItemListaVazia.style.display = "none";
    }
}

verificarListaVazia();
