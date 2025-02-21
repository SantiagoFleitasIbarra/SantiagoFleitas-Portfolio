// Initialize AOS (Animate on Scroll)
AOS.init({
  duration: 800,
  once: true
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const spans = mobileMenuBtn.querySelectorAll('span');
  spans[0].classList.toggle('rotate-45');
  spans[1].classList.toggle('opacity-0');
  spans[2].classList.toggle('-rotate-45');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navLinks.classList.remove('active');
      const spans = mobileMenuBtn.querySelectorAll('span');
      spans[0].classList.remove('rotate-45');
      spans[1].classList.remove('opacity-0');
      spans[2].classList.remove('-rotate-45');
    }
  });
});

// Close mobile menu when resizing window
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove('active');
    const spans = mobileMenuBtn.querySelectorAll('span');
    spans[0].classList.remove('rotate-45');
    spans[1].classList.remove('opacity-0');
    spans[2].classList.remove('-rotate-45');
  }
});

// Updated Projects Data
const projects = [
  {
    title: 'IbaEduca',
    description: 'Plataforma educativa para la venta de cursos en línea. Incluye sistema de gestión de contenido, reproducción de videos y procesamiento de pagos. Desarrollado en colaboración para ofrecer educación accesible y de calidad.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    links: {
    },
    images: [
      { src: 'images/IbaEduca/IbaEduca (3).png', thumb: 'images/IbaEduca/IbaEduca (3).png' },
      { src: 'images/IbaEduca/IbaEduca (5).png', thumb: 'images/IbaEduca/IbaEduca (5).png' },
      { src: 'images/IbaEduca/IbaEduca (4).png', thumb: 'images/IbaEduca/IbaEduca (4).png' },
      { src: 'images/IbaEduca/IbaEduca (1).png', thumb: 'images/IbaEduca/IbaEduca (1).png' },
      { src: 'images/IbaEduca/IbaEduca (2).png', thumb: 'images/IbaEduca/IbaEduca (2).png' },
      { src: 'images/IbaEduca/IbaEduca (6).png', thumb: 'images/IbaEduca/IbaEduca (6).png' },
      { src: 'images/IbaEduca/IbaEduca (7).png', thumb: 'images/IbaEduca/IbaEduca (7).png' },
      { src: 'images/IbaEduca/IbaEduca (8).png', thumb: 'images/IbaEduca/IbaEduca (8).png' },
      { src: 'images/IbaEduca/IbaEduca (9).png', thumb: 'images/IbaEduca/IbaEduca (9).png' },
      { src: 'images/IbaEduca/IbaEduca (10).png', thumb: 'images/IbaEduca/IbaEduca (10).png' }
    ]
  },
  {
    title: 'CazaPalabras',
    description: 'Juego estilo Wordle donde los usuarios deben encontrar palabras ocultas. Desarrollado con JavaScript vanilla, HTML5 y CSS3, implementando lógica de juego compleja y animaciones interactivas.',
    technologies: ['JavaScript', 'HTML5', 'CSS3'],
    links: {
      github: 'https://github.com/SantiagoFleitasIbarra/CazaPalabras-Juego-2025',
      live: 'https://santiagofleitasibarra.github.io/CazaPalabras-Juego-2025/'
    },
    images: [
      { src: 'images/CazaPalabras/CP (1).png', thumb: 'images/CazaPalabras/CP (1).png' },
      { src: 'images/CazaPalabras/CP (2).png', thumb: 'images/CazaPalabras/CP (2).png' },
      { src: 'images/CazaPalabras/CP (3).png', thumb: 'images/CazaPalabras/CP (3).png' },
      { src: 'images/CazaPalabras/CP (5).png', thumb: 'images/CazaPalabras/CP (5).png' }
    ]
  },
  {
    title: 'Organiza tu Día con Alegría',
    description: 'Es tu espacio para organizar tus tareas diarias de una manera fácil y entretenida. Con nuestro gestor, podrás añadir, completar, editar y eliminar tareas. ¡Comienza a organizar tu día con una sonrisa!',
    technologies: ['JavaScript', 'HTML5', 'CSS3'],
    links: {
      github: 'https://github.com/SantiagoFleitasIbarra/Organiza-tu-dia',
      live: 'https://santiagofleitasibarra.github.io/Organiza-tu-dia/'
    },
    images: [
      { src: 'images/Gestor-tareas/Tareas (1).png', thumb: 'images/Gestor-tareas/Tareas (1).png' },
      { src: 'images/Gestor-tareas/Tareas (2).png', thumb: 'images/Gestor-tareas/Tareas (2).png' },
      { src: 'images/Gestor-tareas/Tareas (3).png', thumb: 'images/Gestor-tareas/Tareas (3).png' },
      { src: 'images/Gestor-tareas/Tareas (4).png', thumb: 'images/Gestor-tareas/Tareas (4).png' },
      { src: 'images/Gestor-tareas/Tareas (5).png', thumb: 'images/Gestor-tareas/Tareas (5).png' },
      { src: 'images/Gestor-tareas/Tareas (6).png', thumb: 'images/Gestor-tareas/Tareas (6).png' },
      { src: 'images/Gestor-tareas/Tareas (7).png', thumb: 'images/Gestor-tareas/Tareas (7).png' },
      { src: 'images/Gestor-tareas/Tareas (8).png', thumb: 'images/Gestor-tareas/Tareas (8).png' },
      { src: 'images/Gestor-tareas/Tareas (12).png', thumb: 'images/Gestor-tareas/Tareas (12).png' },
      { src: 'images/Gestor-tareas/Tareas (9).png', thumb: 'images/Gestor-tareas/Tareas (9).png' },
      { src: 'images/Gestor-tareas/Tareas (10).png', thumb: 'images/Gestor-tareas/Tareas (10).png' },
      { src: 'images/Gestor-tareas/Tareas (11).png', thumb: 'images/Gestor-tareas/Tareas (11).png' }
    ]
  },
  {
    title: 'Clases Al Cuadrado',
    description: 'Plataforma educativa sencilla, la cual sirve para reservar clases tanto de manera virtual como presencial. Desarrollado con JavaScript, HTML5 y CSS3',
    technologies: ['JavaScript', 'HTML5', 'CSS3'],
    links: {
      github: 'https://github.com/SantiagoFleitasIbarra/Clases-al-cuadrado',
      live: 'https://santiagofleitasibarra.github.io/Clases-al-cuadrado/'
    },
    images: [
      { src: 'images/Clases-Al-Cuadrado/Clases-Al-Cuadrado (2).png', thumb: 'images/Clases-Al-Cuadrado/Clases-Al-Cuadrado (2).png' },
      { src: 'images/Clases-Al-Cuadrado/Clases-Al-Cuadrado (1).png', thumb: 'images/Clases-Al-Cuadrado/Clases-Al-Cuadrado (1).png' },
      { src: 'images/Clases-Al-Cuadrado/Clases-Al-Cuadrado (3).png', thumb: 'images/Clases-Al-Cuadrado/Clases-Al-Cuadrado (3).png' },
      { src: 'images/Clases-Al-Cuadrado/Clases-Al-Cuadrado (4).png', thumb: 'images/Clases-Al-Cuadrado/Clases-Al-Cuadrado (4).png' },
      { src: 'images/Clases-Al-Cuadrado/Clases-Al-Cuadrado (5).png', thumb: 'images/Clases-Al-Cuadrado/Clases-Al-Cuadrado (5).png' },
      { src: 'images/Clases-Al-Cuadrado/Clases-Al-Cuadrado (6).png', thumb: 'images/Clases-Al-Cuadrado/Clases-Al-Cuadrado (6).png' },
      { src: 'images/Clases-Al-Cuadrado/Clases-Al-Cuadrado (7).png', thumb: 'images/Clases-Al-Cuadrado/Clases-Al-Cuadrado (7).png' },
      { src: 'images/Clases-Al-Cuadrado/Clases-Al-Cuadrado (8).png', thumb: 'images/Clases-Al-Cuadrado/Clases-Al-Cuadrado (8).png' },
      { src: 'images/Clases-Al-Cuadrado/Clases-Al-Cuadrado (9).png', thumb: 'images/Clases-Al-Cuadrado/Clases-Al-Cuadrado (9).png' }
    ]
  },
  {
    title: 'Warded - Community Safety App',
    description: 'Aplicación móvil que crea comunidades seguras a través de grupos privados. Desarrollé el backend completo, incluyendo sistema de notificaciones y gestión de base de datos. La app permite compartir ubicaciones, enviar alertas en tiempo real y asistir a personas con discapacidad.',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    links: {
      github: 'https://github.com/German1127/Warded',
    },
    images: [
      { src: 'images/Warded/warded1.jpg', thumb: 'images/Warded/warded1.jpg' },
      { src: 'images/Warded/warded2.jpg', thumb: 'images/Warded/warded2.jpg' },
      { src: 'images/Warded/warded3.jpg', thumb: 'images/Warded/warded3.jpg' }
    ]
  }
];

// Function to create project cards with carousel
function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.setAttribute('data-aos', 'fade-up');

  const projectHTML = `
    <button class="project-header">
      <h3>${project.title}</h3>
      <i class="fas fa-chevron-down"></i>
    </button>
    <div class="project-content">
      <div class="project-carousel">
        <div class="carousel-container">
          <div class="carousel-track">
            ${project.images.map((image, index) => `
              <div class="carousel-slide">
                <img src="${image.thumb}" data-full="${image.src}" alt="${project.title} image ${index + 1}">
              </div>
            `).join('')}
          </div>
        </div>
        <button class="carousel-btn prev">❮</button>
        <button class="carousel-btn next">❯</button>
        <div class="thumbnails-track">
          ${project.images.map((image, index) => `
            <div class="thumbnail ${index === 0 ? 'active' : ''}">
              <img src="${image.thumb}" alt="Thumbnail ${index + 1}">
            </div>
          `).join('')}
        </div>
      </div>
      <div class="project-info">
        <p>${project.description}</p>
        <div class="project-technologies">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-links">
          ${project.links.github ? `
            <a href="${project.links.github}" target="_blank" class="btn btn-secondary">
              <i class="fab fa-github"></i> Ver Código
            </a>
          ` : ''}
          ${project.links.live ? `
            <a href="${project.links.live}" target="_blank" class="btn btn-primary">
              <i class="fas fa-external-link-alt"></i> Ver Proyecto
            </a>
          ` : ''}
        </div>
      </div>
    </div>
  `;

  card.innerHTML = projectHTML;

  // Add click handler for expandable content
  const header = card.querySelector('.project-header');
  const content = card.querySelector('.project-content');
  const chevron = card.querySelector('.fa-chevron-down');

  header.addEventListener('click', () => {
    content.classList.toggle('expanded');
    chevron.classList.toggle('rotate');
    
    // Adjust AOS refresh
    if (typeof AOS !== 'undefined') {
      setTimeout(AOS.refresh, 300);
    }
  });

  // Add carousel functionality
  const track = card.querySelector('.carousel-track');
  const slides = card.querySelectorAll('.carousel-slide');
  const prevBtn = card.querySelector('.carousel-btn.prev');
  const nextBtn = card.querySelector('.carousel-btn.next');
  const thumbnails = card.querySelectorAll('.thumbnail');
  let currentSlide = 0;

  function updateSlide(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
    thumbnails.forEach((thumb, i) => {
      thumb.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  // Add click handlers for navigation
  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide(currentSlide);
  });

  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide(currentSlide);
  });

  // Add click handlers for thumbnails
  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      updateSlide(index);
    });
  });

  // Add modal functionality for full-size images
  slides.forEach(slide => {
    const img = slide.querySelector('img');
    img.addEventListener('click', () => {
      const modal = document.createElement('div');
      modal.className = 'image-modal';
      modal.innerHTML = `
        <button class="modal-close">×</button>
        <img src="${img.dataset.full}" alt="Full size image">
      `;
      
      document.body.appendChild(modal);

      // Close modal handlers
      const closeBtn = modal.querySelector('.modal-close');
      closeBtn.onclick = () => modal.remove();
      modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
      };
      
      // Add keyboard navigation
      document.addEventListener('keydown', function closeOnEscape(e) {
        if (e.key === 'Escape') {
          modal.remove();
          document.removeEventListener('keydown', closeOnEscape);
        }
      });
    });
  });

  // Add touch swipe functionality
  let touchStartX = 0;
  const container = card.querySelector('.carousel-container');

  container.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  });

  container.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) { // minimum swipe distance
      if (diff > 0) {
        nextBtn.click();
      } else {
        prevBtn.click();
      }
    }
  });

  return card;
}

// Populate projects
const projectsGrid = document.querySelector('.projects-grid');
if (projectsGrid) {
  projects.forEach(project => {
    projectsGrid.appendChild(createProjectCard(project));
  });
}

// Add theme switcher functionality with toast notification
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  // Trigger animation
  setTimeout(() => toast.classList.add('show'), 100);

  // Remove toast after animation
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  html.classList.add('theme-transition');
  html.setAttribute('data-theme', newTheme);
  themeIcon.className = newTheme === 'light' ? 'bx bx-moon' : 'bx bx-sun';
  
  setTimeout(() => {
    html.classList.remove('theme-transition');
  }, 300);
  
  localStorage.setItem('theme', newTheme);
  showToast('Para que sea más agradable a la vista :)');
}

// Load saved theme
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeIcon.className = savedTheme === 'light' ? 'bx bx-moon' : 'bx bx-sun';
});

themeToggle.addEventListener('click', toggleTheme);

// Enhanced animations for project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-8px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
  });
});

// Smooth scroll with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const headerOffset = 80;
    const elementPosition = target.offsetTop;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.skill-category, .project-card, .stat-item').forEach(el => {
  observer.observe(el);
});

// Add touch swipe functionality for education cards on mobile
document.addEventListener('DOMContentLoaded', () => {
  const educationGrid = document.querySelector('.education-grid');
  let touchStartX = 0;
  let touchEndX = 0;

  educationGrid.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, false);

  educationGrid.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, false);

  function handleSwipe() {
    const cards = educationGrid.querySelectorAll('.education-card');
    const swipeThreshold = 50; // minimum distance for swipe
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        // Swipe right
        educationGrid.scrollBy({
          left: -cards[0].offsetWidth,
          behavior: 'smooth'
        });
      } else {
        // Swipe left
        educationGrid.scrollBy({
          left: cards[0].offsetWidth,
          behavior: 'smooth'
        });
      }
    }
  }
});