// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    // Crear partículas flotantes
    createFloatingParticles();
    
    // Configurar navegación suave
    setupSmoothScrolling();
    
    // Configurar efectos de parallax
    setupParallaxEffects();
    
    // Iniciar animación de código
    startTypingLoop();
    
    // Iniciar contador de tiempo de trabajo
    startWorkTimeCounter();
    
    // Configurar modal de tecnologías
    setupTechModal();
    
    // Configurar cambio de idioma
    setupLanguageToggle();
    
    // Configurar menú móvil
    setupMobileMenu();
    
    // Configurar animaciones de scroll
    setupScrollAnimations();
});

// Crear partículas flotantes
function createFloatingParticles() {
    const particleCount = 15;
    const container = document.body;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        container.appendChild(particle);
    }
}

// Configurar navegación suave
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Configurar efectos de parallax
function setupParallaxEffects() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.particle');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
        });
    });
}

// Animación de código dinámico
function startTypingLoop() {
    const typingElement = document.getElementById('typing-content');
    if (!typingElement) return;
    
    // Contenido en español e inglés
    const contentES = [
        "role: <span class='text-green-400' style='color: #4ade80;'>'Desarrollador Full Stack'</span>,",
        "education: <span class='text-green-400' style='color: #4ade80;'>'Ingeniero en Computación'</span>,",
        "business: <span class='text-green-400' style='color: #4ade80;'>'Administración de Empresas'</span>,",
        "passion: <span class='text-green-400' style='color: #4ade80;'>'Educador'</span>"
    ];
    
    const contentEN = [
        "role: <span class='text-green-400' style='color: #4ade80;'>'Full Stack Developer'</span>,",
        "education: <span class='text-green-400' style='color: #4ade80;'>'Computer Engineer'</span>,",
        "business: <span class='text-green-400' style='color: #4ade80;'>'Business Administration'</span>,",
        "passion: <span class='text-green-400' style='color: #4ade80;'>'Educator'</span>"
    ];
    
    function getCurrentContent() {
        const isSpanish = document.documentElement.lang === 'es';
        return isSpanish ? contentES : contentEN;
    }
    
    function runCycle() {
        const content = getCurrentContent();
        
        if (!typingElement) return;
        
        // Limpiar contenido actual
        typingElement.innerHTML = '';
        
        // Crear nuevas líneas con el contenido actualizado
        content.forEach((line) => {
            const div = document.createElement('div');
            div.className = 'text-gray-300';
            div.innerHTML = line;
            div.style.opacity = '0';
            div.style.transform = 'translateX(-10px)';
            typingElement.appendChild(div);
        });
        
        const lines = typingElement.querySelectorAll('div');
        
        // Animar líneas en secuencia
        lines.forEach((line, index) => {
            setTimeout(() => {
                line.style.transition = 'all 0.8s ease-in-out';
                line.style.opacity = '1';
                line.style.transform = 'translateX(0)';
            }, 500 + (index * 700));
        });
        
        // Esperar y desvanecer
        setTimeout(() => {
            lines.forEach((line, index) => {
                setTimeout(() => {
                    line.style.transition = 'all 0.5s ease-in-out';
                    line.style.opacity = '0';
                    line.style.transform = 'translateX(10px)';
                }, index * 100);
            });
            
            // Reiniciar ciclo
            setTimeout(runCycle, 2000);
        }, 6000);
    }
    
    runCycle();
}

// Contador de tiempo de trabajo
function startWorkTimeCounter() {
    const startDate = new Date('2024-07-01');
    const counterElement = document.getElementById('work-counter');
    
    if (!counterElement) return;
    
    function updateCounter() {
        if (!counterElement) return;
        
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - startDate.getTime());
        
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const months = Math.floor(diffDays / 30);
        const days = diffDays % 30;
        
        counterElement.textContent = `${months} meses, ${days} días`;
    }
    
    // Actualizar inmediatamente y luego cada hora
    updateCounter();
    setInterval(updateCounter, 3600000); // 1 hora
}

// Modal de tecnologías
function setupTechModal() {
    const modal = document.getElementById('tech-modal');
    const closeBtn = document.getElementById('close-modal');
    
    if (!modal || !closeBtn) return;
    
    // Obtener el idioma actual
    const getCurrentLanguage = () => {
        return document.documentElement.lang === 'en' ? 'en' : 'es';
    };
    
    const techDataES = {
        'HTML5': {
            title: 'HTML5',
            description: 'El lenguaje de marcado estándar para crear páginas web. Define la estructura y el contenido de las aplicaciones web modernas.',
            funFact: '¡HTML5 puede reproducir videos sin necesidad de plugins! Antes necesitábamos Flash Player para todo.',
            gradient: 'from-orange-500 to-red-500'
        },
        'CSS3': {
            title: 'CSS3',
            description: 'Hojas de estilo en cascada que dan vida visual a HTML. Permite crear diseños responsivos y animaciones impresionantes.',
            funFact: 'CSS3 puede crear formas complejas sin imágenes. ¡Incluso puedes dibujar un corazón solo con CSS!',
            gradient: 'from-blue-500 to-cyan-500'
        },
        'JavaScript': {
            title: 'JavaScript',
            description: 'El lenguaje de programación que hace que las páginas web sean interactivas y dinámicas.',
            funFact: 'JavaScript fue creado en solo 10 días por Brendan Eich en 1995. ¡Y ahora domina el mundo web!',
            gradient: 'from-yellow-400 to-orange-500'
        },
        'React.js': {
            title: 'React.js',
            description: 'Biblioteca de JavaScript para construir interfaces de usuario interactivas y reutilizables mediante componentes.',
            funFact: 'React fue creado por Facebook y se usa en Instagram, WhatsApp, Netflix y miles de apps que usas diariamente.',
            gradient: 'from-cyan-400 to-blue-500'
        },
        'Node.js': {
            title: 'Node.js',
            description: 'Entorno de ejecución de JavaScript del lado del servidor. Permite usar JS tanto en frontend como backend.',
            funFact: 'Node.js puede manejar miles de conexiones simultáneas con muy poca memoria. ¡Netflix lo usa para sus APIs!',
            gradient: 'from-green-500 to-emerald-500'
        },
        'Python': {
            title: 'Python',
            description: 'Lenguaje de programación versátil y fácil de leer. Ideal para desarrollo web, IA, ciencia de datos y automatización.',
            funFact: 'Python se llama así por el grupo de comedia "Monty Python", no por la serpiente. ¡Su creador era fan!',
            gradient: 'from-blue-600 to-purple-600'
        },
        'MySQL': {
            title: 'MySQL',
            description: 'Sistema de gestión de bases de datos relacionales. Almacena y organiza datos de forma eficiente y segura.',
            funFact: 'MySQL maneja las bases de datos de Facebook, Twitter, YouTube y Wikipedia. ¡Procesa billones de consultas diarias!',
            gradient: 'from-orange-500 to-red-500'
        },
        'MongoDB': {
            title: 'MongoDB',
            description: 'Base de datos NoSQL que almacena datos en formato JSON. Perfecta para aplicaciones modernas y escalables.',
            funFact: 'MongoDB puede almacenar documentos de hasta 16MB cada uno. ¡Eso es como 4000 páginas de texto!',
            gradient: 'from-green-600 to-teal-600'
        },
        'Git': {
            title: 'Git',
            description: 'Sistema de control de versiones que rastrea cambios en el código. Esencial para colaborar en proyectos.',
            funFact: 'Git fue creado por Linus Torvalds (creador de Linux) en solo 2 semanas porque estaba frustrado con otras herramientas.',
            gradient: 'from-red-500 to-pink-500'
        },
        'Tailwind': {
            title: 'Tailwind CSS',
            description: 'Framework de CSS utility-first que permite crear diseños personalizados rápidamente sin escribir CSS personalizado.',
            funFact: 'Tailwind tiene más de 500 clases predefinidas. ¡Puedes crear casi cualquier diseño sin escribir una sola línea de CSS!',
            gradient: 'from-cyan-500 to-teal-500'
        },
        'Docker': {
            title: 'Docker',
            description: 'Plataforma de contenedores que empaqueta aplicaciones con todas sus dependencias para ejecutarse en cualquier lugar.',
            funFact: 'Docker puede ejecutar una aplicación Linux en Windows y viceversa. ¡Es como magia de compatibilidad!',
            gradient: 'from-blue-600 to-cyan-600'
        },
        'Figma': {
            title: 'Figma',
            description: 'Herramienta de diseño colaborativo basada en la web. Permite crear interfaces y prototipos en tiempo real.',
            funFact: 'Figma funciona completamente en el navegador sin instalación. ¡Varios diseñadores pueden trabajar simultáneamente!',
            gradient: 'from-purple-500 to-pink-500'
        },
        'Jira': {
            title: 'Jira',
            description: 'Herramienta de gestión de proyectos ágiles. Rastrea tareas, bugs y el progreso del equipo de desarrollo.',
            funFact: 'Jira significa "Gojira" (Godzilla en japonés). ¡Los creadores querían algo que "aplastara" los bugs!',
            gradient: 'from-blue-500 to-indigo-500'
        },
        'Firebase': {
            title: 'Firebase',
            description: 'Plataforma de Google para desarrollo de aplicaciones. Ofrece base de datos, autenticación y hosting en tiempo real.',
            funFact: 'Firebase puede sincronizar datos en tiempo real entre millones de usuarios. ¡Los cambios aparecen instantáneamente!',
            gradient: 'from-yellow-500 to-orange-500'
        },
        'Flutter': {
            title: 'Flutter',
            description: 'Framework de Google para crear aplicaciones nativas multiplataforma con un solo código base.',
            funFact: 'Flutter puede compilar a 6 plataformas diferentes: iOS, Android, Web, Windows, macOS y Linux. ¡Un código, todas partes!',
            gradient: 'from-blue-400 to-cyan-400'
        },
        'Unity': {
            title: 'Unity',
            description: 'Motor de videojuegos multiplataforma. Permite crear juegos 2D y 3D para múltiples dispositivos y plataformas.',
            funFact: 'Más del 50% de todos los juegos móviles están hechos con Unity. ¡Incluso Pokémon GO usa Unity!',
            gradient: 'from-gray-600 to-gray-800'
        }
    };
    
    const techDataEN = {
        'HTML5': {
            title: 'HTML5',
            description: 'The standard markup language for creating web pages. Defines the structure and content of modern web applications.',
            funFact: 'HTML5 can play videos without plugins! Before, we needed Flash Player for everything.',
            gradient: 'from-orange-500 to-red-500'
        },
        'CSS3': {
            title: 'CSS3',
            description: 'Cascading style sheets that bring visual life to HTML. Allows creating responsive designs and impressive animations.',
            funFact: 'CSS3 can create complex shapes without images. You can even draw a heart with just CSS!',
            gradient: 'from-blue-500 to-cyan-500'
        },
        'JavaScript': {
            title: 'JavaScript',
            description: 'The programming language that makes web pages interactive and dynamic.',
            funFact: 'JavaScript was created in just 10 days by Brendan Eich in 1995. And now it dominates the web world!',
            gradient: 'from-yellow-400 to-orange-500'
        },
        'React.js': {
            title: 'React.js',
            description: 'JavaScript library for building interactive and reusable user interfaces through components.',
            funFact: 'React was created by Facebook and is used in Instagram, WhatsApp, Netflix and thousands of apps you use daily.',
            gradient: 'from-cyan-400 to-blue-500'
        },
        'Node.js': {
            title: 'Node.js',
            description: 'JavaScript runtime environment on the server side. Allows using JS in both frontend and backend.',
            funFact: 'Node.js can handle thousands of simultaneous connections with very little memory. Netflix uses it for their APIs!',
            gradient: 'from-green-500 to-emerald-500'
        },
        'Python': {
            title: 'Python',
            description: 'Versatile and easy-to-read programming language. Ideal for web development, AI, data science and automation.',
            funFact: 'Python is named after the comedy group "Monty Python", not the snake. Its creator was a fan!',
            gradient: 'from-blue-600 to-purple-600'
        },
        'MySQL': {
            title: 'MySQL',
            description: 'Relational database management system. Stores and organizes data efficiently and securely.',
            funFact: 'MySQL handles databases for Facebook, Twitter, YouTube and Wikipedia. It processes billions of queries daily!',
            gradient: 'from-orange-500 to-red-500'
        },
        'MongoDB': {
            title: 'MongoDB',
            description: 'NoSQL database that stores data in JSON format. Perfect for modern and scalable applications.',
            funFact: 'MongoDB can store documents up to 16MB each. That\'s like 4000 pages of text!',
            gradient: 'from-green-600 to-teal-600'
        },
        'Git': {
            title: 'Git',
            description: 'Version control system that tracks changes in code. Essential for collaborating on projects.',
            funFact: 'Git was created by Linus Torvalds (creator of Linux) in just 2 weeks because he was frustrated with other tools.',
            gradient: 'from-red-500 to-pink-500'
        },
        'Tailwind': {
            title: 'Tailwind CSS',
            description: 'Utility-first CSS framework that allows creating custom designs quickly without writing custom CSS.',
            funFact: 'Tailwind has over 500 predefined classes. You can create almost any design without writing a single line of CSS!',
            gradient: 'from-cyan-500 to-teal-500'
        },
        'Docker': {
            title: 'Docker',
            description: 'Container platform that packages applications with all their dependencies to run anywhere.',
            funFact: 'Docker can run a Linux application on Windows and vice versa. It\'s like compatibility magic!',
            gradient: 'from-blue-600 to-cyan-600'
        },
        'Figma': {
            title: 'Figma',
            description: 'Web-based collaborative design tool. Allows creating interfaces and prototypes in real time.',
            funFact: 'Figma works completely in the browser without installation. Multiple designers can work simultaneously!',
            gradient: 'from-purple-500 to-pink-500'
        },
        'Jira': {
            title: 'Jira',
            description: 'Agile project management tool. Tracks tasks, bugs and development team progress.',
            funFact: 'Jira means "Gojira" (Godzilla in Japanese). The creators wanted something that would "crush" bugs!',
            gradient: 'from-blue-500 to-indigo-500'
        },
        'Firebase': {
            title: 'Firebase',
            description: 'Google platform for application development. Offers database, authentication and real-time hosting.',
            funFact: 'Firebase can sync data in real time between millions of users. Changes appear instantly!',
            gradient: 'from-yellow-500 to-orange-500'
        },
        'Flutter': {
            title: 'Flutter',
            description: 'Google framework for creating native cross-platform applications with a single codebase.',
            funFact: 'Flutter can compile to 6 different platforms: iOS, Android, Web, Windows, macOS and Linux. One code, everywhere!',
            gradient: 'from-blue-400 to-cyan-400'
        },
        'Unity': {
            title: 'Unity',
            description: 'Cross-platform game engine. Allows creating 2D and 3D games for multiple devices and platforms.',
            funFact: 'More than 50% of all mobile games are made with Unity. Even Pokémon GO uses Unity!',
            gradient: 'from-gray-600 to-gray-800'
        }
    };
    
    // Agregar event listeners a todos los planetas y cards
    document.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('skill-planet') || target.classList.contains('skill-card') || target.closest('.skill-card')) {
            const skillElement = target.classList.contains('skill-card') ? target : target.closest('.skill-card') || target;
            const skillName = skillElement.getAttribute('data-skill');
            
            if (skillName) {
                const currentLang = getCurrentLanguage();
                const techData = currentLang === 'en' ? techDataEN : techDataES;
                const data = techData[skillName];
                
                if (data) {
                    // Animación del elemento
                    skillElement.style.transform = 'scale(1.1)';
                    setTimeout(() => {
                        skillElement.style.transform = '';
                    }, 300);
                    
                    // Actualizar contenido del modal
                    const modalIcon = document.getElementById('modal-icon');
                    const modalTitle = document.getElementById('modal-title');
                    const modalDescription = document.getElementById('modal-description');
                    const modalFunFact = document.getElementById('modal-fun-fact');
                    
                    if (modalIcon && modalTitle && modalDescription && modalFunFact) {
                        // Configurar gradiente del icono
                        const gradientClass = data.gradient;
                        modalIcon.style.background = `linear-gradient(135deg, ${getGradientColors(gradientClass)})`;
                        modalIcon.textContent = skillElement.textContent.trim() || skillName;
                        modalTitle.textContent = data.title;
                        modalDescription.textContent = data.description;
                        modalFunFact.querySelector('p').textContent = data.funFact;
                    }
                    
                    // Mostrar modal
                    modal.classList.add('show');
                }
            }
        }
    });
    
    // Función para obtener colores del gradiente
    function getGradientColors(gradientClass) {
        const colorMap = {
            'from-orange-500 to-red-500': '#f97316, #ef4444',
            'from-blue-500 to-cyan-500': '#3b82f6, #06b6d4',
            'from-yellow-400 to-orange-500': '#facc15, #f97316',
            'from-cyan-400 to-blue-500': '#22d3ee, #3b82f6',
            'from-green-500 to-emerald-500': '#22c55e, #10b981',
            'from-blue-600 to-purple-600': '#2563eb, #9333ea',
            'from-green-600 to-teal-600': '#16a34a, #0d9488',
            'from-red-500 to-pink-500': '#ef4444, #ec4899',
            'from-cyan-500 to-teal-500': '#06b6d4, #14b8a6',
            'from-blue-600 to-cyan-600': '#2563eb, #0891b2',
            'from-purple-500 to-pink-500': '#a855f7, #ec4899',
            'from-blue-500 to-indigo-500': '#3b82f6, #6366f1',
            'from-yellow-500 to-orange-500': '#eab308, #f97316',
            'from-blue-400 to-cyan-400': '#60a5fa, #22d3ee',
            'from-gray-600 to-gray-800': '#4b5563, #1f2937'
        };
        return colorMap[gradientClass] || '#22d3ee, #3b82f6';
    }
    
    // Cerrar modal
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });
    
    // Cerrar modal al hacer clic fuera
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
    
    // Cerrar modal con Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
        }
    });
}

// Cambio de idioma
function setupLanguageToggle() {
    const languageBtn = document.getElementById('language-toggle');
    const flagSpan = languageBtn.querySelector('.flag');
    const langText = languageBtn.querySelector('.lang-text');
    
    languageBtn.addEventListener('click', () => {
        const currentLang = document.documentElement.lang;
        const newLang = currentLang === 'es' ? 'en' : 'es';
        
        // Cambiar idioma del documento
        document.documentElement.lang = newLang;
        
        // Actualizar botón
        if (newLang === 'en') {
            flagSpan.textContent = '🇺🇸';
            langText.textContent = 'EN';
        } else {
            flagSpan.textContent = '🇪🇸';
            langText.textContent = 'ES';
        }
        
        // Actualizar contenido
        updateContent(newLang);
        
        // Reiniciar animación de código
        setTimeout(() => {
            startTypingLoop();
        }, 100);
    });
}

// Actualizar contenido según idioma
function updateContent(lang) {
    const elements = document.querySelectorAll('[data-es][data-en]');
    
    elements.forEach(element => {
        const content = element.getAttribute(`data-${lang}`);
        if (content) {
            element.textContent = content;
        }
    });
    
    // Actualizar título de la página
    if (lang === 'en') {
        document.title = 'Santiago Fleitas - Space Portfolio';
    } else {
        document.title = 'Santiago Fleitas - Portfolio Espacial';
    }
}

// Menú móvil
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en un enlace
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
}

// Animaciones de scroll
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observar elementos que queremos animar
    const animatedElements = document.querySelectorAll('.education-card, .project-card, .contact-card, .stat-card');
    animatedElements.forEach(el => observer.observe(el));
}

// Función global para reiniciar la animación de código (accesible desde el HTML)
window.startTypingLoop = startTypingLoop;

// Efectos adicionales
document.addEventListener('mousemove', (e) => {
    // Efecto de cursor para elementos interactivos
    const interactiveElements = document.querySelectorAll('.skill-planet, .project-card, .contact-card');
    
    interactiveElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        } else {
            element.style.transform = '';
        }
    });
});

// Optimización de rendimiento
let ticking = false;

function updateParallax() {
    setupParallaxEffects();
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
    }
});

// Preloader simple
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Manejo de errores de imágenes
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            // Mostrar placeholder si existe
            const placeholder = this.nextElementSibling;
            if (placeholder && placeholder.classList.contains('placeholder')) {
                placeholder.style.display = 'flex';
            }
        });
    });
});

// Funciones de utilidad
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimizar scroll con debounce
const debouncedScroll = debounce(() => {
    setupParallaxEffects();
}, 10);

window.addEventListener('scroll', debouncedScroll);

// Detectar si el usuario prefiere movimiento reducido
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Deshabilitar animaciones complejas
    document.body.classList.add('reduced-motion');
}

// Manejo de focus para accesibilidad
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// Lazy loading para imágenes (si no es soportado nativamente)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}