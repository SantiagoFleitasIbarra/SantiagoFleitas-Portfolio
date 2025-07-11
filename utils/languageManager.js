// Default language
let currentLanguage = localStorage.getItem('language') || 'es';

// Translations
const translations = {
    es: {
        nav: {
            home: 'Inicio',
            about: 'Sobre mí',
            education: 'Educación',
            skills: 'Habilidades',
            projects: 'Proyectos',
            contact: 'Contacto'
        },
        home: {
            title: 'Desarrollador Full Stack - Ingeniero en Computación - Administración de Empresas',
            description: 'Bienvenido a mi espacio profesional. Aquí encontrarás mi trayectoria, habilidades técnicas y los proyectos en los que he trabajado. Te invito a conocer más sobre mi perfil y explorar cómo puedo contribuir a tu equipo o proyecto.',
            projectsBtn: 'Ver Proyectos',
            contactBtn: 'Contacto',
            tagline: 'Innovar. Crear. Lanzar.'
        },
        about: {
            title: 'Sobre Mí',
            subtitle: 'Conóceme un poco más',
            paragraph1: 'Soy graduado de Holberton School con experiencia en desarrollo backend y frontend. Completé el primer año de la formación en Matemáticas en el Instituto de Profesores Artigas (IPA), aunque actualmente está pausada. Actualmente estudio Ingeniería en Computación en la UdelaR y participo en varios proyectos. Me siento preparado para asumir nuevos desafíos profesionales, aportando habilidades técnicas sólidas y una gran pasión por la tecnología.',
            downloadCV: 'Descargar CV',
            skill1: {
                title: 'Comunicación Efectiva',
                description: 'Habilidad para transmitir ideas técnicas de forma clara y accesible a diferentes audiencias.'
            },
            skill2: {
                title: 'Gestión de Equipos',
                description: 'Experiencia coordinando equipos técnicos y fomentando un ambiente colaborativo.'
            },
            skill3: {
                title: 'Resolución de Problemas',
                description: 'Enfoque analítico para identificar soluciones eficientes ante desafíos complejos.'
            },
            skill4: {
                title: 'Pensamiento Matemático',
                description: 'Aplicación de conceptos matemáticos para modelar y resolver problemas de programación.'
            },
            skill5: {
                title: 'Inglés Técnico Intermedio',
                description: 'Capacidad para comunicarme en inglés en contextos técnicos y profesionales.'
            }
        },
        education: {
            title: 'Educación',
            summary: 'Mi trayectoria académica refleja mi compromiso con el aprendizaje continuo y el desarrollo profesional. Aquí encontrarás los detalles de mi formación en ingeniería, desarrollo de software y matemáticas.',
            present: 'Presente',
            completed: 'Completado',
            viewCertificate: 'Ver Certificado',
            degree1: {
                title: 'Ingeniería en Computación',
                institution: 'Facultad de Ingeniería - UdelaR',
                description: 'Estudiante activo en Ingeniería en Computación, desarrollando conocimiento en:',
                bullet1: 'Programación y Desarrollo de Software',
                bullet2: 'Algoritmos y Estructuras de Datos',
                bullet3: 'Sistemas Operativos y Redes',
                bullet4: 'Matemáticas Aplicadas a la Ingeniería'
            },
            degree2: {
                title: 'Administración de Empresas',
                institution: 'Facultad de Ciencias Económicas y de Administración - UdelaR',
                description: 'Estudiante de Administración de empresas, desarrollando conocimiento en:',
                bullet1: 'Gestión y Administración de Organizaciones',
                bullet2: 'Finanzas y Contabilidad Empresarial',
                bullet3: 'Marketing y Estrategias Comerciales',
                bullet4: 'Recursos Humanos y Liderazgo'
            },
            degree3: {
                title: 'Desarrollo Full Stack',
                institution: 'Holberton School',
                description: 'Formación intensiva en desarrollo de software especializada en:',
                bullet1: 'Desarrollo Frontend (HTML, CSS, JavaScript)',
                bullet2: 'Desarrollo Backend (Python, SQL)',
                bullet3: 'DevOps y Control de Versiones'
            },
            degree4: {
                title: 'Especialización en Matemáticas',
                institution: 'Instituto de Profesores Artigas (IPA)',
                description: 'Formación en pedagogía y didáctica de las matemáticas:',
                bullet1: 'Pedagogía y Didáctica de las Matemáticas',
                bullet2: 'Análisis Matemático',
                bullet3: 'Álgebra y Geometría',
                bullet4: 'Prácticas de Enseñanza de Matemáticas'
            }
        },
        skills: {
            title: 'Habilidades Técnicas',
            summary: 'Un resumen completo de mi experiencia técnica y las herramientas con las que trabajo regularmente en el desarrollo de software. Aterriza en el planeta del conocimiento y explora mis capacidades.',
            frontend: {
                title: 'Frontend'
            },
            backend: {
                title: 'Backend'
            },
            databases: {
                title: 'Bases de Datos'
            },
            tools: {
                title: 'Herramientas y Plataformas'
            },
            mobile: {
                title: 'Móvil'
            }
        },
        projects: {
            title: 'Proyectos Destacados',
            summary: 'Una muestra de los proyectos más significativos en los que he trabajado, demostrando mis habilidades técnicas y capacidad de resolución de problemas. Cada tarjeta es un portal a una solución innovadora.',
            filters: {
                all: 'Todos',
                web: 'Web',
                mobile: 'Móvil',
                other: 'Otros'
            },
            demo: 'Demo',
            code: 'Código',
            currentlyWorking: 'Actualmente trabajando',
            technologies: 'Tecnologías',
            viewRepo: 'Ver Repositorio',
            viewDemo: 'Ver Demo',
            demoDay: 'Demo Day',
            clickToFlip: 'Click para ver detalles',
            flipBack: 'Volver',
            project1: {
                title: 'IbaEduca',
                shortDescription: 'Plataforma educativa para la venta de cursos en línea.',
                description: 'Plataforma educativa para la venta de cursos en línea. Incluye sistema de gestión de contenido, reproducción de videos y procesamiento de pagos.',
                date: 'Diciembre 2024 - Actualidad'
            },
            project2: {
                title: 'CazaPalabras',
                shortDescription: 'Juego para adivinar palabras de diferente longitud.',
                description: 'CazaPalabra es un juego en el que tienes que adivinar una palabra misteriosa, pero lo emocionante es que la longitud de las palabras varía. Puedes enfrentarte a una palabra de 3, 4, 5, 6 letras o más, y tendrás 6 intentos para adivinarla. Con cada intento, te daremos pistas visuales para que puedas acercarte a la respuesta. ¡Entre más rápido lo logres, mejor!',
                date: 'Enero 2025 - Marzo 2025'
            },
            project3: {
                title: 'Inglés Divertido',
                shortDescription: 'Plataforma para aprender inglés de forma interactiva.',
                description: 'Una plataforma interactiva diseñada para hacer el aprendizaje del inglés más ameno y efectivo.',
                date: 'Enero 2025 - Marzo 2025'
            },
            project4: {
                title: 'Organiza tu día con alegría',
                shortDescription: 'Aplicación para la gestión de tareas diarias.',
                description: 'Es tu espacio para organizar tus tareas diarias de una manera fácil y entretenida. Con nuestro gestor, podrás añadir, completar, editar y eliminar tareas. ¡Comienza a organizar tu día con una sonrisa!',
                date: 'Febrero 2025 - Abril 2025'
            },
            project5: {
                title: 'Warded',
                shortDescription: 'App para crear comunidades seguras con grupos privados.',
                description: 'Aplicación móvil que crea comunidades seguras a través de grupos privados. Desarrollé el backend completo, incluyendo sistema de notificaciones y gestión de base de datos. La app permite compartir ubicaciones, enviar alertas en tiempo real y asistir a personas con discapacidad.',
                date: 'Abril 2024 - Julio 2024'
            }
        },
        contact: {
            title: 'Contacto',
            subtitle: '¿Interesado en trabajar juntos?',
            description: 'Estoy disponible para colaboraciones y oportunidades laborales.',
            email: 'Email',
            phone: 'Teléfono',
            location: 'Ubicación',
            locationDetails: 'Barros Blancos, Canelones, Uruguay',
            social: 'Redes Sociales',
            quote: {
                title: 'Cita Inspiradora',
                text: 'Intenta no volverte un hombre de éxito, sino volverte un hombre de valor.',
                author: 'Albert Einstein'
            },
            form: {
                name: 'Nombre',
                email: 'Correo electrónico',
                message: 'Mensaje',
                send: 'Enviar mensaje',
                success: '¡Mensaje enviado con éxito! Te responderé lo antes posible.'
            }
        },
        footer: {
            tagline: 'Desarrollando soluciones tecnológicas para un mundo mejor',
            subtitle: 'Porfolio Cósmico.',
            backToTop: 'Volver Arriba',
            rights: 'Todos los derechos reservados.'
        }
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            education: 'Education',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact'
        },
        home: {
            title: 'Full Stack Developer - Computer Engineer - Business Administration',
            description: 'Welcome to my professional space. Here you will find my background, technical skills, and the projects I have worked on. I invite you to learn more about my profile and explore how I can contribute to your team or project.',
            projectsBtn: 'View Projects',
            contactBtn: 'Contact',
            tagline: 'Innovate. Create. Launch.'
        },
        about: {
            title: 'About Me',
            subtitle: 'Get to know me better',
            paragraph1: 'I am a Holberton School graduate with experience in backend and frontend development. I completed the first year of Mathematics training at the Instituto de Profesores Artigas (IPA), although it is currently on hold. I am currently studying Computer Engineering at UdelaR and participating in various projects. I am prepared to take on new professional challenges, bringing solid technical skills and a great passion for technology.',
            downloadCV: 'Download CV',
            skill1: {
                title: 'Effective Communication',
                description: 'Ability to convey technical ideas clearly and accessibly to different audiences.'
            },
            skill2: {
                title: 'Team Management',
                description: 'Experience coordinating technical teams and fostering a collaborative environment.'
            },
            skill3: {
                title: 'Problem Solving',
                description: 'Analytical approach to identifying efficient solutions to complex challenges.'
            },
            skill4: {
                title: 'Mathematical Thinking',
                description: 'Application of mathematical concepts to model and solve programming problems.'
            },
            skill5: {
                title: 'Intermediate Technical English',
                description: 'Ability to communicate in English in technical and professional contexts.'
            }
        },
        education: {
            title: 'Education',
            summary: 'My academic trajectory reflects my commitment to continuous learning and professional development. Here you will find the details of my education in engineering, software development, and mathematics.',
            present: 'Present',
            completed: 'Completed',
            viewCertificate: 'View Certificate',
            degree1: {
                title: 'Computer Engineering',
                institution: 'Faculty of Engineering - UdelaR',
                description: 'Active student in Computer Engineering, developing knowledge in:',
                bullet1: 'Programming and Software Development',
                bullet2: 'Algorithms and Data Structures',
                bullet3: 'Operating Systems and Networks',
                bullet4: 'Mathematics Applied to Engineering'
            },
            degree2: {
                title: 'Business Administration',
                institution: 'Faculty of Economic Sciences and Administration - UdelaR',
                description: 'Student of Business Administration, developing knowledge in:',
                bullet1: 'Management and Administration of Organizations',
                bullet2: 'Finance and Business Accounting',
                bullet3: 'Marketing and Commercial Strategies',
                bullet4: 'Human Resources and Leadership'
            },
            degree3: {
                title: 'Full Stack Development',
                institution: 'Holberton School',
                description: 'Intensive training in software development specialized in:',
                bullet1: 'Frontend Development (HTML, CSS, JavaScript)',
                bullet2: 'Backend Development (Python, SQL)',
                bullet3: 'DevOps and Version Control'
            },
            degree4: {
                title: 'Mathematics Specialization',
                institution: 'Instituto de Profesores Artigas (IPA)',
                description: 'Training in pedagogy and didactics of mathematics:',
                bullet1: 'Pedagogy and Didactics of Mathematics',
                bullet2: 'Mathematical Analysis',
                bullet3: 'Algebra and Geometry',
                bullet4: 'Mathematics Teaching Practices'
            }
        },
        skills: {
            title: 'Technical Skills',
            summary: 'A comprehensive summary of my technical experience and the tools I regularly work with in software development. Land on the planet of knowledge and explore my capabilities.',
            frontend: {
                title: 'Frontend'
            },
            backend: {
                title: 'Backend'
            },
            databases: {
                title: 'Databases'
            },
            tools: {
                title: 'Tools & Platforms'
            },
            mobile: {
                title: 'Mobile'
            }
        },
        projects: {
            title: 'Featured Projects',
            summary: 'A showcase of the most significant projects I have worked on, demonstrating my technical skills and problem-solving abilities. Each card is a portal to an innovative solution.',
            filters: {
                all: 'All',
                web: 'Web',
                mobile: 'Mobile',
                other: 'Other'
            },
            demo: 'Demo',
            code: 'Code',
            currentlyWorking: 'Currently Working',
            technologies: 'Technologies',
            viewRepo: 'View Repository',
            viewDemo: 'View Demo',
            demoDay: 'Demo Day',
            clickToFlip: 'Click to see details',
            flipBack: 'Back',
            project1: {
                title: 'IbaEduca',
                shortDescription: 'Educational platform for selling online courses.',
                description: 'Educational platform for selling online courses. Includes content management system, video playback, and payment processing.',
                date: 'December 2024 - Present'
            },
            project2: {
                title: 'WordHunt',
                shortDescription: 'Game to guess words of different lengths.',
                description: 'WordHunt is a game where you have to guess a mysterious word, but the exciting part is that the length of the words varies. You can face a word of 3, 4, 5, 6 letters or more, and you will have 6 attempts to guess it. With each attempt, we will give you visual clues so you can get closer to the answer. The faster you achieve it, the better!',
                date: 'January 2025 - March 2025'
            },
            project3: {
                title: 'Fun English',
                shortDescription: 'Platform to learn English interactively.',
                description: 'An interactive platform designed to make learning English more enjoyable and effective.',
                date: 'January 2025 - March 2025'
            },
            project4: {
                title: 'Organize your day with joy',
                shortDescription: 'Application for managing daily tasks.',
                description: "It's your space to organize your daily tasks in an easy and entertaining way. With our manager, you can add, complete, edit and delete tasks. Start organizing your day with a smile!",
                date: 'February 2025 - April 2025'
            },
            project5: {
                title: 'Warded',
                shortDescription: 'App to create safe communities with private groups.',
                description: 'Mobile application that creates safe communities through private groups. I developed the complete backend, including notification system and database management. The app allows sharing locations, sending real-time alerts, and assisting people with disabilities.',
                date: 'April 2024 - July 2024'
            }
        },
        contact: {
            title: 'Contact',
            subtitle: 'Interested in working together?',
            description: 'I am available for collaborations and job opportunities.',
            email: 'Email',
            phone: 'Phone',
            location: 'Location',
            locationDetails: 'Barros Blancos, Canelones, Uruguay',
            social: 'Social Media',
            quote: {
                title: 'Inspirational Quote',
                text: 'Try not to become a man of success, but rather try to become a man of value.',
                author: 'Albert Einstein'
            },
            form: {
                name: 'Name',
                email: 'Email',
                message: 'Message',
                send: 'Send Message',
                success: 'Message sent successfully! I will get back to you as soon as possible.'
            }
        },
        footer: {
            tagline: 'Developing technological solutions for a better world',
            subtitle: 'Cosmic Portfolio.',
            backToTop: 'Back to Top',
            rights: 'All rights reserved.'
        }
    }
};

// Get a translation
export function translate(key) {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
        if (value[k] === undefined) {
            console.warn(`Translation key not found: ${key}`);
            return key;
        }
        value = value[k];
    }
    
    return value;
}

// Toggle language
export function toggleLanguage() {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    localStorage.setItem('language', currentLanguage);
}

// Get current language
export function getCurrentLanguage() {
    return currentLanguage;
}

// Load language from localStorage
export function loadLanguage(lang) {
    if (lang && (lang === 'es' || lang === 'en')) {
        currentLanguage = lang;
        localStorage.setItem('language', currentLanguage);
    }
    return currentLanguage;
}