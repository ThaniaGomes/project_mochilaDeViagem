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

        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual
        //garantindo que esta pegando elemento correto e o atualizando
    } else {
        itemAtual.id = itens[itens.length -1] ? (itens[itens.length -1]).id +1 : 0 
        //se nao tiver nada no array id igual 0 se ja tiver algo no id ultimo elemento o id +1

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
