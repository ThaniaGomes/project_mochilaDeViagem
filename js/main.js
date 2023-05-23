const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")

form.addEventListener("submit", (evento)=> {
    evento.preventDefault()

    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)

    evento.target.elements['nome'].value = ""
    evento.target.elements['quantidade'].value = ""
})

function criaElemento(nome, quantidade){ 
    //funcao responsavel por criar novos elementos na pagina
    // <li class="item"><strong>7</strong>Camisas</li>

    const novoIten = document.createElement("li") // cria uma li
    novoIten.classList.add("item") // add class chamada item
    const numeroItem = document.createElement("strong") // add strong com valor

    numeroItem.innerHTML = quantidade // para o html receber a quantidade
    novoIten.appendChild(numeroItem) //inserie um elemento criado dentro do outro
    novoIten.innerHTML += nome // acresentar o nome do objeto ao inner

    lista.appendChild(novoIten)
}
