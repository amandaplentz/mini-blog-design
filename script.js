let apiData = [];

// Função para criar um card de post
function createPostCard(post, index) {
  const card = document.createElement('article');
  card.classList.add('post-card');
  
  card.innerHTML = `
    <img src="${post.thumbImage}" alt="${post.thumbImageAltText}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80'" data-index="${index}">
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

  addCardAnimations(); // Ativa as animações dos cards
}

// Função para abrir modal com detalhes do post
function openModal(postIndex) {
  const post = apiData[postIndex];
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  
  // Configurar imagem principal com fallback
  modalImage.src = post.thumbImage;
  modalImage.alt = post.thumbImageAltText || post.title;
  modalImage.onerror = function() {
    this.src = 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80';
  };
  
  modalTitle.textContent = post.title;
  modalBody.innerHTML = `
    <div class="modal-meta">
      <img src="${post.profileThumbImage}" alt="${post.profileName}" onerror="this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80'">
      <div class="modal-author-info">
        <strong>${post.profileName}</strong>
        <span>${post.postDate}</span>
      </div>
    </div>
    <div class="modal-description">
      ${post.description}
    </div>
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

// Função para buscar dados da API
function fetchPosts() {
  fetch('https://api-fake-blog.onrender.com/postagens/')
    .then(res => res.json())
    .then(data => {
      apiData = data;
      renderPosts();
    })
    .catch(error => {
      console.error('Erro ao carregar os posts:', error);
      const postsContainer = document.getElementById('posts');
      postsContainer.innerHTML = '<p style="text-align: center; color: red;">Não foi possível carregar os posts. Tenta novamente mais tarde.</p>';
    });
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

  const cards = document.querySelectorAll('.post-card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
  });
}

// Event listeners
document.addEventListener('click', (e) => {
  // Clique no botão "Leia mais"
  if (e.target.classList.contains('btn-read-more')) {
    e.preventDefault();
    e.stopPropagation();
    const postIndex = parseInt(e.target.dataset.index);
    openModal(postIndex);
  }

  // Clique na imagem do card
  if (e.target.tagName === 'IMG' && e.target.dataset.index) {
    e.preventDefault();
    const postIndex = parseInt(e.target.dataset.index);
    openModal(postIndex);
  }

  // Clique no card inteiro (opcional)
  if (e.target.closest('.post-card')) {
    const card = e.target.closest('.post-card');
    const button = card.querySelector('.btn-read-more');
    if (button && !e.target.classList.contains('btn-read-more') && !e.target.dataset.index) {
      e.preventDefault();
      const postIndex = parseInt(button.dataset.index);
      openModal(postIndex);
    }
  }

  // Fechar modal
  if (e.target.id === 'closeModal' || e.target.id === 'modal') {
    closeModal();
  }
});


document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Carregar posts ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  fetchPosts();
});