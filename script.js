// Dados da API com imagens relacionadas aos assuntos
const apiData = [
  {
    "thumbImage": "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
    "thumbImageAltText": "Google Notícias",
    "title": "Google Notícias completa 20 anos com redesign e fundo de apoio ao jornalismo independente",
    "description": "Na última semana, o Google apresentou uma nova versão para desktop do seu serviço de notícias. Após um redesign profundo, o Google Notícias promete informar mais sobre os temas que os usuários acompanham, com mais profundidade e facilidade de acesso – seja lendo no smartphone ou, agora, no computador.",
    "profileThumbImage": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    "profileName": "Fernando Silva",
    "postDate": "1/03/2022"
  },
  {
    "thumbImage": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    "thumbImageAltText": "MacBook Pro",
    "title": "Vendas do Macbook Pro com chip M2 começam nesta sexta-feira (24)",
    "description": "Durante a WWDC deste ano, a Apple anunciou diversas novidades em seus sistemas e produtos, incluindo um Macbook Air redesenhado e com a segunda geração de chips da empresa, o M2.",
    "profileThumbImage": "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&q=80",
    "profileName": "Paula Ramos",
    "postDate": "1/03/2022"
  },
  {
    "thumbImage": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    "thumbImageAltText": "Carro elétrico",
    "title": "Citroen Ami Buggy: O carro mais simpático que você já viu até hoje",
    "description": "17 minutos para esgotar e apenas 2 minutos e 53 segundos para vender a primeira unidade. Estes são os números (incríveis) das vendas das 50 unidades especiais e ultra limitadas do My Ami Buggy, da Citroen.",
    "profileThumbImage": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
    "profileName": "Rodrigo Silveira",
    "postDate": "1/03/2022"
  },
  {
    "thumbImage": "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=800&q=80",
    "thumbImageAltText": "Gaming",
    "title": "SEGA anuncia Hyenas, novo FPS no espaço pós-apocalíptico",
    "description": "O mundo dos jogos competitivos nunca foi tão diverso, e o anúncio feito pela SEGA nesta quarta-feira (22) promete contribuir com outro título promissor.",
    "profileThumbImage": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    "profileName": "Lucas Oliveira",
    "postDate": "10/06/2022"
  },
  {
    "thumbImage": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    "thumbImageAltText": "Metaverso VR",
    "title": "Metaverso explode em discussões na internet, mas público ainda tem receios",
    "description": "De acordo com números consolidados pela Comscore, apenas 24% dos comentários da internet sobre o metaverso são positivos. O motivo, por sua vez, seria o desconhecimento do público acerca do assunto, que ainda desperta dúvidas e receios em muita gente.",
    "profileThumbImage": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
    "profileName": "Maria Silva",
    "postDate": "10/06/2022"
  },
  {
    "thumbImage": "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    "thumbImageAltText": "Web3 e Blockchain",
    "title": "Como o metaverso e a web3 revolucionarão a vida e os negócios?",
    "description": "A ideia de criar mundos inteiramente fictícios e com possibilidades infinitas sempre encantou o ser humano. Seja nas antigas tradições orais, na literatura, nas telas do cinema ou nos jogos, mais recentemente, o desejo pela materialização daquilo que somente a criatividade e a mente podem elaborar move montanhas, além de muito dinheiro.",
    "profileThumbImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
    "profileName": "Debora Pacheco",
    "postDate": "10/06/2022"
  }
];

// Função para criar um card de post
function createPostCard(post, index) {
  const card = document.createElement('article');
  card.classList.add('post-card');
  
  card.innerHTML = `
    <img src="${post.thumbImage}" alt="${post.thumbImageAltText}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80'">
    <div class="post-content">
      <div class="post-meta">
        <img src="${post.profileThumbImage}" alt="${post.profileName}" onerror="this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80'">
        <span>${post.profileName} • ${post.postDate}</span>
      </div>
      <h3 class="post-title">${post.title}</h3>
      <p class="post-excerpt">${post.description}</p>
      <button class="btn-read-more" data-index="${index}">Leia mais</button>
    </div>
  `;
  
  return card;
}

// Função para renderizar todos os posts
function renderPosts() {
  const postsContainer = document.getElementById('posts');
  if (!postsContainer) return;
  
  // Limpar container (remover loading)
  postsContainer.innerHTML = '';
  
  // Criar e adicionar cada post
  apiData.forEach((post, index) => {
    const card = createPostCard(post, index);
    postsContainer.appendChild(card);
  });
}

// Função para abrir modal com detalhes do post
function openModal(postIndex) {
  const post = apiData[postIndex];
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  
  modalImage.src = post.thumbImage;
  modalImage.alt = post.thumbImageAltText;
  modalTitle.textContent = post.title;
  modalBody.innerHTML = `
    <div style="margin-bottom: 15px; font-size: 0.9rem; color: #777;">
      Por <strong>${post.profileName}</strong> • ${post.postDate}
    </div>
    ${post.description}
  `;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Previne scroll da página
}

// Função para fechar modal
function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto'; // Restaura scroll da página
}

// Event listeners
document.addEventListener('click', (e) => {
  // Abrir modal ao clicar em "Leia mais"
  if (e.target.classList.contains('btn-read-more')) {
    e.preventDefault();
    const postIndex = parseInt(e.target.dataset.index);
    openModal(postIndex);
  }
  
  // Fechar modal ao clicar no X ou fora do conteúdo
  if (e.target.id === 'closeModal' || e.target.id === 'modal') {
    closeModal();
  }
});

// Fechar modal com ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
  // Simular carregamento da API
  setTimeout(() => {
    renderPosts();
  }, 1200);
});

// Função para tratamento de erro de imagens
function handleImageError(img, fallbackUrl) {
  img.onerror = null; // Previne loop infinito
  img.src = fallbackUrl;
}

// Adicionar efeito de loading suave nos cards
function addCardAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  });

  // Observar todos os cards após serem criados
  setTimeout(() => {
    const cards = document.querySelectorAll('.post-card');
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
      observer.observe(card);
    });
  }, 1300);
}