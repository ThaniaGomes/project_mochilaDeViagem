const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || []

itens.forEach( (elemento) => {
    criaElemento(elemento)
} )

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    const existe = itens.find( elemento => elemento.nome === nome.value )

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    if (existe) {
        itemAtual.id = existe.id
        
        atualizaElemento(itemAtual)

        itens[existe.id] = itemAtual
    } else {
        itemAtual.id = itens.length

        criaElemento(itemAtual)

        itens.push(itemAtual)
    }

    localStorage.setItem("itens", JSON.stringify(itens))

    nome.value = ""
    quantidade.value = ""
})

function criaElemento(item) {
    const novoItem = document.createElement("li")
    novoItem.classList.add("item")

    const numeroItem = document.createElement("strong")
    numeroItem.innerHTML = item.quantidade
    numeroItem.dataset.id = item.id
    novoItem.appendChild(numeroItem)
    
    novoItem.innerHTML += item.nome

    novoItem.appendChild(botaoDeleta(item.id)) //adicionar a funcao como filho do elemento
    lista.appendChild(novoItem)
}

function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}

function botaoDeleta(id){
    const elementoBotao = document.createElement("button") //criar botao
    elementoBotao.innerText = "X" // vai receber um x

    elementoBotao.addEventListener("click", function(){ // responsavel por ouvir o click
        deletaElemento(this.parentNode, id) // responsavel por identificar o elemento clicado e passar pai dele pra funcao
    })
    return elementoBotao
}

function deletaElemento(tag, id){ //funcao que vai deletar o elemento pai
    tag.remove()

    itens.splice(itens.findIndex(elemento => elemento === id), 1) 
    //procurar um elemento dentro do array pra deletar
    //eu acho o elemento onde o id é igual ao id que eu acabei de clicar para remover, e o deleto. 

    localStorage.setItem("itens", JSON.stringify(itens))
    //para atualizar o local storage.
}
