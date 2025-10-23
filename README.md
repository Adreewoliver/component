Claro\! Um bom `README.md` é a porta de entrada do seu projeto. Ele deve explicar o que o projeto faz, quais tecnologias usa e como executá-lo.

Com base em tudo que construímos, aqui está uma sugestão de arquivo `README.md` completo.

-----

**Instruções:**

1.  Na pasta principal do seu projeto (onde está o `index.html`), crie um novo arquivo chamado `README.md`.
2.  Copie e cole o texto abaixo dentro dele.

-----

# Portal de Vagas (Projeto CRUD)

Um projeto de portal de vagas de emprego completo, desenvolvido com HTML, CSS e JavaScript puro. O sistema implementa todas as operações de um **CRUD** (Create, Read, Update, Delete) para gerenciar as vagas, que são armazenadas diretamente no `localStorage` do navegador.

O projeto utiliza **Web Components** (com Custom Elements e Shadow DOM) para criar os cards de vaga reutilizáveis e JavaScript moderno (Módulos ES6) para organizar a lógica da aplicação.

## ✨ Funcionalidades

O portal permite que os usuários realizem as seguintes ações:

  * **Create (Criar):**

      * Cadastrar uma nova vaga através de um formulário (`pagina5.html`).
      * Fazer **upload de uma imagem** para a vaga (a imagem é convertida para Base64 e salva no `localStorage`).

  * **Read (Ler):**

      * Listar todas as vagas cadastradas na página inicial (`index.html`).
      * Ver os detalhes completos de uma vaga específica (`pagina2.html`).
      * Simular um fluxo de candidatura (`pagina3.html` e `pagina4.html`).

  * **Update (Atualizar):**

      * Editar as informações de uma vaga existente (`pagina_editar.html`).
      * Manter ou substituir a imagem da vaga durante a edição.

  * **Delete (Apagar):**

      * Apagar uma vaga específica diretamente do card na página inicial.
      * Apagar **todas** as vagas cadastradas com um clique (botão no rodapé).

## 🛠️ Tecnologias Utilizadas

  * **`HTML5`**: Estrutura semântica para todas as páginas.
  * **`CSS3`**: Estilização completa, incluindo Flexbox, Gradientes e design de formulários.
  * **`JavaScript (ES6+)`**:
      * **Módulos (import/export):** Para organizar o código (`app.js`).
      * **DOM Manipulation:** Para criar e atualizar a interface.
      * **`async/await`:** Usado no formulário de cadastro/edição para processar o upload de imagem.
  * **Web Components:**
      * **Custom Elements (`CardNews.js`):** Para criar o componente `<card-news>`.
      * **Shadow DOM:** Para encapsular o estilo e a estrutura do card.
      * **Custom Events:** Para comunicar a ação de "apagar" do card para a página principal.
  * **APIs do Navegador:**
      * **`LocalStorage API`**: Usada como "banco de dados" para persistir as vagas.
      * **`FileReader API`**: Para ler o arquivo de imagem enviado pelo usuário e convertê-lo para Base64.

## 🚀 Como Executar

Este projeto é 100% *client-side*, o que significa que não precisa de um *backend* ou banco de dados para funcionar.

1.  Clone ou baixe este repositório para sua máquina local.
2.  Abra a pasta do projeto.

**Opção 1: Servidor Local (Recomendado)**

Devido ao uso de Módulos JavaScript (`import`/`export`), a forma mais confiável de executar o projeto é através de um servidor local.

  * Se você usa o **VS Code**, pode instalar a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
  * Clique com o botão direito no arquivo `index.html` e selecione "Open with Live Server".

**Opção 2: Abrir o arquivo (Pode falhar)**

  * Abra o arquivo `index.html` diretamente no seu navegador.
  * *Nota: Alguns navegadores (como o Chrome) têm restrições de segurança (CORS) para carregar Módulos JS a partir do sistema de arquivos (`file:///...`) e podem apresentar erros no console. O Firefox geralmente funciona bem.*

## 📁 Estrutura do Projeto

```
.
├── index.html          # Página inicial (listagem de vagas)
├── pagina2.html        # Detalhes da vaga
├── pagina3.html        # Formulário de candidatura
├── pagina4.html        # Confirmação de candidatura
├── pagina5.html        # Formulário de cadastro de nova vaga
├── pagina_editar.html  # Formulário de edição de vaga
├── card.css            # Folha de estilos principal
├── README.md           # Este arquivo
│
├── src/
│   ├── app.js          # Módulo central com a lógica de dados (get/save/update/delete)
│   └── components/
│       └── CardNews.js # O Web Component do card de vaga
│
└── assets/
    ├── images.jpeg     # Imagem padrão de vaga
    └── mutley4.jpg     # Imagem da página de cadastro
```

## ✒️ Autor

Desenvolvido por **Adriano de Oliveira Santos**.
