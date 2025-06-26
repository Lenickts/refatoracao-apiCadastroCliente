import { atualizarDados, adicionarCadastro, removerCadastro } from '../api/apiClient.js';
import { renderizarLista } from './render.js';
import { validarCadastro } from '../utils.js';
import { Cliente } from '../classes.js';

export function configurarEventos() {
    const cadastro = document.getElementById("listaCadastros");
    const btn = document.getElementById("btn");
    const btnAtt = document.getElementById("btn-att");

    btn.addEventListener("click", async () => {
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();

        if (!validarCadastro(nome, email)) return;
        
        //Instanciando a Classe
        const novoCliente = new Cliente(nome, email);
        await adicionarCadastro({
            nome: novoCliente.nome,
            email: novoCliente.email
        });     
        
        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";

        const listaDeCadastros = await atualizarDados();
        renderizarLista(listaDeCadastros, cadastro);
    });

    //Botão de atualizar dados
    btnAtt.addEventListener("click", async () => {
        const listaDeCadastros = await atualizarDados();
        renderizarLista(listaDeCadastros, cadastro);
        console.log(listaDeCadastros)
    });

    cadastro.addEventListener("click", async (event) => {
        if (event.target.classList.contains("excluir")) {
            const id = event.target.dataset.id;
            try {
                const response = await removerCadastro(id);
                if (response.ok) {
                    event.target.parentElement.remove();
                } else {
                    console.error("Erro da API:", response.status);
                }
            } catch (erro) {
                console.error("Erro ao excluir:", erro);
            }
        }
    });
}