// Função para iniciar o jogo
function startGame() {
    // Adicione aqui o código para iniciar o jogo
    alert("O jogo está começando!");
  }
  
  // Criando elementos HTML dinamicamente
  const inicioDiv = document.createElement("div");
  inicioDiv.classList.add("inicio");
  
  const titulo = document.createElement("h1");
  titulo.textContent = "Bem-vindo ao Meu Jogo";
  
  const descricao = document.createElement("p");
  descricao.textContent = "Clique no botão para começar:";
  
  const botaoComecar = document.createElement("button");
  botaoComecar.textContent = "Começar";
  botaoComecar.id = "startButton";
  botaoComecar.addEventListener("click", startGame);
  
  // Adicionando elementos à div de início
  inicioDiv.appendChild(titulo);
  inicioDiv.appendChild(descricao);
  inicioDiv.appendChild(botaoComecar);
  
  // Adicionando a div de início ao corpo da página
  document.body.appendChild(inicioDiv);
  
  // Estilo CSS para a tela de início
  const estiloInicio = document.createElement("style");
  estiloInicio.textContent = `
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      text-align: center;
    }
    .inicio {
      background-image: url('inicio.gif'); /* Adicione o caminho para sua imagem de fundo */
      background-size: cover;
      background-position: center;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    #startButton {
      padding: 10px 20px;
      font-size: 18px;
      cursor: pointer;
      background-image: url('btn_iniciar.png'); /* Adicione o caminho para a imagem do botão */
      background-color: transparent;
      background-size: cover;
      color: white;
      border: none;
      border-radius: 5px;
    }
  `;
  
  // Adicionando o estilo ao cabeçalho da página
  document.head.appendChild(estiloInicio);
  