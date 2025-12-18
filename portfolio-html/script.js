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
    
    // Configurar escritorio retro
    setupRetroDesktop();
    
    // Configurar explorador móvil
    setupMobileFileExplorer();
    
    // Configurar cambio de idioma
    setupLanguageToggle();
    
    // Configurar menú móvil
    setupMobileMenu();
    
    // Configurar animaciones de scroll
    setupScrollAnimations();
});

// Crear partículas flotantes
function createFloatingParticles() {
    const particleCount = 20;
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
    
    // Crear partículas adicionales para la sección de habilidades
    const skillsSection = document.getElementById('habilidades');
    if (skillsSection) {
        for (let i = 0; i < 10; i++) {
            const cosmicParticle = document.createElement('div');
            cosmicParticle.className = 'cosmic-particle';
            cosmicParticle.style.position = 'absolute';
            cosmicParticle.style.width = Math.random() * 3 + 1 + 'px';
            cosmicParticle.style.height = cosmicParticle.style.width;
            cosmicParticle.style.background = 'rgba(34, 211, 238, 0.6)';
            cosmicParticle.style.borderRadius = '50%';
            cosmicParticle.style.left = Math.random() * 100 + '%';
            cosmicParticle.style.top = Math.random() * 100 + '%';
            cosmicParticle.style.animation = `particleTwinkle ${Math.random() * 4 + 3}s ease-in-out infinite`;
            cosmicParticle.style.animationDelay = Math.random() * 4 + 's';
            skillsSection.appendChild(cosmicParticle);
        }
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
    
    // Agregar event listeners a todos los planetas, asteroides y cards
    document.addEventListener('click', (e) => {
        const target = e.target;
        const skillElement = target.closest('[data-skill]');
        
        if (skillElement) {
            const skillName = skillElement.getAttribute('data-skill');
            
            if (skillName) {
                const currentLang = getCurrentLanguage();
                const techData = currentLang === 'en' ? techDataEN : techDataES;
                const data = techData[skillName];
                
                if (data) {
                    // Animación del elemento
                    if (skillElement.classList.contains('tech-bubble')) {
                        skillElement.style.transform = 'scale(1.4) rotate(10deg)';
                        skillElement.style.zIndex = '20';
                        skillElement.style.filter = 'brightness(1.3)';
                        
                        // Crear efecto de ondas
                        const ripple = document.createElement('div');
                        ripple.style.position = 'absolute';
                        ripple.style.width = '200px';
                        ripple.style.height = '200px';
                        ripple.style.borderRadius = '50%';
                        ripple.style.border = '2px solid rgba(34, 211, 238, 0.6)';
                        ripple.style.top = '50%';
                        ripple.style.left = '50%';
                        ripple.style.transform = 'translate(-50%, -50%) scale(0)';
                        ripple.style.pointerEvents = 'none';
                        ripple.style.zIndex = '15';
                        skillElement.appendChild(ripple);
                        
                        ripple.animate([
                            { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
                            { transform: 'translate(-50%, -50%) scale(1)', opacity: 0 }
                        ], {
                            duration: 600,
                            easing: 'ease-out'
                        }).onfinish = () => {
                            ripple.remove();
                        };
                        
                        setTimeout(() => {
                            skillElement.style.transform = '';
                            skillElement.style.zIndex = '';
                            skillElement.style.filter = '';
                        }, 500);
                    } else {
                        skillElement.style.transform = 'scale(1.1)';
                        setTimeout(() => {
                            skillElement.style.transform = '';
                        }, 300);
                    }
                    
                    // Actualizar contenido del modal
                    const modalIcon = document.getElementById('modal-icon');
                    const modalTitle = document.getElementById('modal-title');
                    const modalDescription = document.getElementById('modal-description');
                    const modalFunFact = document.getElementById('modal-fun-fact');
                    
                    if (modalIcon && modalTitle && modalDescription && modalFunFact) {
                        // Configurar gradiente del icono
                        const gradientClass = data.gradient;
                        modalIcon.style.background = `linear-gradient(135deg, ${getGradientColors(gradientClass)})`;
                        
                        // Obtener texto del elemento
                        let elementText = skillName;
                        const textElement = skillElement.querySelector('.bubble-text, span, h3');
                        if (textElement) {
                            elementText = textElement.textContent.trim();
                        }
                        
                        modalIcon.textContent = elementText;
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
        document.title = 'Santiago Fleitas - Retro Portfolio';
    } else {
        document.title = 'Santiago Fleitas - Portfolio Retro';
    }
    
    // Actualizar nombres de carpetas si están visibles
    const folderNames = document.querySelectorAll('.folder-name');
    folderNames.forEach(folder => {
        const folderElement = folder.closest('.desktop-folder');
        if (folderElement) {
            const folderType = folderElement.getAttribute('data-folder');
            const folderData = folderStructure[folderType];
            if (folderData) {
                const currentLang = lang === 'en' ? 'EN' : 'ES';
                folder.textContent = folderData[`name${currentLang}`];
            }
        }
    });
    
    // Actualizar curiosidades móviles
    updateMobileCuriosities();
}

// Menú móvil
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    
    if (!mobileMenuBtn || !navMenu) return;
    
    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isActive = navMenu.classList.contains('active');
        
        if (isActive) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    
    function openMenu() {
        navMenu.classList.add('active');
        mobileMenuBtn.classList.add('active');
        document.body.classList.add('menu-open');
    }
    
    function closeMenu() {
        navMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
    
    // Cerrar menú al hacer clic en un enlace
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !mobileMenuBtn.contains(e.target)) {
            closeMenu();
        }
    });
    
    // Cerrar menú con Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Cerrar menú al cambiar el tamaño de ventana
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024 && navMenu.classList.contains('active')) {
            closeMenu();
        }
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
    const interactiveElements = document.querySelectorAll('.tech-bubble, .mobile-tech-card, .project-card, .contact-card');
    
    interactiveElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
            if (element.classList.contains('tech-bubble')) {
                // Efecto sutil para burbujas
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 15;
                const rotateY = (centerX - x) / 15;
                
                element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
            } else {
                // Efecto normal para otros elementos
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
            }
        } else {
            element.style.transform = '';
        }
    });
    
    // Efecto de partículas siguiendo el cursor en la sección de habilidades
    const skillsSection = document.getElementById('habilidades');
    if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
            createCursorParticle(e.clientX, e.clientY);
        }
    }
});

// Crear partículas que siguen el cursor
function createCursorParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = 'rgba(34, 211, 238, 0.8)';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '1000';
    particle.style.boxShadow = '0 0 10px rgba(34, 211, 238, 0.8)';
    
    document.body.appendChild(particle);
    
    // Animar y remover la partícula
    particle.animate([
        { transform: 'scale(1) translateY(0px)', opacity: 1 },
        { transform: 'scale(0) translateY(-20px)', opacity: 0 }
    ], {
        duration: 1000,
        easing: 'ease-out'
    }).onfinish = () => {
        particle.remove();
    };
}

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

// Funcionalidad del Escritorio Retro Moderno
function setupRetroDesktop() {
    const folderWindow = document.getElementById('folder-window');
    const techWindow = document.getElementById('tech-window');
    const closeFolderBtn = document.getElementById('close-folder-window');
    const closeTechBtn = document.getElementById('close-tech-window');
    const desktopFolders = document.querySelectorAll('.desktop-folder');
    const taskbarTime = document.getElementById('retro-time');
    
    // Actualizar reloj de la barra de tareas (hora de Uruguay)
    function updateTaskbarTime() {
        if (taskbarTime) {
            const now = new Date();
            const timeString = now.toLocaleTimeString('es-UY', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
                timeZone: 'America/Montevideo'
            });
            taskbarTime.textContent = timeString;
        }
    }
    
    // Actualizar reloj cada minuto
    updateTaskbarTime();
    setInterval(updateTaskbarTime, 60000);
    
    // Organización de carpetas y archivos
    const folderStructure = {
        frontend: {
            nameES: 'Frontend',
            nameEN: 'Frontend',
            files: [
                { name: 'HTML5', icon: '📄', ext: '.html' },
                { name: 'CSS3', icon: '🎨', ext: '.css' },
                { name: 'JavaScript', icon: '⚡', ext: '.js' },
                { name: 'React', icon: '⚛️', ext: '.jsx' },
                { name: 'Tailwind', icon: '💨', ext: '.css' }
            ]
        },
        backend: {
            nameES: 'Backend',
            nameEN: 'Backend',
            files: [
                { name: 'Node.js', icon: '🟢', ext: '.js' },
                { name: 'Python', icon: '🐍', ext: '.py' },
                { name: 'Express', icon: '🚀', ext: '.js' }
            ]
        },
        mobile: {
            nameES: 'Móvil',
            nameEN: 'Mobile',
            files: [
                { name: 'Flutter', icon: '📱', ext: '.dart' },
                { name: 'React Native', icon: '📱', ext: '.jsx' }
            ]
        },
        tools: {
            nameES: 'Herramientas',
            nameEN: 'Tools',
            files: [
                { name: 'Git', icon: '📝', ext: '.git' },
                { name: 'Docker', icon: '🐳', ext: '.dockerfile' },
                { name: 'VS Code', icon: '💻', ext: '.json' }
            ]
        },
        databases: {
            nameES: 'Bases de Datos',
            nameEN: 'Databases',
            files: [
                { name: 'MySQL', icon: '🗄️', ext: '.sql' },
                { name: 'MongoDB', icon: '🍃', ext: '.json' },
                { name: 'PostgreSQL', icon: '🐘', ext: '.sql' }
            ]
        },
        design: {
            nameES: 'Diseño',
            nameEN: 'Design',
            files: [
                { name: 'Figma', icon: '🎯', ext: '.fig' },
                { name: 'Photoshop', icon: '🎨', ext: '.psd' }
            ]
        }
    };
    

    
    // Manejar doble clic en carpetas del escritorio
    desktopFolders.forEach(folder => {
        let clickCount = 0;
        let clickTimer = null;
        
        folder.addEventListener('click', (e) => {
            clickCount++;
            
            if (clickCount === 1) {
                // Primer clic - seleccionar carpeta
                desktopFolders.forEach(f => f.classList.remove('selected'));
                folder.classList.add('selected');
                
                clickTimer = setTimeout(() => {
                    clickCount = 0;
                }, 300);
            } else if (clickCount === 2) {
                // Doble clic - abrir carpeta
                clearTimeout(clickTimer);
                clickCount = 0;
                
                const folderName = folder.getAttribute('data-folder');
                openFolderWindow(folderName);
            }
        });
    });
    
    // Función para abrir ventana de carpeta
    function openFolderWindow(folderName) {
        const folderData = folderStructure[folderName];
        if (!folderData) return;
        
        const currentLang = document.documentElement.lang === 'en' ? 'EN' : 'ES';
        const folderDisplayName = folderData[`name${currentLang}`];
        
        // Actualizar título de la ventana
        const folderWindowTitle = document.getElementById('folder-window-title');
        if (folderWindowTitle) {
            const titleText = currentLang === 'EN' ? `Folder: ${folderDisplayName}` : `Carpeta: ${folderDisplayName}`;
            folderWindowTitle.textContent = titleText;
        }
        
        // Generar archivos de la carpeta
        const folderFilesContainer = document.getElementById('folder-files');
        if (folderFilesContainer) {
            folderFilesContainer.innerHTML = '';
            
            folderData.files.forEach(file => {
                const fileElement = document.createElement('div');
                fileElement.className = 'folder-file';
                fileElement.setAttribute('data-tech', file.name);
                
                fileElement.innerHTML = `
                    <div class="file-icon">${file.icon}</div>
                    <div class="file-name">${file.name}${file.ext}</div>
                `;
                
                // Agregar evento de clic para abrir curiosidad
                fileElement.addEventListener('click', () => {
                    openTechWindow(file.name);
                });
                
                folderFilesContainer.appendChild(fileElement);
            });
        }
        
        // Mostrar ventana
        folderWindow.classList.add('show');
        playRetroSound();
    }
    
    // Función para abrir ventana de tecnología
    function openTechWindow(techName) {
        const currentLang = document.documentElement.lang === 'en' ? 'en' : 'es';
        const curiosity = techCuriosities[techName];
        
        if (!curiosity) return;
        
        // Actualizar contenido
        const techWindowTitle = document.getElementById('tech-window-title');
        const modalTechIcon = document.getElementById('modal-tech-icon');
        const modalTechName = document.getElementById('modal-tech-name');
        const modalTechCuriosity = document.getElementById('modal-tech-curiosity');
        
        if (techWindowTitle) {
            const titleText = currentLang === 'en' ? 'Tech Curiosity' : 'Curiosidad Tecnológica';
            techWindowTitle.textContent = titleText;
        }
        
        if (modalTechIcon) modalTechIcon.textContent = getTechIcon(techName);
        if (modalTechName) modalTechName.textContent = techName;
        if (modalTechCuriosity) modalTechCuriosity.textContent = curiosity[currentLang];
        
        // Mostrar ventana
        techWindow.classList.add('show');
        playRetroSound();
    }
    
    // Función para obtener el icono de la tecnología
    function getTechIcon(techName) {
        const icons = {
            'HTML5': '📄',
            'CSS3': '🎨',
            'JavaScript': '⚡',
            'React': '⚛️',
            'Node.js': '🟢',
            'Python': '🐍',
            'MySQL': '🗄️',
            'MongoDB': '🍃',
            'Git': '📝',
            'Docker': '🐳',
            'Tailwind': '💨',
            'Figma': '🎯',
            'Flutter': '📱',
            'React Native': '📱',
            'Express': '🚀',
            'VS Code': '💻',
            'PostgreSQL': '🐘',
            'Photoshop': '🎨'
        };
        return icons[techName] || '📄';
    }
    
    // Cerrar ventanas
    if (closeFolderBtn) {
        closeFolderBtn.addEventListener('click', () => {
            folderWindow.classList.remove('show');
        });
    }
    
    if (closeTechBtn) {
        closeTechBtn.addEventListener('click', () => {
            techWindow.classList.remove('show');
        });
    }
    
    // Cerrar ventanas al hacer clic fuera
    if (folderWindow) {
        folderWindow.addEventListener('click', (e) => {
            if (e.target === folderWindow) {
                folderWindow.classList.remove('show');
            }
        });
    }
    
    if (techWindow) {
        techWindow.addEventListener('click', (e) => {
            if (e.target === techWindow) {
                techWindow.classList.remove('show');
            }
        });
    }
    
    // Cerrar ventanas con Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            folderWindow.classList.remove('show');
            techWindow.classList.remove('show');
        }
    });
    
    // Efecto de sonido visual
    function playRetroSound() {
        // Crear efecto visual de "beep"
        const beep = document.createElement('div');
        beep.style.position = 'fixed';
        beep.style.top = '20px';
        beep.style.right = '20px';
        beep.style.background = '#ffff00';
        beep.style.color = '#000';
        beep.style.padding = '5px 10px';
        beep.style.fontFamily = 'monospace';
        beep.style.fontSize = '12px';
        beep.style.border = '2px outset #c0c0c0';
        beep.style.zIndex = '9999';
        beep.textContent = '♪ BEEP';
        
        document.body.appendChild(beep);
        
        setTimeout(() => {
            beep.remove();
        }, 500);
    }
}

// Funcionalidad del explorador de archivos móvil
function setupMobileFileExplorer() {
    const mobileFiles = document.querySelectorAll('.mobile-file');
    
    // Cargar curiosidades iniciales
    updateMobileCuriosities();
    
    mobileFiles.forEach(file => {
        const header = file.querySelector('.file-header');
        
        header.addEventListener('click', () => {
            const isExpanded = file.classList.contains('expanded');
            
            // Cerrar otros archivos abiertos
            mobileFiles.forEach(f => f.classList.remove('expanded'));
            
            // Alternar el archivo actual
            if (!isExpanded) {
                file.classList.add('expanded');
                
                // Actualizar curiosidad al expandir
                const techName = file.getAttribute('data-tech');
                const curiosityText = file.querySelector('.curiosity-text');
                const currentLang = document.documentElement.lang === 'en' ? 'en' : 'es';
                const curiosity = techCuriosities[techName];
                
                if (curiosity && curiosityText) {
                    curiosityText.textContent = curiosity[currentLang];
                }
            }
        });
    });
}

// Función para actualizar curiosidades móviles
function updateMobileCuriosities() {
    const mobileFiles = document.querySelectorAll('.mobile-file');
    const currentLang = document.documentElement.lang === 'en' ? 'en' : 'es';
    
    mobileFiles.forEach(file => {
        const techName = file.getAttribute('data-tech');
        const curiosityText = file.querySelector('.curiosity-text');
        const curiosity = techCuriosities[techName];
        
        if (curiosity && curiosityText) {
            curiosityText.textContent = curiosity[currentLang];
        }
    });
}

// Mover las curiosidades tecnológicas fuera de la función para acceso global
const techCuriosities = {
    'HTML5': {
        es: '¡HTML5 puede reproducir videos sin plugins! Antes necesitábamos Flash Player. Además, el primer sitio web de la historia aún existe: info.cern.ch',
        en: 'HTML5 can play videos without plugins! Before we needed Flash Player. Also, the first website in history still exists: info.cern.ch'
    },
    'CSS3': {
        es: 'CSS3 puede crear formas complejas sin imágenes. ¡Incluso puedes dibujar un corazón solo con CSS! Y tiene más de 500 propiedades diferentes.',
        en: 'CSS3 can create complex shapes without images. You can even draw a heart with just CSS! And it has more than 500 different properties.'
    },
    'JavaScript': {
        es: 'JavaScript fue creado en solo 10 días por Brendan Eich en 1995. ¡Y ahora domina el mundo web! Se ejecuta en más de 1.8 mil millones de sitios.',
        en: 'JavaScript was created in just 10 days by Brendan Eich in 1995. And now it dominates the web world! It runs on more than 1.8 billion sites.'
    },
    'React': {
        es: 'React fue creado por Facebook y se usa en Instagram, WhatsApp, Netflix. ¡Más de 10 millones de desarrolladores lo usan mundialmente!',
        en: 'React was created by Facebook and is used in Instagram, WhatsApp, Netflix. More than 10 million developers use it worldwide!'
    },
    'Node.js': {
        es: 'Node.js puede manejar miles de conexiones simultáneas con muy poca memoria. ¡Netflix, PayPal y Uber lo usan para sus APIs!',
        en: 'Node.js can handle thousands of simultaneous connections with very little memory. Netflix, PayPal and Uber use it for their APIs!'
    },
    'Python': {
        es: 'Python se llama así por "Monty Python", no por la serpiente. ¡Su creador era fan del grupo de comedia británico!',
        en: 'Python is named after "Monty Python", not the snake. Its creator was a fan of the British comedy group!'
    },
    'MySQL': {
        es: 'MySQL maneja las bases de datos de Facebook, Twitter, YouTube y Wikipedia. ¡Procesa billones de consultas diarias!',
        en: 'MySQL handles databases for Facebook, Twitter, YouTube and Wikipedia. It processes billions of queries daily!'
    },
    'MongoDB': {
        es: 'MongoDB puede almacenar documentos de hasta 16MB cada uno. ¡Eso es como 4000 páginas de texto! Y es usado por más de 29,000 empresas.',
        en: 'MongoDB can store documents up to 16MB each. That\'s like 4000 pages of text! And it\'s used by more than 29,000 companies.'
    },
    'Git': {
        es: 'Git fue creado por Linus Torvalds (creador de Linux) en solo 2 semanas. ¡Más de 100 millones de repositorios existen en GitHub!',
        en: 'Git was created by Linus Torvalds (creator of Linux) in just 2 weeks. More than 100 million repositories exist on GitHub!'
    },
    'Docker': {
        es: 'Docker puede ejecutar una aplicación Linux en Windows y viceversa. ¡Es como magia de compatibilidad! Se descarga más de 13 mil millones de veces al mes.',
        en: 'Docker can run a Linux application on Windows and vice versa. It\'s like compatibility magic! It\'s downloaded more than 13 billion times per month.'
    },
    'Tailwind': {
        es: 'Tailwind tiene más de 500 clases predefinidas. ¡Puedes crear casi cualquier diseño sin escribir una sola línea de CSS personalizado!',
        en: 'Tailwind has over 500 predefined classes. You can create almost any design without writing a single line of custom CSS!'
    },
    'Figma': {
        es: 'Figma funciona completamente en el navegador sin instalación. ¡Varios diseñadores pueden trabajar simultáneamente en tiempo real!',
        en: 'Figma works completely in the browser without installation. Multiple designers can work simultaneously in real time!'
    },
    'Flutter': {
        es: 'Flutter puede compilar a 6 plataformas diferentes: iOS, Android, Web, Windows, macOS y Linux. ¡Un código, todas partes!',
        en: 'Flutter can compile to 6 different platforms: iOS, Android, Web, Windows, macOS and Linux. One code, everywhere!'
    },
    'React Native': {
        es: 'React Native es usado por Facebook, Instagram, Airbnb y Tesla. ¡Permite crear apps nativas con JavaScript!',
        en: 'React Native is used by Facebook, Instagram, Airbnb and Tesla. It allows creating native apps with JavaScript!'
    },
    'Express': {
        es: 'Express es el framework web más popular de Node.js. ¡Es tan minimalista que su código base tiene menos de 1000 líneas!',
        en: 'Express is the most popular web framework for Node.js. It\'s so minimalist that its codebase has less than 1000 lines!'
    },
    'VS Code': {
        es: 'VS Code es el editor más popular del mundo con más de 50 millones de usuarios. ¡Tiene más de 45,000 extensiones disponibles!',
        en: 'VS Code is the most popular editor in the world with more than 50 million users. It has more than 45,000 extensions available!'
    },
    'PostgreSQL': {
        es: 'PostgreSQL es conocido como "la base de datos más avanzada del mundo". ¡Puede manejar desde JSON hasta datos geoespaciales!',
        en: 'PostgreSQL is known as "the world\'s most advanced database". It can handle everything from JSON to geospatial data!'
    },
    'Photoshop': {
        es: 'Photoshop fue creado en 1987 y su nombre original era "Display". ¡El verbo "photoshopear" está en el diccionario!',
        en: 'Photoshop was created in 1987 and its original name was "Display". The verb "to photoshop" is in the dictionary!'
    }
};

// Inicializar funcionalidades retro cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    setupRetroDesktop();
    setupMobileFileExplorer();
});