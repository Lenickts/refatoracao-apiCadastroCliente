import { urlAPI } from './constants.js';

export function atualizarDados() {
    return fetch(urlAPI)
        .then(apiReturn => apiReturn.json());
}

export function adicionarCadastro(cliente) {
    return fetch(urlAPI, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            nome: cliente.nome,
            email:cliente.email
        })
    }).then(resposta => resposta.json());
}

export function removerCadastro(id) {
    return fetch(`${urlAPI}/${id}`, {
        method: "DELETE"
    });
}