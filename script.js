const posts = {
    1: {
      title: "Top 5 Looks de Inverno",
      author: "Luna Marques",
      date: "02/05/2025",
      category: "Moda",
      readingTime: "3 min",
      body: `
        Se você ama moda, prepare-se para se inspirar com os looks mais lindos desta estação!
        Neste post mostramos como combinar casacos, botas e acessórios para arrasar no frio.
      `,
      tags: ["#inverno", "#estilo"]
    },
    2: {
      title: "Rotina de Skincare Ideal",
      author: "Bia Costa",
      date: "30/04/2025",
      category: "Beleza",
      readingTime: "2 min",
      body: `
        Ter uma rotina de cuidados com a pele pode transformar seu dia. 
        Veja os passos essenciais: limpeza, hidratação e proteção — simples e eficaz!
      `,
      tags: ["#skincare", "#beleza"]
    }
  };
  posts[3] = {
    title: "Decoração de Quarto Tumblr",
    author: "Clara Fernandes",
    date: "28/04/2025",
    category: "Lifestyle",
    readingTime: "4 min",
    body: `Quer deixar seu quarto com a sua cara? Aposte em pisca-pisca, colagens, almofadas fofas e quadros inspiradores. É fácil criar um espaço único e aconchegante!`,
    tags: ["#decoração", "#quarto"]
  };
  
  posts[4] = {
    title: "Playlist para Relaxar 🌙",
    author: "Isa Martins",
    date: "25/04/2025",
    category: "Música",
    readingTime: "2 min",
    body: `Nada melhor que uma música suave para acalmar a mente. Separamos uma seleção de artistas e sons perfeitos para aquele momento de paz.`,
    tags: ["#playlist", "#relax"]
  };
  
  posts[5] = {
    title: "Looks com Tênis Branco 👟",
    author: "Sofia Nunes",
    date: "22/04/2025",
    category: "Moda",
    readingTime: "3 min",
    body: `O tênis branco combina com TUDO! Calças, vestidos, saias... É um must-have no seu guarda-roupa. Inspire-se com essas ideias de combinações lindas.`,
    tags: ["#moda", "#tênis"]
  };
  
  posts[6] = {
    title: "Filmes para Chorar e Amar 💔",
    author: "Valentina Rocha",
    date: "20/04/2025",
    category: "Entretenimento",
    readingTime: "5 min",
    body: `Prepare a pipoca e o coração! Reunimos filmes que misturam romance, drama e emoção para aquecer sua alma (e derramar umas lágrimas).`,
    tags: ["#filmes", "#emoção"]
  };
  
  
  function getPostIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
  }
  
  function showPost() {
    const id = getPostIdFromURL();
    const post = posts[id];
  
    if (post) {
      document.getElementById("post-title").textContent = post.title;
      document.getElementById("post-meta").textContent =
        `Por ${post.author} · ${post.date} · Categoria: ${post.category} · ⏱️ ${post.readingTime}`;
      document.getElementById("post-body").textContent = post.body;
  
      const tagsDiv = document.getElementById("post-tags");
      post.tags.forEach(tag => {
        const span = document.createElement("span");
        span.className = "badge bg-lilac text-white me-2";
        span.textContent = tag;
        tagsDiv.appendChild(span);
      });
    } else {
      document.getElementById("post-title").textContent = "Postagem não encontrada";
      document.getElementById("post-body").textContent = "Verifique o link e tente novamente.";
    }
  }
  
  if (window.location.pathname.includes("post.html")) {
    showPost();
  }
  