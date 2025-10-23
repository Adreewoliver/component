class CardNews extends HTMLElement {
  constructor() {
    super(); // Sempre chame super() primeiro

    // O constructor deve fazer o mínimo possível.
    // Apenas crie o shadow DOM.
    this.attachShadow({ mode: "open" });
  }

  // Esta função é chamada QUANDO o elemento é adicionado à página.
  // Neste ponto, os atributos JÁ EXISTEM.
  connectedCallback() {
    // Agora podemos chamar nossa função de renderização
    this.render();
  }

  // Criamos uma função para construir o card
  render() {
    // Pegamos o shadow root que criamos no constructor
    const shadow = this.shadowRoot;

    // Limpamos o shadow root para evitar duplicação se o elemento for movido
    shadow.innerHTML = '';

    // Estrutura principal do card
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card-left");

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card-right");

    // --- Conteúdo do card (AGORA COM OS ATRIBUTOS CORRETOS) ---
    const spanTop = document.createElement("span");
    // Agora this.getAttribute() vai funcionar
    spanTop.textContent = this.getAttribute("categoria") || "Vaga de Emprego";

    const autorSpan = document.createElement("span");
    autorSpan.textContent = `Por: ${this.getAttribute("nome") || "Empresa"}`;
    autorSpan.style.fontWeight = "bold";
    autorSpan.style.color = "#ccc";
    autorSpan.style.fontSize = "0.9em";

    const titulo = document.createElement("h1");
    titulo.textContent = this.getAttribute("titulo") || "Título da vaga";

    const descricao = document.createElement("p");
    let desc = this.getAttribute("descricao") || "Descrição da vaga...";
    if (desc.length > 100) {
      desc = desc.substring(0, 100) + "...";
    }
    descricao.textContent = desc;

    const botao = document.createElement("a");
    // O link agora será o correto (ex: pagina2.html?id=12345)
    botao.href = this.getAttribute("link") || "#"; 
    botao.textContent = "Ver Detalhes";
    botao.classList.add("botao");

    const imagem = document.createElement("img");
    imagem.src = this.getAttribute("imagem") || "./assets/images.jpeg";
    imagem.alt = "Imagem da vaga";

    // Montagem
    cardLeft.appendChild(spanTop);
    cardLeft.appendChild(autorSpan);
    cardLeft.appendChild(titulo);
    cardLeft.appendChild(descricao);
    cardLeft.appendChild(botao);

    cardRight.appendChild(imagem);

    card.appendChild(cardLeft);
    card.appendChild(cardRight);

    // Estilos internos (copiados do seu original)
    const style = document.createElement("style");
    style.textContent = `
      .card {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #071d56ff;
        max-width: 900px;
        margin: 20px;
        padding: 20px;
        border-radius: 20px;
        box-shadow: 0 4px 10px rgba(6, 6, 6, 0.1);
        font-family: Arial, sans-serif;
        flex-basis: 45%;
        min-width: 400px;
      }

      .card-left {
        flex: 1;
        padding: 20px;
      }
      
      .card-left h1 {
        font-size: 1.5em;
        margin-top: 10px;
      }

      .card-left p {
        font-size: 0.9em;
        margin-top: 10px;
      }

      .card-right img {
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 10px;
        margin-left: 15px;
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