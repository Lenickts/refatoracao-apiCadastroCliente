export function renderizarLista(listaDeCadastros, cadastro) {
    cadastro.innerHTML = "";

    const itens = listaDeCadastros.map(cliente => {
        const item = document.createElement("li");
        item.innerHTML = `${cliente.nome} - ${cliente.email || "Sem e-mail"} <button class="excluir" data-id="${cliente.id}">X</button>`;
        return item;
    });
    itens.forEach(item => cadastro.appendChild(item));
}