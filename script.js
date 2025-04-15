const frases = [
    `"A leitura é, provavelmente, uma outra maneira de estar em um lugar." — José Saramago`,
    `"Um livro, uma caneta, uma criança e um professor podem mudar o mundo." — Malala Yousafzai`,
    `"A leitura engrandece a alma." — Voltaire`,
    `"Ler é sonhar pela mão de outro." — Fernando Pessoa`,
    `"Quem compartilha um livro, compartilha um universo." — Desconhecido`,
    `"A leitura é uma viagem sem fim." — Anônimo`,
    `"Os livros são os nossos melhores amigos." — Anônimo`,
    `"Ler é viver mil vidas em uma só." — Anônimo`,
    `"Um livro é um sonho que você pode segurar na mão." — Neil Gaiman`,
    `"A leitura é a chave para a liberdade." — Oprah Winfrey`,
    `"Cada livro é um mundo a ser explorado." — Anônimo`
  ];
  document.getElementById("frase").innerText = frases[Math.floor(Math.random() * frases.length)];
  
  let usuarioLogado = null;
  const livros = [
    { titulo: "Ao meu amigo Caio", autor: "Sandra Saruê", imagem: "amigocaio.jpeg", estoque: 1, destaque: true, sinopse: "Uma homenagem tocante à amizade e memória." },
    { titulo: "MALALA", autor: "MALALA", imagem: "malala.jpeg", estoque: 10, sinopse: "A incrível história de uma menina que defendeu o direito à educação." },
    { titulo: "Na minha Pele", autor: "Lázaro Ramos", imagem: "naminhapele.jpeg", estoque: 10, sinopse: "Reflexões sobre a vida e as diferenças raciais." },
    { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-exupéry", imagem: "osoleparatodos.jpg", estoque: 1, sinopse: "A fábula universal sobre o amor, a amizade e o sentido da vida." },
    { titulo: "O Sol é para todos", autor: "Desconhecido", imagem: "ocacadordepipas.jpeg", estoque: 10, sinopse: "A luta pela justiça e direitos humanos." },
    { titulo: "O Caçador de Pipas", autor: "Desconhecido", imagem: "ocacadordepipas.jpeg", estoque: 5, sinopse: "Uma história sobre redenção e perdão." }
  ];
  
  function mostrarCadastro() {
    document.getElementById('login').classList.add('hidden');
    document.getElementById('cadastro').classList.remove('hidden');
  }
  
  function mostrarLogin() {
    document.getElementById('cadastro').classList.add('hidden');
    document.getElementById('login').classList.remove('hidden');
  }
  
  function fazerLogin() {
    const nome = document.getElementById('loginNome').value;
    const nascimento = document.getElementById('loginNascimento').value;
    if (nome && nascimento) {
      usuarioLogado = { nome, nascimento };
      mostrarLivros();
      document.getElementById('login').classList.add('hidden');
      document.getElementById('vitrine').classList.remove('hidden');
    } else {
      alert("Preencha os campos corretamente!");
    }
  }
  
  function fazerCadastro() {
    const nome = document.getElementById('cadNome').value;
    const nascimento = document.getElementById('cadNascimento').value;
    const tipo = document.getElementById('cadTipo').value;
    if (nome && nascimento && tipo) {
      usuarioLogado = { nome, nascimento, tipo };
      mostrarLivros();
      document.getElementById('cadastro').classList.add('hidden');
      document.getElementById('vitrine').classList.remove('hidden');
    } else {
      alert("Preencha os campos corretamente!");
    }
  }
  
  function mostrarLivros() {
    const livrosContainer = document.getElementById('livrosContainer');
    livrosContainer.innerHTML = '';
    livros.forEach(livro => {
      const livroDiv = document.createElement('div');
      livroDiv.classList.add('card');
      livroDiv.setAttribute('data-destaque', livro.destaque);
      livroDiv.innerHTML = `
        <img src="imagens/${livro.imagem}" alt="${livro.titulo}">
        ${livro.destaque ? '<div class="etiqueta-destaque">Destaque</div>' : ''}
        <h3>${livro.titulo}</h3>
        <p class="sinopse">${livro.sinopse}</p>
        <p class="estoque">Estoque: ${livro.estoque}</p>
        <button class="btn-emprestar" ${livro.estoque === 0 ? 'disabled' : ''}>Emprestar</button>
        <button class="btn-devolver">Devolver</button>
      `;
      livrosContainer.appendChild(livroDiv);
    });
  }
  