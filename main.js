const tarefa_input = document.querySelector('.tarefa_input');
const Botao_envio = document.querySelector('.Botao_envio');
const lista_tarefas = document.querySelector('.lista_tarefa');

Botao_envio.addEventListener('click', star)

tarefa_input.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        star();

    }
}) // execulta ao presionar 'enter'


function star() {
    if (!tarefa_input.value) return;
    crindo_tarefa(tarefa_input.value)
}// função que verifica se a caixa esta vazia e inicia a porra toda. 

function cria_tag_li() {
    const li = document.createElement('li') //cria tag 'li'
    return li; // retorna tag
}

function crindo_tarefa(texto_input) {

    const lista = cria_tag_li();
    lista.innerText = texto_input;
    lista_tarefas.appendChild(lista); // dou um filho a 'ul'.
    limpa_input();
    delet(lista);
    save_tarefas()

} //registro as tarefas .

function limpa_input() {

    tarefa_input.value = '';
    tarefa_input.focus();

}// limpo input.

function delet(lista) {

    lista.innerText += ' ';
    const botom_del = document.createElement('button');
    botom_del.innerHTML = 'Apagar';
    botom_del.setAttribute('class', 'Apagar');
    botom_del.setAttribute('title', 'Apagar essa tarefa');
    lista.appendChild(botom_del);

} // crio um botão de del individual e colocos atributos nele.

function save_tarefas() {

    const lit = lista_tarefas.querySelectorAll('li');
    const lista_array = [];
    for (let tare of lit) {

        let tarefa_texto = tare.innerText;
        tarefa_texto = tarefa_texto.replace('Apagar', '').trim();
        lista_array.push(tarefa_texto);
        console.log(tarefa_texto, lista_array)
    }


}// aqui eu intero sobre os "LI", pego os valores e salvo em um array 

document.addEventListener('click', function (e) {

    const elemento = e.target;
    if (elemento.classList.contains('Apagar')) {

        elemento.parentElement.remove(); // removo o pai.
        save_tarefas() // salvo o atual estado.

    } //verifico sé onde eu cliquei possue a class "apagar".

})

