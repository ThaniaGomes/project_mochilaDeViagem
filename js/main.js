const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || [] 
// ver se tem algo la no LS caso tenho pegar caso nao tenho retornar um array vazio
//json parse usado pra transformar devolta em array que transformamos em string pro lS receber

itens.forEach ((elemento) => {
    console.log(elemento.nome, elemento.quantidade)
})

form.addEventListener("submit", (evento)=> {

    evento.preventDefault() //parar comportamento padrão do site para n voltar dados para propria pag.

    const nome = evento.target.elements['nome'] //chamar o elemento
    const quantidade = evento.target.elements['quantidade'] //--

    criaElemento(nome.value, quantidade.value) //acessar o elemento

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

    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade
    } //criaçao de cada novo item

    itens.push(itemAtual) //inserir o item atual dentro do array itens

    localStorage.setItem("itens", JSON.stringify(itens)) 
    //salvar objeto transformado em string pelo json dentro do localStorage (array)
    //{"nome":"camisa","quantidade":"1"}

}
