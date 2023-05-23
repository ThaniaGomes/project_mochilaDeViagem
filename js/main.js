const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")

form.addEventListener("submit", (evento)=> {

    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    criaElemento(nome.value, quantidade.value)

    nome.value = "" //limpa formulario
    quantidade.value = "" //--
})

function criaElemento(nome, quantidade){ 
    //funcao responsavel por criar novos elementos na pagina
    // <li class="item"><strong>7</strong>Camisas</li>

    const novoIten = document.createElement("li") // cria uma li
    novoIten.classList.add("item") // add class chamada item
    const numeroItem = document.createElement("strong") // add strong com valor

    numeroItem.innerHTML = quantidade // para o html receber a quantidade
    novoIten.appendChild(numeroItem) //inserie um elemento criado dentro do outro responsavel pela bolinha com cor
    novoIten.innerHTML += nome // acresentar o nome do objeto ao inner

    lista.appendChild(novoIten)

    localStorage.setItem("nome", nome) //salvar info no local storage apenas 1 item
    localStorage.setItem("quantidade", quantidade) // --
}
