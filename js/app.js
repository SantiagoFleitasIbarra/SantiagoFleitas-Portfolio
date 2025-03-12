import { gsap } from 'gsap';
import { ScrollTrigger } from 'ScrollTrigger';

// Registrar ScrollTrigger con GSAP
gsap.registerPlugin(ScrollTrigger);

// Función para manejar la navegación activa
function handleNavigation() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Función para manejar el header al hacer scroll
function handleHeaderScroll() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Función para manejar el botón de volver arriba
function handleBackToTop() {
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
}

// Animaciones con GSAP
function initAnimations() {
    // Animación del Hero
    gsap.from('.hero-content', {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
    });
    
    // Animación de las secciones al hacer scroll
    gsap.utils.toArray('.section').forEach((section, i) => {
        ScrollTrigger.create({
            trigger: section,
            start: 'top 80%',
            onEnter: () => {
                gsap.to(section, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out'
                });
            },
            once: true
        });
    });
    
    // Animación de la barra de habilidades
    gsap.utils.toArray('.skill-level').forEach(skill => {
        const width = skill.style.width;
        skill.style.width = 0;
        
        ScrollTrigger.create({
            trigger: skill,
            start: 'top 90%',
            onEnter: () => {
                gsap.to(skill, {
                    width: width,
                    duration: 1.5,
                    ease: 'power3.out'
                });
            }
        });
    });
    
    // Animación de las tarjetas
    gsap.utils.toArray('.card, .project-card, .timeline-content').forEach(card => {
        ScrollTrigger.create({
            trigger: card,
            start: 'top 90%',
            onEnter: () => {
                gsap.from(card, {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out'
                });
            },
            once: true
        });
    });
}

// Función para manejar el menú móvil
function handleMobileMenu() {
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    
    // Insertar botón de menú
    header.insertBefore(menuToggle, nav);
    if (window.innerWidth > 768) {
        menuToggle.style.display = 'none';
    }
    
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            menuToggle.style.display = 'flex';
        } else {
            menuToggle.style.display = 'none';
            nav.classList.remove('active');
        }
    });
    
    // Evento de clic para el menú móvil
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });
    
    // Cerrar el menú al hacer clic en un enlace
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
                menuToggle.querySelector('i').classList.add('fa-bars');
                menuToggle.querySelector('i').classList.remove('fa-times');
            }
        });
    });
}

// Función para manejar el formulario de contacto
function handleContactForm() {
    const form = document.querySelector('.contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Aquí se podría agregar la lógica para enviar el formulario
        // Por ahora, solo mostraremos una alerta
        alert('Mensaje enviado con éxito! (Simulación)');
        form.reset();
    });
}

// Función para manejar mostrar/ocultar proyectos adicionales
function handleProjectsToggle() {
    const toggleButton = document.getElementById('toggle-projects');
    const hiddenProjects = document.querySelector('.hidden-projects');
    
    toggleButton.addEventListener('click', () => {
        hiddenProjects.style.display = hiddenProjects.style.display === 'grid' ? 'none' : 'grid';
        
        // Use data-i18n attributes for toggling text
        if (hiddenProjects.style.display === 'grid') {
            toggleButton.setAttribute('data-i18n', 'hide_projects');
        } else {
            toggleButton.setAttribute('data-i18n', 'more_projects');
        }
        
        // Update the text based on current language
        const currentLang = localStorage.getItem('language') || 'es';
        const translations = {
            'es': {
                'more_projects': 'Ver más proyectos',
                'hide_projects': 'Ocultar proyectos'
            },
            'en': {
                'more_projects': 'View more projects',
                'hide_projects': 'Hide projects'
            }
        };
        
        const key = toggleButton.getAttribute('data-i18n');
        toggleButton.textContent = translations[currentLang][key];
        
        // Animación con GSAP para los proyectos adicionales
        if (hiddenProjects.style.display === 'grid') {
            gsap.from('.hidden-projects .project-card', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out'
            });
        }
    });
}

// Función para manejar el cambio de idioma
function handleLanguageSwitch() {
    const langToggle = document.querySelectorAll('.language-selector a');
    const translations = {
        'es': {
            'nav_home': 'INICIO',
            'nav_about': 'SOBRE MÍ',
            'nav_education': 'EDUCACIÓN',
            'nav_skills': 'HABILIDADES',
            'nav_projects': 'PROYECTOS',
            'nav_contact': 'CONTACTO',
            'hero_title': 'Santiago Fleitas',
            'hero_subtitle': 'Desarrollador Full Stack',
            'hero_description': 'Bienvenido a mi espacio profesional. Aquí encontrarás mi trayectoria, habilidades técnicas y los proyectos en los que he trabajado. Te invito a conocer más sobre mi perfil y explorar cómo puedo contribuir a tu equipo o proyecto.',
            'hero_button': 'Ver Proyectos',
            'about_title': 'SOBRE MÍ',
            'about_p1': 'Soy graduado de Holberton School con experiencia en desarrollo backend y frontend. Completé el primer año de la formación en Matemáticas en el Instituto de Profesores Artigas (IPA), aunque actualmente está pausada.',
            'about_p2': 'Actualmente estudio Ingeniería en Computación en la UdelaR y participo en varios proyectos. Me siento preparado para asumir nuevos desafíos profesionales, aportando habilidades técnicas sólidas y una gran pasión por la tecnología.',
            'cv_button': 'Descargar CV',
            'card_title1': 'Comunicación Efectiva',
            'card_desc1': 'Habilidad para transmitir ideas técnicas de forma clara y accesible a diferentes audiencias.',
            'card_title2': 'Gestión de Equipos',
            'card_desc2': 'Experiencia coordinando equipos técnicos y fomentando un ambiente colaborativo.',
            'card_title3': 'Resolución de Problemas',
            'card_desc3': 'Enfoque analítico para identificar soluciones eficientes ante desafíos complejos.',
            'card_title4': 'Pensamiento Matemático',
            'card_desc4': 'Aplicación de conceptos matemáticos para modelar y resolver problemas de programación.',
            'card_title5': 'Inglés Técnico Intermedio',
            'card_desc5': 'Capacidad para comunicarme en inglés en contextos técnicos y profesionales.',
            'education_title': 'EDUCACIÓN',
            'certificate_button': 'Descargar Certificado',
            'skills_title': 'HABILIDADES',
            'skills_frontend': 'Frontend',
            'skills_backend': 'Backend',
            'skills_mobile': 'Mobile & Otros',
            'projects_title': 'PROYECTOS',
            'projects_highlighted': 'IbaEduca - Proyecto Destacado',
            'projects_highlighted_desc': 'Una plataforma educativa innovadora diseñada para transformar la manera en que los estudiantes interactúan con el contenido educativo.',
            'video_demo': 'Video Demo',
            'project_tag10': 'Actualmente trabajando',
            'more_projects': 'Ver más proyectos',
            'hide_projects': 'Ocultar proyectos',
            'contact_title': 'CONTACTO',
            'contact_interest': '¿Interesado en trabajar juntos?',
            'contact_availability': 'Estoy disponible para proyectos freelance, colaboraciones y oportunidades laborales a tiempo completo.',
            'contact_name': 'Nombre',
            'contact_subject': 'Asunto',
            'contact_message': 'Mensaje',
            'contact_send': 'Enviar mensaje',
            'footer_quick_links': 'Enlaces rápidos',
            'footer_contact': 'Contacto',
            'footer_rights': '2025 Mi Portfolio. Todos los derechos reservados.',
            'education_year': '2025 - Actualidad',
            'education_item1_title': 'Ingeniería en Computación',
            'education_item1_school': 'Facultad de Ingeniería - UdelaR',
            'education_item1_desc': 'Estudiante activo en la carrera de Ingeniería en Computación, desarrollando conocimientos en:',
            'education_item1_list1': 'Programación y Desarrollo de Software',
            'education_item1_list2': 'Algoritmos y Estructuras de Datos',
            'education_item1_list3': 'Sistemas Operativos y Redes',
            'education_item1_list4': 'Matemática Aplicada a la Ingeniería',
            'education_item2_title': 'Desarrollo Full Stack',
            'education_item2_school': 'Holberton School',
            'education_item2_desc': 'Formación intensiva en desarrollo de software con especialización en:',
            'education_item2_list1': 'Desarrollo Frontend (HTML, CSS, JavaScript)',
            'education_item2_list2': 'Desarrollo Backend (Python, SQL)',
            'education_item2_list3': 'DevOps y Control de Versiones',
            'education_item2_button': 'Descargar Certificado',
            'education_item3_title': 'Especialización en Matemática',
            'education_item3_school': 'Instituto de Profesores de Artigas (IPA)',
            'education_item3_desc': 'Formación en pedagogía y didáctica de la matemática:',
            'education_item3_list1': 'Pedagogía y Didáctica Matemática',
            'education_item3_list2': 'Análisis Matemático',
            'education_item3_list3': 'Álgebra y Geometría',
            'education_item3_list4': 'Prácticas Docentes en Matemática',
            'project1_title': 'IbaEduca Página Principal',
            'project1_desc': 'Plataforma educativa para la venta de cursos en línea. Incluye sistema de gestión de contenido, reproducción de videos y procesamiento de pagos. Desarrollado en colaboración para ofrecer educación accesible y de calidad.',
            'project1_tag1': 'Acualmente Trabajando',
            'project2_title': 'CazaPalabras',
            'project2_desc': 'Juego estilo Wordle donde los usuarios deben encontrar palabras ocultas. Desarrollado con JavaScript vanilla, HTML5 y CSS3, implementando lógica de juego compleja y animaciones interactivas.',
            'project2_tag1': 'JavaScript',
            'project2_tag2': 'HTML5',
            'project2_tag3': 'CSS3',
            'project3_title': 'Inglés Divertido',
            'project3_desc': 'Una plataforma interactiva diseñada para hacer el aprendizaje del inglés más ameno y efectivo. Dicha plataforma es adaptada a celulares.',
            'project3_tag1': 'JavaScript',
            'project3_tag2': 'HTML5',
            'project3_tag3': 'CSS3',
            'project4_title': 'Organiza tu día con alegría',
            'project4_desc': 'Es tu espacio para organizar tus tareas diarias de una manera fácil y entretenida. Con nuestro gestor, podrás añadir, completar, editar y eliminar tareas. ¡Comienza a organizar tu día con una sonrisa!',
            'project4_tag1': 'JavaScript',
            'project4_tag2': 'HTML5',
            'project4_tag3': 'CSS3',
            'project5_title': 'Warded',
            'project5_desc': 'Aplicación móvil que crea comunidades seguras a través de grupos privados. Desarrollé el backend completo, incluyendo sistema de notificaciones y gestión de base de datos. La app permite compartir ubicaciones, enviar alertas en tiempo real y asistir a personas con discapacidad.',
            'project5_tag1': 'Flutter',
            'project5_tag2': 'Firebase',
            'project5_tag3': 'Dart',
            'project6_title': 'Calculadora Científica',
            'project6_desc': 'Una herramienta avanzada diseñada para facilitar cálculos matemáticos complejos con una interfaz adaptable y multilingüe. Dicha página es adaptada a celulares.',
            'project6_tag1': 'JavaScript',
            'project6_tag2': 'HTML5',
            'project6_tag3': 'CSS3',
            'project7_title': 'Libería Online',
            'project7_desc': 'Un espacio donde puedes publicar y descargar libros de forma gratuita. Explora una gran variedad de ebooks en múltiples categorías y contribuye compartiendo tus propios escritos con la comunidad.',
            'project7_tag1': 'JavaScript',
            'project7_tag2': 'HTML5',
            'project7_tag3': 'CSS3',
            'project8_title': 'Próximamente',
            'project8_desc': '',
            'project8_tag1': '',
            'project8_tag2': '',
            'project8_tag3': '',
            'hide_projects': 'Ocultar proyectos',
            'footer_link1': 'Inicio',
            'footer_link2': 'Sobre mí',
            'footer_link3': 'Educación',
            'footer_link4': 'Habilidades',
            'footer_link5': 'Proyectos',
        },
        'en': {
            'nav_home': 'HOME',
            'nav_about': 'ABOUT ME',
            'nav_education': 'EDUCATION',
            'nav_skills': 'SKILLS',
            'nav_projects': 'PROJECTS',
            'nav_contact': 'CONTACT',
            'hero_title': 'Santiago Fleitas',
            'hero_subtitle': 'Full Stack Developer',
            'hero_description': 'Welcome to my professional space. Here you will find my career path, technical skills and the projects I have worked on. I invite you to learn more about my profile and explore how I can contribute to your team or project.',
            'hero_button': 'View Projects',
            'about_title': 'ABOUT ME',
            'about_p1': 'I am a Holberton School graduate with experience in backend and frontend development. I completed the first year of Mathematics training at the Instituto de Profesores Artigas (IPA), although it is currently on hold.',
            'about_p2': 'I am currently studying Computer Engineering at UdelaR and participating in several projects. I feel ready to take on new professional challenges, bringing solid technical skills and a great passion for technology.',
            'cv_button': 'Download CV',
            'card_title1': 'Effective Communication',
            'card_desc1': 'Ability to convey technical ideas clearly and accessibly to different audiences.',
            'card_title2': 'Team Management',
            'card_desc2': 'Experience coordinating technical teams and fostering a collaborative environment.',
            'card_title3': 'Problem Solving',
            'card_desc3': 'Analytical approach to identify efficient solutions to complex challenges.',
            'card_title4': 'Mathematical Thinking',
            'card_desc4': 'Application of mathematical concepts to model and solve programming problems.',
            'card_title5': 'Intermediate Technical English',
            'card_desc5': 'Ability to communicate in English in technical and professional contexts.',
            'education_title': 'EDUCATION',
            'certificate_button': 'Download Certificate',
            'skills_title': 'SKILLS',
            'skills_frontend': 'Frontend',
            'skills_backend': 'Backend',
            'skills_mobile': 'Mobile & Others',
            'projects_title': 'PROJECTS',
            'projects_highlighted': 'IbaEduca - Featured Project',
            'projects_highlighted_desc': 'An innovative educational platform designed to transform the way students interact with educational content.',
            'video_demo': 'Video Demo',
            'project_tag10': 'Currently working',
            'more_projects': 'View more projects',
            'hide_projects': 'Hide projects',
            'contact_title': 'CONTACT',
            'contact_interest': 'Interested in working together?',
            'contact_availability': 'I am available for freelance projects, collaborations and full-time job opportunities.',
            'contact_name': 'Name',
            'contact_subject': 'Subject',
            'contact_message': 'Message',
            'contact_send': 'Send message',
            'footer_quick_links': 'Quick links',
            'footer_contact': 'Contact',
            'footer_rights': '2025 My Portfolio. All rights reserved.',
            'education_year': '2025 - Present',
            'education_item1_title': 'Computer Engineering',
            'education_item1_school': 'Faculty of Engineering - UdelaR',
            'education_item1_desc': 'Active student in Computer Engineering, developing knowledge in:',
            'education_item1_list1': 'Programming and Software Development',
            'education_item1_list2': 'Algorithms and Data Structures',
            'education_item1_list3': 'Operating Systems and Networks',
            'education_item1_list4': 'Applied Mathematics for Engineering',
            'education_item2_title': 'Full Stack Development',
            'education_item2_school': 'Holberton School',
            'education_item2_desc': 'Intensive training in software development specializing in:',
            'education_item2_list1': 'Frontend Development (HTML, CSS, JavaScript)',
            'education_item2_list2': 'Backend Development (Python, SQL)',
            'education_item2_list3': 'DevOps and Version Control',
            'education_item2_button': 'Download Certificate',
            'education_item3_title': 'Mathematics Specialization',
            'education_item3_school': 'Instituto de Profesores de Artigas (IPA)',
            'education_item3_desc': 'Training in pedagogy and didactics of mathematics:',
            'education_item3_list1': 'Mathematics Pedagogy and Didactics',
            'education_item3_list2': 'Mathematical Analysis',
            'education_item3_list3': 'Algebra and Geometry',
            'education_item3_list4': 'Teaching Practices in Mathematics',
            'project1_title': 'IbaEduca Home Page',
            'project1_desc': 'Educational platform for selling online courses. Includes a content management system, video playback, and payment processing. Developed in collaboration to offer accessible and high-quality education.',
            'project1_tag1': 'Currently working',
            'project2_title': 'CazaPalabras',
            'project2_desc': 'Wordle-style game where users must find hidden words. Developed with vanilla JavaScript, HTML5, and CSS3, implementing complex game logic and interactive animations.',
            'project2_tag1': 'JavaScript',
            'project2_tag2': 'HTML5',
            'project2_tag3': 'CSS3',
            'project3_title': 'Inglés Divertido',
            'project3_desc': 'An interactive platform designed to make learning English more enjoyable and effective. This platform is mobile-friendly.',
            'project3_tag1': 'JavaScript',
            'project3_tag2': 'HTML5',
            'project3_tag3': 'CSS3',
            'project4_title': 'Organiza tu día con alegría',
            'project4_desc': 'Its your space to organize your daily tasks in an easy and fun way. With our manager, you can add, complete, edit, and delete tasks. Start organizing your day with a smile!',
            'project4_tag1': 'JavaScript',
            'project4_tag2': 'HTML5',
            'project4_tag3': 'CSS3',
            'project5_title': 'Warded',
            'project5_desc': 'Mobile application that creates safe communities through private groups. I developed the complete backend, including a notification system and database management. The app allows users to share locations, send real-time alerts, and assist people with disabilities.',
            'project5_tag1': 'Flutter',
            'project5_tag2': 'Firebase',
            'project5_tag3': 'Dart',
            'project6_title': 'Calculadora Científica',
            'project6_desc': 'An advanced tool designed to simplify complex mathematical calculations with an adaptable, multilingual interface. This website is mobile-friendly.',
            'project6_tag1': 'JavaScript',
            'project6_tag2': 'HTML5',
            'project6_tag3': 'CSS3',
            'project7_title': 'Libería Online',
            'project7_desc': 'A space where you can publish and download books for free. Explore a wide variety of ebooks across multiple categories and contribute by sharing your own writings with the community.',
            'project7_tag1': 'JavaScript',
            'project7_tag2': 'HTML5',
            'project7_tag3': 'CSS3',
            'project8_title': 'Coming soon',
            'project8_desc': '',
            'project8_tag1': '',
            'project8_tag2': '',
            'project8_tag3': '',
            'hide_projects': 'Hide projects',
            'footer_link1': 'Home',
            'footer_link2': 'About me',
            'footer_link3': 'Education',
            'footer_link4': 'Skills',
            'footer_link5': 'Projects',
        }
    };
    
    // Función para cambiar el texto según el idioma
    const changeLanguage = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        
        // Actualizar clase activa
        langToggle.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });
        
        // Guarda la preferencia de idioma
        localStorage.setItem('language', lang);
    };
    
    // Añadir event listeners para los botones de idioma
    langToggle.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
    
    // Cargar idioma guardado o usar el predeterminado
    const savedLanguage = localStorage.getItem('language') || 'es';
    changeLanguage(savedLanguage);
}

// Función para manejar el video demo modal
function handleVideoModal() {
    const videoPlaceholder = document.getElementById('video-placeholder');
    const videoModal = document.getElementById('video-modal');
    const closeVideo = document.querySelector('.close-video');
    const video = document.getElementById('demo-video');
    
    videoPlaceholder.addEventListener('click', () => {
        videoModal.style.display = 'block';
        // Start playing when modal opens
        video.play();
    });
    
    closeVideo.addEventListener('click', () => {
        videoModal.style.display = 'none';
        // Pause video when modal closes
        video.pause();
    });
    
    // Close modal when clicking outside the video
    window.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            videoModal.style.display = 'none';
            video.pause();
        }
    });
    
    // Handle ESC key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal.style.display === 'block') {
            videoModal.style.display = 'none';
            video.pause();
        }
    });
}

// Inicializar todas las funciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    handleNavigation();
    handleHeaderScroll();
    handleBackToTop();
    initAnimations();
    handleMobileMenu();
    handleContactForm();
    handleProjectsToggle();
    handleLanguageSwitch();
    handleVideoModal();
    
    // Precargar imágenes de proyectos con un fondo predeterminado
    document.querySelectorAll('.project-image').forEach((image, index) => {
        image.style.background = `linear-gradient(45deg, #${((index * 123) % 999) + 111}, #111)`;
    });
    
    // Inicializar todas las secciones con opacidad 0 para las animaciones
    gsap.set('.section', { opacity: 0, y: 30 });
    
    // Mostrar la primera sección inmediatamente
    gsap.to(document.querySelector('.section'), { opacity: 1, y: 0, duration: 0.8 });
    
    // Ajustar alturas y anchos para pantallas pequeñas
    const adjustSizesForMobile = () => {
        if (window.innerWidth <= 576) {
            const viewportHeight = window.innerHeight;
            document.querySelector('.hero-section').style.height = `${viewportHeight}px`;
            
            // Asegurar que las tarjetas de proyecto tengan un tamaño adecuado
            document.querySelectorAll('.project-card').forEach(card => {
                card.style.maxWidth = '100%';
            });
        }
    };
    
    // Ejecutar al cargar y al cambiar el tamaño de la ventana
    adjustSizesForMobile();
    window.addEventListener('resize', adjustSizesForMobile);
});