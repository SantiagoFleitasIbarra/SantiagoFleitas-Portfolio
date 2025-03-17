// Typed.js initialization
let typed;

function initTyped(strings) {
    if (typed) {
        typed.destroy();
    }
    typed = new Typed('#typed-text', {
        strings: strings,
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
    });
}

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeIcon.className = isDarkMode ? 'fas fa-moon' : 'fas fa-sun';
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const isActive = navLinks.classList.contains('active');
    
    // Toggle Hamburger Effect
    const hamburger = menuToggle.querySelector('.hamburger');
    hamburger.classList.toggle('active', isActive);
});

// Language toggle functionality
const esFlag = document.getElementById('es-flag');
const enFlag = document.getElementById('en-flag');

const translations = {
    es: {
        greeting: 'Hola, soy',
        description: 'Bienvenido a mi espacio profesional. Aquí encontrarás mi trayectoria, habilidades técnicas y los proyectos en los que he trabajado. Te invito a conocer más sobre mi perfil y explorar cómo puedo contribuir a tu equipo o proyecto.',
        projects: 'Ver Proyectos',
        typedStrings: [
            'Desarrollador backend',
            'Desarrollador frontend',
            'Ingeniero en Computación'
        ],
        menuItems: {
            inicio: 'Inicio',
            acerca: 'Acerca de Mí',
            educacion: 'Educación',
            habilidades: 'Habilidades',
            proyectos: 'Proyectos',
            contacto: 'Contacto'
        },
        aboutTitle: 'Acerca de Mí',
        aboutDescription: 'Soy graduado de Holberton School con experiencia en desarrollo backend y frontend. Completé el primer año de la formación en Matemáticas en el Instituto de Profesores Artigas (IPA), aunque actualmente está pausada. Actualmente estudio Ingeniería en Computación en la UdelaR y participo en varios proyectos. Me siento preparado para asumir nuevos desafíos profesionales, aportando habilidades técnicas sólidas y una gran pasión por la tecnología.',
        skills: {
            communication: {
                title: 'Comunicación Efectiva',
                description: 'Habilidad para transmitir ideas técnicas de forma clara y accesible a diferentes audiencias.'
            },
            teamManagement: {
                title: 'Gestión de Equipos',
                description: 'Experiencia coordinando equipos técnicos y fomentando un ambiente colaborativo.'
            },
            problemSolving: {
                title: 'Resolución de Problemas',
                description: 'Enfoque analítico para identificar soluciones eficientes ante desafíos complejos.'
            },
            mathThinking: {
                title: 'Pensamiento Matemático',
                description: 'Aplicación de conceptos matemáticos para modelar y resolver problemas de programación.'
            },
            english: {
                title: 'Inglés Técnico Intermedio',
                description: 'Capacidad para comunicarme en inglés en contextos técnicos y profesionales.'
            }
        },
        downloadCV: 'Descargar CV',
        education: {
            title: 'Educación',
            current: 'Actualidad',
            downloadCert: 'Descargar Certificado'
        },
        sectionTitles: {
            education: {
                title: 'Educación',
                description: 'Mi trayectoria académica refleja mi compromiso con el aprendizaje continuo y el desarrollo profesional. Aquí encontrarás los detalles de mi formación en ingeniería, desarrollo de software y matemáticas.'
            },
            projects: {
                title: 'Proyectos',
                description: 'Una muestra de los proyectos más significativos en los que he trabajado, demostrando mis habilidades técnicas y capacidad de resolución de problemas.'
            },
            about: 'Acerca de Mí',
            skills: {
                title: 'Habilidades Técnicas',
                description: 'Un resumen completo de mi experiencia técnica y las herramientas con las que trabajo regularmente en el desarrollo de software.'
            },
            contact: 'Contacto'
        },
        education: {
            engineering: {
                title: 'Ingeniería en Computación',
                institution: 'Facultad de Ingeniería - UdelaR',
                intro: 'Estudiante activo en la carrera de Ingeniería en Computación, desarrollando conocimientos en:',
                items: [
                    'Programación y Desarrollo de Software',
                    'Algoritmos y Estructuras de Datos',
                    'Sistemas Operativos y Redes',
                    'Matemática Aplicada a la Ingeniería'
                ]
            },
            fullstack: {
                title: 'Desarrollo Full Stack',
                institution: 'Holberton School',
                intro: 'Formación intensiva en desarrollo de software con especialización en:',
                items: [
                    'Desarrollo Frontend (HTML, CSS, JavaScript)',
                    'Desarrollo Backend (Python, SQL)',
                    'DevOps y Control de Versiones'
                ]
            },
            math: {
                title: 'Especialización en Matemática',
                institution: 'Instituto de Profesores de Artigas (IPA)',
                intro: 'Formación en pedagogía y didáctica de la matemática:',
                items: [
                    'Pedagogía y Didáctica Matemática',
                    'Análisis Matemático',
                    'Álgebra y Geometría',
                    'Prácticas Docentes en Matemática'
                ]
            }
        },
        contact: {
            title: '¿Interesado en trabajar juntos?',
            subtitle: 'Estoy disponible para proyectos freelance, colaboraciones y oportunidades laborales a tiempo completo.',
            email: 'Email',
            phone: 'Teléfono',
            location: 'Ubicación'
        },
        footer: ' 2025 Santiago Fleitas | Portfolio Profesional',
        bootPrompt: 'Presiona para iniciar...',
        projectButtons: {
            repository: 'Repositorio',
            demo: 'Demo en vivo'
        }
    },
    en: {
        greeting: 'Hi, I\'m',
        description: 'Welcome to my professional space. Here you\'ll find my journey, technical skills, and the projects I\'ve worked on. I invite you to learn more about my profile and explore how I can contribute to your team or project.',
        projects: 'View Projects',
        typedStrings: [
            'Backend Developer',
            'Frontend Developer',
            'Computer Engineer'
        ],
        menuItems: {
            inicio: 'Home',
            acerca: 'About Me',
            educacion: 'Education',
            habilidades: 'Skills',
            proyectos: 'Projects',
            contacto: 'Contact'
        },
        aboutTitle: 'About Me',
        aboutDescription: 'I am a Holberton School graduate with experience in backend and frontend development. I completed the first year of the Mathematics program at the Instituto de Profesores Artigas (IPA), although it is currently on hold. I am currently studying Computer Engineering at UdelaR and participating in various projects. I feel ready to take on new professional challenges, bringing strong technical skills and a great passion for technology.',
        skills: {
            communication: {
                title: 'Effective Communication',
                description: 'Ability to convey technical ideas clearly and accessibly to different audiences.'
            },
            teamManagement: {
                title: 'Team Management',
                description: 'Experience coordinating technical teams and fostering a collaborative environment.'
            },
            problemSolving: {
                title: 'Problem Solving',
                description: 'Analytical approach to identifying efficient solutions to complex challenges.'
            },
            mathThinking: {
                title: 'Mathematical Thinking',
                description: 'Application of mathematical concepts to model and solve programming problems.'
            },
            english: {
                title: 'Intermediate Technical English',
                description: 'Ability to communicate in English in technical and professional contexts.'
            }
        },
        downloadCV: 'Download CV',
        education: {
            title: 'Education',
            current: 'Present',
            downloadCert: 'Download Certificate'
        },
        sectionTitles: {
            education: {
                title: 'Education',
                description: 'My academic journey reflects my commitment to continuous learning and professional development. Here you\'ll find details about my training in engineering, software development, and mathematics.'
            },
            projects: {
                title: 'Projects',
                description: 'A showcase of the most significant projects I\'ve worked on, demonstrating my technical skills and problem-solving abilities.'
            },
            about: 'About Me',
            skills: {
                title: 'Technical Skills',
                description: 'A comprehensive overview of my technical expertise and tools I work with regularly in software development.'
            },
            contact: 'Contact'
        },
        education: {
            engineering: {
                title: 'Computer Engineering',
                institution: 'Faculty of Engineering - UdelaR',
                intro: 'Active student in Computer Engineering, developing knowledge in:',
                items: [
                    'Software Programming and Development',
                    'Algorithms and Data Structures',
                    'Operating Systems and Networks',
                    'Engineering Applied Mathematics'
                ]
            },
            fullstack: {
                title: 'Full Stack Development',
                institution: 'Holberton School',
                intro: 'Intensive training in software development specializing in:',
                items: [
                    'Frontend Development (HTML, CSS, JavaScript)',
                    'Backend Development (Python, SQL)',
                    'DevOps and Version Control'
                ]
            },
            math: {
                title: 'Mathematics Specialization',
                institution: 'Artigas Teachers Institute (IPA)',
                intro: 'Training in mathematics pedagogy and didactics:',
                items: [
                    'Mathematics Pedagogy and Didactics',
                    'Mathematical Analysis',
                    'Algebra and Geometry',
                    'Mathematics Teaching Practices'
                ]
            }
        },
        contact: {
            title: 'Interested in working together?',
            subtitle: 'I am available for freelance projects, collaborations and full-time job opportunities.',
            email: 'Email',
            phone: 'Phone',
            location: 'Location'
        },
        footer: ' 2025 Santiago Fleitas | Professional Portfolio',
        bootPrompt: 'Press to start...',
        projectButtons: {
            repository: 'View repository',
            demo: 'Live Demo'
        }
    }
};

function updateLanguage(lang) {
    const elements = {
        greeting: document.querySelector('h1'),
        description: document.querySelector('.description'),
        projectsBtn: document.querySelector('.primary'),
        contactBtn: document.querySelector('.secondary'),
        downloadCVBtn: document.querySelector('.download-cv'),
        contactTitle: document.querySelector('.contact-intro h2'),
        contactSubtitle: document.querySelector('.contact-intro p'),
        emailText: document.querySelector('.contact-item:nth-child(1) h3'),
        phoneText: document.querySelector('.contact-item:nth-child(2) h3'),
        locationText: document.querySelector('.contact-item:nth-child(3) h3'),
        footerText: document.querySelector('.footer p'),
    };

    elements.greeting.innerHTML = `${translations[lang].greeting} <span class="highlight">Santiago Fleitas</span>`;
    elements.downloadCVBtn.textContent = translations[lang].downloadcv;
    elements.description.textContent = translations[lang].description;
    elements.projectsBtn.textContent = translations[lang].projects;
    elements.contactTitle.textContent = translations[lang].contact.title;
    elements.contactSubtitle.textContent = translations[lang].contact.subtitle;
    elements.emailText.textContent = translations[lang].contact.email;
    elements.phoneText.textContent = translations[lang].contact.phone;
    elements.locationText.textContent = translations[lang].contact.location;
    elements.footerText.textContent = translations[lang].footer;
    
    initTyped(translations[lang].typedStrings);

    // Update menu items
    const menuItems = document.querySelectorAll('.nav-links a');
    menuItems.forEach(item => {
        const key = item.getAttribute('data-key');
        if (key && translations[lang].menuItems[key]) {
            item.textContent = translations[lang].menuItems[key];
        }
    });

    // Update section titles and descriptions
    document.querySelectorAll('.section-title').forEach(section => {
        const key = section.getAttribute('data-section');
        if (key && translations[lang].sectionTitles && translations[lang].sectionTitles[key]) {
            const title = section.querySelector('h2');
            const description = section.querySelector('p');
            
            if (title) {
                title.textContent = translations[lang].sectionTitles[key].title || translations[lang].sectionTitles[key];
            }
            
            if (description && translations[lang].sectionTitles[key].description) {
                description.textContent = translations[lang].sectionTitles[key].description;
            }
        }
    });

    // Update About section if it exists
    const aboutSection = document.querySelector('#acerca');
    if (aboutSection) {
        const aboutTitle = aboutSection.querySelector('h2');
        const aboutDescription = aboutSection.querySelector('.about-description');
        const skillCards = aboutSection.querySelectorAll('.skill-card');
        const downloadButton = aboutSection.querySelector('.download-cv');

        if (aboutDescription) {
            aboutDescription.textContent = translations[lang].aboutDescription;
        }
        if (downloadButton) {
            downloadButton.textContent = translations[lang].downloadCV;
        }
        
        // Update skill cards
        skillCards.forEach((card, index) => {
            const skillKey = Object.keys(translations[lang].skills)[index];
            if (skillKey) {
                const titleElement = card.querySelector('h3');
                const descElement = card.querySelector('p');
                
                if (titleElement) {
                    titleElement.textContent = translations[lang].skills[skillKey].title;
                }
                if (descElement) {
                    descElement.textContent = translations[lang].skills[skillKey].description;
                }
            }
        });
    }

    // Update education section if it exists
    const educationSection = document.querySelector('#educacion');
    if (educationSection) {
        const downloadCertBtn = educationSection.querySelector('.certificate-btn');
        if (downloadCertBtn) {
            downloadCertBtn.textContent = translations[lang].education.downloadCert;
        }

        // Update timeline content
        const timelineItems = educationSection.querySelectorAll('.timeline-content');
        timelineItems.forEach((content, index) => {
            const educationType = ['engineering', 'fullstack', 'math'][index];
            if (translations[lang].education[educationType]) {
                const eduData = translations[lang].education[educationType];
                
                const title = content.querySelector('.timeline-title');
                const subtitle = content.querySelector('.timeline-subtitle');
                const intro = content.querySelector('p');
                const list = content.querySelector('.timeline-list');
                
                if (title) {
                    title.innerHTML = `
                        <i class="fas fa-graduation-cap"></i>
                        ${eduData.title}
                    `;
                }
                if (subtitle) {
                    subtitle.textContent = eduData.institution;
                }
                if (intro) {
                    intro.textContent = eduData.intro;
                }
                if (list) {
                    list.innerHTML = eduData.items.map(item => `<li>${item}</li>`).join('');
                }
            }
        });

        // Update dates
        document.querySelectorAll('.timeline-date').forEach(date => {
            if (lang === 'en') {
                date.textContent = date.textContent.replace('Actualidad', 'Present');
            } else {
                date.textContent = date.textContent.replace('Present', 'Actualidad');
            }
        });
    }

    // Update project section if it exists
    const projectButtons = document.querySelectorAll('.win98-button');

    // Update education section if it exists
    const projectsSection = document.querySelector('#proyectos');
    if (projectsSection) {
        document.querySelectorAll('.win98-button').forEach(button => {
            const buttonType = button.classList.contains('repo-btn') ? 'repository' : 'demo';
                button.textContent = translations[lang].projectButtons[buttonType];
        });
    }
}

esFlag.addEventListener('click', () => updateLanguage('es'));
enFlag.addEventListener('click', () => updateLanguage('en'));

// Add scroll event listener for navbar transparency
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Initialize with Spanish
initTyped(translations['es'].typedStrings);

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to top button
const scrollTop = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        scrollTop.classList.add('visible');
    } else {
        scrollTop.classList.remove('visible');
    }
});

scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Technical Skills Data
const technicalSkills = {
    frontEnd: {
        category: 'Frontend Development',
        skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS']
    },
    backEnd: {
        category: 'Backend Development',
        skills: ['Python', 'Node.js', 'Express.js', 'MySQL', 'MongoDB']
    },
    tools: {
        category: 'Tools & Technologies',
        skills: ['Flutter', 'Git', 'Docker', 'Figma', 'Jira']
    }
};

// Initialize skill categories
document.querySelectorAll('.skill-category').forEach(category => {
    category.addEventListener('click', () => {
        category.classList.toggle('active');
    });
});

// Skill cards toggle functionality
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});

// Windows 98 Projects Section
const projectsData = {
    ibaeduca: {
        title: "IbaEduca Acualmente trabajando",
        description: "Plataforma educativa para la venta de cursos en línea. Incluye sistema de gestión de contenido, reproducción de videos y procesamiento de pagos.",
        status: "Currently working",
        tech: ["JavaScript", "React", "Node.js"],
        images: ["images/IbaEduca/IbaEduca (3).png"]
    },
    cazapalabras: {
        title: "CazaPalabras",
        description: "Juego estilo Wordle donde los usuarios deben encontrar palabras ocultas.",
        tech: ["JavaScript", "HTML5", "CSS3"],
        repo: "https://github.com/SantiagoFleitasIbarra/CazaPalabras-Juego-2025",
        demo: "https://santiagofleitasibarra.github.io/CazaPalabras-Juego-2025/",
        images: ["images/CazaPalabras/CP (1).png"]
    },
    ingles: {
        title: "Inglés Divertido",
        description: "Una plataforma interactiva diseñada para hacer el aprendizaje del inglés más ameno y efectivo.",
        tech: ["JavaScript", "HTML5", "CSS3"],
        repo: "https://github.com/SantiagoFleitasIbarra/ingles-divertido",
        demo: "https://santiagofleitasibarra.github.io/ingles-divertido/",
        images: ["images/ingles-divertido/Ingles (1).png"]
    },
    tareas: {
        title: "Organiza tu día con alegría",
        description: "Es tu espacio para organizar tus tareas diarias de una manera fácil y entretenida. Con nuestro gestor, podrás añadir, completar, editar y eliminar tareas. ¡Comienza a organizar tu día con una sonrisa!",
        tech: ["JavaScript", "HTML5", "CSS3"],
        repo: "https://github.com/SantiagoFleitasIbarra/Organiza-tu-dia",
        demo: "https://santiagofleitasibarra.github.io/Organiza-tu-dia/",
        images: ["images/Gestor-tareas/Tareas (2).png"]
    },
    warded: {
        title: "Warded",
        description: "Aplicación móvil que crea comunidades seguras a través de grupos privados. Desarrollé el backend completo, incluyendo sistema de notificaciones y gestión de base de datos. La app permite compartir ubicaciones, enviar alertas en tiempo real y asistir a personas con discapacidad.",
        tech: ["Flutter", "Firebase", "Dart"],
        repo: "https://github.com/German1127/Warded",
        images: ["images/Warded/warded2.jpg"]
    },
    calculadora: {
        title: "Calculadora Científica",
        description: "Una herramienta avanzada diseñada para facilitar cálculos matemáticos complejos con una interfaz adaptable y multilingüe. Dicha página es adaptada a celulares.",
        tech: ["JavaScript", "HTML5", "CSS3"],
        repo: "https://github.com/SantiagoFleitasIbarra/calculadora-cientifica",
        demo: "https://santiagofleitasibarra.github.io/calculadora-cientifica/",
        images: ["images/Calculadora-cientifica/Calculadora (1).png"]
    },
    libreria: {
        title: "Librería Online",
        description: "Un espacio donde puedes publicar y descargar libros de forma gratuita. Explora una gran variedad de ebooks en múltiples categorías y contribuye compartiendo tus propios escritos con la comunidad.",
        tech: ["JavaScript", "HTML5", "CSS3"],
        repo: "https://github.com/SantiagoFleitasIbarra/Libreria-Online",
        demo: "https://santiagofleitasibarra.github.io/Libreria-Online/",
        images: ["images/Libreria-online/Librería (1).png"]
    }
};

function createProjectWindow(project) {
    const projectData = projectsData[project];
    if (!projectData) return;

    // Close any existing window for this project
    const existingWindow = document.querySelector(`.win98-window[data-project="${project}"]`);
    if (existingWindow) {
        existingWindow.remove();
        removeTaskbarItem(project);
        return;
    }

    const windowEl = document.createElement('div');
    windowEl.className = 'win98-window active';
    windowEl.setAttribute('data-project', project);
    
    // Get desktop bounds
    const desktop = document.getElementById('desktop');
    const desktopRect = desktop.getBoundingClientRect();
    
    // Set initial position within desktop bounds
    windowEl.style.left = `${Math.min(50, desktopRect.width - 300)}px`;
    windowEl.style.top = `${Math.min(50, desktopRect.height - 200)}px`;
    
    windowEl.innerHTML = `
        <div class="window-header">
            <div class="window-title">${projectData.title}</div>
            <div class="window-controls">
                <button class="minimize-btn">_</button>
                <button class="close-btn">×</button>
            </div>
        </div>
        <div class="window-content">
            <div class="project-info">
                <p class="project-description">${projectData.description}</p>
                <div class="project-links">
                    <button class="win98-button repo-btn" onclick="window.open('${projectData.repo}', '_blank')">
                        <i class="fab fa-github"></i> View repository
                    </button>
                    <button class="win98-button demo-btn" onclick="window.open('${projectData.demo}', '_blank')">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </button>
                </div>
            </div>
        </div>
    `;

    document.getElementById('desktop').appendChild(windowEl);
    addTaskbarItem(project, projectData.title);
    
    // Make window draggable with bounds
    makeDraggableWithBounds(windowEl, desktop);

    // Add event listeners for window controls
    windowEl.querySelector('.close-btn').addEventListener('click', () => {
        windowEl.remove();
        removeTaskbarItem(project);
    });

    windowEl.querySelector('.minimize-btn').addEventListener('click', () => {
        windowEl.style.display = 'none';
        updateTaskbarItem(project, false);
    });
}

function addTaskbarItem(project, title) {
    const taskbar = document.querySelector('.taskbar-items');
    const item = document.createElement('div');
    item.className = 'taskbar-item active';
    item.setAttribute('data-project', project);
    item.innerHTML = `
        <img src="images/logos-iconos/folder-icon.png" alt="${title}" style="width: 20px; height: 20px;">
        <span>${title}</span>
    `;
    
    item.addEventListener('click', () => toggleWindow(project));
    taskbar.appendChild(item);
}

function removeTaskbarItem(project) {
    const item = document.querySelector(`.taskbar-item[data-project="${project}"]`);
    if (item) item.remove();
}

function updateTaskbarItem(project, isActive) {
    const item = document.querySelector(`.taskbar-item[data-project="${project}"]`);
    if (item) {
        item.classList.toggle('active', isActive);
    }
}

function toggleWindow(project) {
    const window = document.querySelector(`.win98-window[data-project="${project}"]`);
    if (window) {
        const isHidden = window.style.display === 'none';
        window.style.display = isHidden ? 'block' : 'none';
        updateTaskbarItem(project, isHidden);
    }
}

function makeDraggableWithBounds(element, container) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    element.querySelector('.window-header').onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        // Calculate new position
        let newTop = element.offsetTop - pos2;
        let newLeft = element.offsetLeft - pos1;

        // Get container bounds
        const containerRect = container.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();

        // Constrain to container bounds
        newTop = Math.max(0, Math.min(newTop, containerRect.height - elementRect.height));
        newLeft = Math.max(0, Math.min(newLeft, containerRect.width - elementRect.width));

        // Apply new position
        element.style.top = newTop + "px";
        element.style.left = newLeft + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

document.querySelectorAll('.desktop-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        const project = icon.getAttribute('data-project');
        if (project === 'images') {
            createImagesFolder();
        } else {
            createProjectWindow(project);
        }
    });
});

function createImagesFolder() {
    const windowEl = document.createElement('div');
    windowEl.className = 'win98-window folder-window active';
    
    // Get desktop bounds
    const desktop = document.getElementById('desktop');
    const desktopRect = desktop.getBoundingClientRect();

    // Set initial position within desktop bounds
    windowEl.style.left = `${Math.min(50, desktopRect.width - 300)}px`;
    windowEl.style.top = `${Math.min(50, desktopRect.height - 200)}px`;

    windowEl.innerHTML = `
        <div class="window-header">
            <div class="window-title">Images</div>
            <div class="window-controls">
                <button class="close-btn">×</button>
            </div>
        </div>
        <div class="window-content">
            <div class="folder-content">
                ${Object.keys(projectsData).map(p => `
                    <div class="folder-item" data-project="${p}" onclick="openProjectImages('${p}')">
                        <img src="images/logos-iconos/folder-icon.png" alt="${p}">
                        <span>${projectsData[p].title}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    document.getElementById('desktop').appendChild(windowEl);
    makeDraggableWithBounds(windowEl, document.getElementById('desktop'));

        // Add event listeners for window controls
    windowEl.querySelector('.close-btn').addEventListener('click', () => {
        windowEl.remove();
        removeTaskbarItem('images');
    });
}

function openProjectImages(project) {
    const projectData = projectsData[project];
    if (!projectData || !projectData.images) return;

    const windowEl = document.createElement('div');
    windowEl.className = 'win98-window image-window active';

     // Get desktop bounds
    const desktop = document.getElementById('desktop');
    const desktopRect = desktop.getBoundingClientRect();

    // Set initial position within desktop bounds
    windowEl.style.left = `${Math.min(50, desktopRect.width - 300)}px`;
    windowEl.style.top = `${Math.min(50, desktopRect.height - 200)}px`;

    windowEl.innerHTML = `
        <div class="window-header">
            <div class="window-title">${projectData.title} Images</div>
            <div class="window-controls">
                <button onclick="this.closest('.win98-window').remove()">×</button>
            </div>
        </div>
        <div class="window-content">
            <div class="image-gallery">
                ${projectData.images.map(img => `<img src="${img}" alt="${projectData.title}" style="max-width: 100%; height: auto;">`).join('')}
            </div>
        </div>
    `;

    document.getElementById('desktop').appendChild(windowEl);
    makeDraggableWithBounds(windowEl, document.getElementById('desktop'));
}

window.addEventListener('load', () => {
    const desktopIcons = document.querySelector('.desktop-icons');
    const imagesIcon = document.querySelector('.desktop-icon[data-project="images"]');
    desktopIcons.appendChild(imagesIcon);
    imagesIcon.style.position = 'absolute';
    imagesIcon.style.bottom = '30px';
    imagesIcon.style.right = '10px';
    imagesIcon.style.left = 'auto';
});

document.addEventListener('DOMContentLoaded', () => {
    const bootScreen = document.getElementById('bootScreen');
    const desktop = document.getElementById('desktop');

    bootScreen.addEventListener('click', () => {
        bootScreen.style.display = 'none';
        desktop.classList.add('active');
    });
});