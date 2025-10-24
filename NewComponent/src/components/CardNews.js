// src/components/CardNews.js

class CardNews extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  // Chamado quando o elemento é conectado ao DOM
  connectedCallback() {
    // Armazena o ID da vaga. Importante para os botões.
    this.vagaId = this.getAttribute("vaga-id");
    this.render();
  }

  // Função que constrói o HTML interno
  render() {
    const shadow = this.shadowRoot;
    shadow.innerHTML = ''; // Limpa o conteúdo anterior

    // --- Estrutura ---
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card-left");

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card-right");

    // --- Conteúdo Lado Esquerdo ---
    const spanTop = document.createElement("span");
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

    // --- Botões de Ação ---
    const acoesContainer = document.createElement("div");
    acoesContainer.classList.add("acoes-container");

    // Botão Ver Detalhes
    const botaoVer = document.createElement("a");
    botaoVer.href = this.getAttribute("link") || "#";
    botaoVer.textContent = "Ver Detalhes";
    botaoVer.classList.add("botao");

    // Botão Editar
    const botaoEditar = document.createElement("a");
    botaoEditar.href = `pagina_editar.html?id=${this.vagaId}`;
    botaoEditar.textContent = "Editar";
    botaoEditar.classList.add("botao", "botao-editar");

    // Botão Apagar
    const botaoApagar = document.createElement("button");
    botaoApagar.textContent = "Apagar";
    botaoApagar.classList.add("botao", "botao-apagar");

    botaoApagar.addEventListener('click', () => {
      if (confirm(`Tem certeza que deseja apagar a vaga: "${this.getAttribute("titulo")}"?`)) {
        // Dispara um evento customizado que o index.html pode "ouvir"
        this.dispatchEvent(new CustomEvent('delete-vaga', {
          detail: { id: this.vagaId },
          bubbles: true,
          composed: true
        }));
      }
    });
    
    acoesContainer.appendChild(botaoVer);
    acoesContainer.appendChild(botaoEditar);
    acoesContainer.appendChild(botaoApagar);

    // --- Conteúdo Lado Direito ---
    const imagem = document.createElement("img");
    imagem.src = this.getAttribute("imagem") || "./assets/images.jpeg";
    imagem.alt = "Imagem da vaga";

    // --- Montagem ---
    cardLeft.appendChild(spanTop);
    cardLeft.appendChild(autorSpan);
    cardLeft.appendChild(titulo);
    cardLeft.appendChild(descricao);
    cardLeft.appendChild(acoesContainer);
    cardRight.appendChild(imagem);
    card.appendChild(cardLeft);
    card.appendChild(cardRight);

    // --- Estilos ---
    const style = document.createElement("style");
    style.textContent = `
      .card {
        display: flex; justify-content: space-between; align-items: center;
        background: #071d56ff; max-width: 900px; margin: 20px;
        padding: 20px; border-radius: 20px; box-shadow: 0 4px 10px rgba(6, 6, 6, 0.1);
        font-family: Arial, sans-serif; flex-basis: 45%; min-width: 400px;
      }
      .card-left { flex: 1; padding: 20px; }
      .card-left h1 { font-size: 1.5em; margin-top: 10px; }
      .card-left p { font-size: 0.9em; margin-top: 10px; }
      .card-right img {
        width: 150px; height: 150px; object-fit: cover;
        border-radius: 10px; margin-left: 15px;
      }
      .acoes-container {
        margin-top: 15px; display: flex;
        gap: 10px; align-items: center; flex-wrap: wrap;
      }
      .botao {
        display: inline-block; background-color: #0078d4; color: #fff;
        padding: 10px 15px; text-decoration: none; border-radius: 10px;
        font-weight: bold; border: none; cursor: pointer; font-size: 14px;
      }
      .botao:hover { background-color: #005fa3; }
      .botao-editar { background-color: #f0ad4e; }
      .botao-editar:hover { background-color: #ec971f; }
      .botao-apagar { background-color: #d9534f; }
      .botao-apagar:hover { background-color: #c9302c; }
    `;

    shadow.appendChild(style);
    shadow.appendChild(card);
  }
}

customElements.define("card-news", CardNews);