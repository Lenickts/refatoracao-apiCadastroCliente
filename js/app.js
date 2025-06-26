import { atualizarDados } from './api/apiClient.js';
import { renderizarLista } from './dom/render.js';
import { configurarEventos } from './dom/events.js';

document.addEventListener("DOMContentLoaded", async () => {
    const cadastro = document.getElementById("listaCadastros");
    const lista = await atualizarDados();
    renderizarLista(lista, cadastro);
    configurarEventos();
});