# 📝 Refatoração do projeto Cadastro de Usuários com API CRUD

O [projeto original](https://github.com/Lenickts/postman-cadastrarCliente) tinha o foco de praticar consumo de APIs e operações CRUD (Create, Read, Update, Delete). Esse novo modelo tem o foco em Modularização dos arquivos, separando-os por pastas.

## ✨ Funcionalidades
- **Cadastrar usuários** (nome e e-mail)
- **Listar todos os cadastros** em tempo real
- **Excluir registros** com confirmação visual
- Interface responsiva com feedbacks claros

## 🛠️ Tecnologias
- **Frontend**: HTML5, CSS3 (Flexbox), JavaScript (ES6+)
- **API**: [Retool API](https://retoolapi.dev/) (backend RESTful simulado)
- **Ferramentas**: Postman (para testes de API)

## 🎨 Estrutura do código
- **index.html**      > Estrutura principal
- **style.css**       > Estilos com Flexbox
- **js*
    - **api/**        > Comunicação com API
    - **classes.js**    > Modelos de dados
    - **dom/**        > Manipulação do DOM
    - **utils.js**      > Utilitários
    - **app.js**      > Main

## 💡 Aprendizados
- Consumo de APIs com Fetch
- Tratamento de erros assíncronos
- Manipulação dinâmica do DOM
- Testes de API com Postman
