export function validarCadastro(nome, email) {
    if (nome.trim() === "") {
        alert("O nome é obrigatório.");
        return false;
    }
    return true;
}