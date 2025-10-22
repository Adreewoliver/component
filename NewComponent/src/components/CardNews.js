class CardNews extends HTMLElement {
  constructor() {
    super();

    // Cria o shadow DOM (isolamento de estilo e estrutura)
    const shadow = this.attachShadow({ mode: "open" });

    // Estrutura principal do card
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    

    // Lado esquerdo
    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card-left");

    // Lado direito
    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card-right");

    // --- Conteúdo do card ---
    const spanTop = document.createElement("span");
    spanTop.textContent = this.getAttribute("categoria") || "Vaga de Emprego";

    const autorSpan = document.createElement("span");
    const imgAutor = document.createElement("img");
    
 
    autorSpan.appendChild(imgAutor);
    

    const titulo = document.createElement("h1");
    titulo.textContent = this.getAttribute("titulo") || "Título da vaga";

    const descricao = document.createElement("p");
    descricao.textContent = this.getAttribute("descricao") || "Descrição da vaga...";

    const botao = document.createElement("a");
    botao.href = this.getAttribute("link") || "#";
    botao.textContent = "Candidatar-se";
    botao.classList.add("botao");

    const imagem = document.createElement("img");
    imagem.src = this.getAttribute("imagem") || "./assets/images.jpeg";
    imagem.alt = "Imagem da vaga";

    // Montagem
    cardLeft.appendChild(spanTop);
    cardLeft.appendChild(document.createElement("br"));
    cardLeft.appendChild(autorSpan);
    cardLeft.appendChild(titulo);
    cardLeft.appendChild(descricao);
    cardLeft.appendChild(botao);

    cardRight.appendChild(imagem);

    card.appendChild(cardLeft);
    card.appendChild(cardRight);

    // Estilos internos (vinculados ao Shadow DOM)
    const style = document.createElement("style");
    style.textContent = `
      .card {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #071d56ff;
        max-width: 900px;
        margin: 40px auto;
        padding: 20px;
        border-radius: 20px;
        box-shadow: 0 4px 10px rgba(6, 6, 6, 0.1);
        font-family: Arial, sans-serif;
      }

      .card-left {
        flex: 1;
        padding: 20px;
      }

      .card-right img {
        width: 300px;
        border-radius: 10px;
      }

      .botao {
        display: inline-block;
        background-color: #0078d4;
        color: #fff;
        padding: 10px 20px;
        margin-top: 15px;
        text-decoration: none;
        border-radius: 10px;
        font-weight: bold;
      }

      .botao:hover {
        background-color: #005fa3;
      }

      img {
        vertical-align: middle;
      }
    `;

    // Adiciona tudo ao Shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(card);
  }
}

// Registra o novo elemento
customElements.define("card-news", CardNews);
