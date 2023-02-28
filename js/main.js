const formulario = document.querySelector('#novoItem');
const listaItens = JSON.parse(localStorage.getItem("itens")) || []; //consultando se o listaitens possui itens, senão cria um array vazio

listaItens.forEach((elemento)=>{
    criaElemento(elemento);
})

formulario.addEventListener("submit", (evento)=> {
    evento.preventDefault();
    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }
    const existe = listaItens.find(elemento => elemento.nome === nome.value);
    if(existe) {
        console.log('existe');
    }

    criaElemento(itemAtual);

    listaItens.push(itemAtual);
    
    localStorage.setItem("itens", JSON.stringify(listaItens));

    nome.value = "";
    quantidade.value = "";

})


function criaElemento (item) {

    const novoItem = document.createElement('li');
    novoItem.classList.add("item");

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = item.quantidade

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += item.nome;

    const lista = document.getElementById("lista");

    lista.appendChild(novoItem);


   
}

