const formulario = document.querySelector('#novoItem');
const listaItens = [];

formulario.addEventListener("submit", (evento)=> {
    evento.preventDefault();
    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    criaElemento(nome.value, quantidade.value);
    nome.value = "";
    quantidade.value = "";

})


function criaElemento (nome, quantidade) {

    const novoItem = document.createElement('li');
    novoItem.classList.add("item");

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome;

    const lista = document.getElementById("lista");

    lista.appendChild(novoItem);

    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade
    }

    listaItens.push(itemAtual);
    
    localStorage.setItem("chaveitens", JSON.stringify(listaItens));
   
}

