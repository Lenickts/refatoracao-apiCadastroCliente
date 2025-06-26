export class Cliente{
    constructor(nome, email) {
        this.nome = nome;
        this.email = email || "Sem e-mail";
    }
}