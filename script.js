const postsData = [
  {
    id: 1,
    title: "Dicas de Moda para Arrasar no Verão",
    excerpt: "Quer se sentir linda e confortável no calor? Confira as melhores tendências para a estação mais quente do ano!",
    body: "O verão pede roupas leves, cores vibrantes e tecidos fresquinhos como linho e algodão. Invista em vestidos fluidos, shorts jeans e blusinhas cropped. As estampas tropicais e as cores alegres como amarelo, coral e verde água estão em alta. Não esqueça dos acessórios: óculos de sol grandes e sandálias rasteiras completam o look perfeito para o verão!",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Cuidados com a Pele: Rotina Diária",
    excerpt: "Aprenda a montar uma rotina de cuidados simples...",
    body: "Limpeza, hidratação e proteção solar são os passos básicos para uma pele saudável. Pela manhã: lave o rosto com um gel de limpeza suave, aplique um hidratante facial e finalize com protetor solar FPS 30 ou superior. À noite: remova toda a maquiagem, lave o rosto novamente e aplique um sérum com vitamina C ou retinol para renovação celular. Duas vezes por semana, faça uma esfoliação suave para remover as células mortas.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Makeup Natural para o Dia a Dia",
    excerpt: "Quer uma maquiagem rápida e leve para o cotidiano?",
    body: "Comece com um primer, aplique uma base leve ou BB cream para uniformizar o tom da pele. Use um corretivo apenas onde necessário. Para os olhos, um lápis marrom aplicado de forma suave e um rímel marrom dão um efeito natural. Finalize com um blush em tom rosado e um batom nude ou gloss. Essa maquiagem leva menos de 10 minutos e deixa você pronta para o dia!",
    image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Tendências de Acessórios para 2025",
    excerpt: "Conheça os acessórios que vão bombar no próximo ano.",
    body: "Brincos grandes, correntes douradas e tiaras estilosas serão os destaques. As pérolas continuam em alta, mas agora em designs mais modernos e descontraídos. As bolsas mini ainda são tendência, mas as médias (tamanho médio) estão voltando com tudo. Para os pés, sandálias de tiras finas e sapatilhas confortáveis com detalhes metálicos. Não esqueça dos óculos de sol com armações oversize!",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Dicas para Cabelos Saudáveis",
    excerpt: "Aprenda os cuidados essenciais para manter seus cabelos brilhantes...",
    body: "Use shampoos adequados, hidrate regularmente e evite o excesso de calor. Lave os cabelos com água morna ou fria, nunca muito quente. Aplique máscaras de hidratação 1-2 vezes por semana. Corte as pontas a cada 3 meses para evitar o aparecimento de pontas duplas. Proteja os cabelos do sol e do cloro da piscina. Uma alimentação rica em proteínas e vitaminas também reflete na saúde dos fios!",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Inspirações de Looks para Festas",
    excerpt: "Veja ideias de looks estilosos e elegantes...",
    body: "Vestidos com brilho, saltos poderosos e acessórios marcantes são perfeitos para festas. Para eventos noturnos, aposte em cores escuras como preto, vinho ou azul marinho combinadas com detalhes metálicos. Para festas diurnas, vestidos florais ou em cores pastel ficam lindos. Não tenha medo de ousar nos acessórios - uma bolsa brilhante ou brincos grandes podem transformar um look simples em algo especial!",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Alimentação Saudável para a Beleza",
    excerpt: "Descubra como uma alimentação balanceada pode refletir...",
    body: "Inclua frutas, verduras, proteínas magras e gorduras boas na sua dieta. Alimentos ricos em vitamina C (como laranja e acerola) ajudam na produção de colágeno. Castanhas e sementes fornecem vitamina E, que protege a pele. Peixes como salmão são ricos em ômega-3, que ajuda a manter a pele hidratada. Não se esqueça de beber pelo menos 2 litros de água por dia para manter a pele e cabelos hidratados!",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "Exercícios para Melhorar a Postura",
    excerpt: "Postura correta faz toda diferença!",
    body: "Alongamentos diários, fortalecimento do core e exercícios de conscientização corporal podem melhorar muito sua postura. Pratique yoga ou pilates para aumentar a consciência postural. Exercícios como prancha, ponte e alongamento de peitoral são ótimos para corrigir ombros curvados. Lembre-se de ajustar sua estação de trabalho - monitor na altura dos olhos, pés apoiados no chão e coluna reta contra o encosto da cadeira.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    title: "Como Organizar seu Espaço de Trabalho",
    excerpt: "Um espaço organizado aumenta a produtividade...",
    body: "Use organizadores, mantenha apenas o essencial na mesa e crie um sistema de arquivamento. Comece eliminando tudo que não usa - guarde apenas o necessário. Use porta-trecos, pastas e gavetas organizadoras. Mantenha cabos arrumados com abraçadeiras. Escolha uma decoração minimalista que inspire calma e concentração. Uma planta no ambiente traz vida e melhora a qualidade do ar. Reserve 10 minutos no final do dia para reorganizar tudo!",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    title: "Técnicas de Meditação para Iniciantes",
    excerpt: "Aprenda técnicas simples de meditação para reduzir o estresse.",
    body: "Reserve alguns minutos por dia para meditar. Comece com 5 minutos e aumente gradualmente. Sente-se confortavelmente com a coluna ereta. Feche os olhos e concentre-se na respiração. Quando a mente divagar, gentilmente traga o foco de volta à respiração. Você pode usar apps guiados no início. Meditar regularmente reduz o estresse, melhora a concentração e promove bem-estar geral. Experimente fazer pela manhã para começar o dia com mais clareza!",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80"
  },
];

// Cria o card de postagem na index.html
function createPostCard(post) {
  const card = document.createElement('article');
  card.classList.add('post-card');
  card.innerHTML = `
    <img src="${post.image}" alt="${post.title}">
    <div class="post-content">
      <h3 class="post-title">${post.title}</h3>
      <p class="post-excerpt">${post.excerpt}</p>
      <button class="btn-read-more" data-id="${post.id}">Leia mais</button>
    </div>
  `;
  return card;
}

// Renderiza todos os cards
function renderPosts() {
  const postsContainer = document.getElementById('posts');
  if (!postsContainer) return;
  postsData.forEach(post => {
    const card = createPostCard(post);
    postsContainer.appendChild(card);
  });
}

// Navega para a página do post individual
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-read-more')) {
    const postId = e.target.dataset.id;
    window.location.href = `post.html?id=${postId}`;
  }
});

// Renderiza o conteúdo do post individual
function renderSinglePost() {
  const container = document.getElementById('single-post');
  if (!container) return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const post = postsData.find(p => p.id == id);
  if (!post) {
    container.innerHTML = "<p>Post não encontrado.</p>";
    return;
  }
  container.innerHTML = `
    <img src="${post.image}" alt="${post.title}">
    <h2>${post.title}</h2>
    <p>${post.body}</p>
  `;
}

// Executa só a função certa na página certa
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('posts')) {
    renderPosts();
  } else if (document.getElementById('single-post')) {
    renderSinglePost();
  }
});