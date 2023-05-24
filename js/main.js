const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || [] 

itens.forEach ((elemento) => {
    criaElemento(elemento.nome, elemento.quantidade)
})

form.addEventListener("submit", (evento)=> {

    evento.preventDefault() 

    const nome = evento.target.elements['nome'] 
    const quantidade = evento.target.elements['quantidade'] 
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    } 

    criaElemento(itemAtual) 
    itens.push(itemAtual) 
    localStorage.setItem("itens", JSON.stringify(itens)) 

    nome.value = "" 
    quantidade.value = "" 
})

function criaElemento(item){ 

    const novoIten = document.createElement("li") 
    novoIten.classList.add("item") 
    const numeroItem = document.createElement("strong") 

    numeroItem.innerHTML = item.quantidade 
    novoIten.appendChild(numeroItem)
    novoIten.innerHTML += item.nome 

    lista.appendChild(novoIten)

}

