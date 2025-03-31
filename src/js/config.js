// Configuration settings that can be edited
export const config = {
    // Personal information
    name: "Santiago Fleitas",
    title: "Ingeniero en Computación | Desarrollador Full Stack",
    
    // Social links
    socialLinks: {
        github: "https://github.com/SantiagoFleitasIbarra",
        linkedin: "https://www.linkedin.com/in/santiago-mauricio-fleitas-ibarra-852075280/",
        email: "santiagofle8@gmail.com"
    },
    
    // Language settings
    languages: {
        es: {
            home: {
                title: "Inicio",
                subtitle: "Bienvenido a mi espacio profesional. Aquí encontrarás mi trayectoria, habilidades técnicas y los proyectos en los que he trabajado. Te invito a conocer más sobre mi perfil y explorar cómo puedo contribuir a tu equipo o proyecto.",
                typedTexts: ["Ingeniero en Computación", "Desarrollador Full Stack"],
                btnProjects: "Ver Proyectos",
                btnContact: "Contacto"
            },
            about: {
                title: "Sobre mí",
                description: "Soy graduado de Holberton School con experiencia en desarrollo backend y frontend. Completé el primer año de la formación en Matemáticas en el Instituto de Profesores Artigas (IPA), aunque actualmente está pausada. Actualmente estudio Ingeniería en Computación en la UdelaR y participo en varios proyectos. Me siento preparado para asumir nuevos desafíos profesionales, aportando habilidades técnicas sólidas y una gran pasión por la tecnología."
            },
            education: {
                title: "Educación",
                description: "Mi trayectoria académica refleja mi compromiso con el aprendizaje continuo y el desarrollo profesional. Aquí encontrarás los detalles de mi formación en ingeniería, desarrollo de software y matemáticas."
                // Education items are hard-coded in the component for this implementation
            },
            skills: {
                title: "Habilidades Técnicas",
                description: "Un resumen completo de mi experiencia técnica y las herramientas con las que trabajo regularmente en el desarrollo de software.",
                categories: [
                    {
                        name: "Frontend",
                        skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"]
                    },
                    {
                        name: "Backend",
                        skills: ["Node.js", "Python"]
                    },
                    {
                        name: "Bases de Datos",
                        skills: ["MySQL", "MongoDB"]
                    },
                    {
                        name: "Herramientas",
                        skills: ["Git", "Docker", "Figma", "Jira"]
                    },
                    {
                        name: "Móvil",
                        skills: ["Flutter"]
                    }
                ]
            },
            projects: {
                title: "Proyectos",
                description: "Una muestra de los proyectos más significativos en los que he trabajado, demostrando mis habilidades técnicas y capacidad de resolución de problemas.",
                items: [
                    {
                        title: "IbaEduca",
                        description: "Plataforma educativa para la venta de cursos en línea. Incluye sistema de gestión de contenido, reproducción de videos y procesamiento de pagos.",
                        technologies: [],
                        status: "Actualmente trabajando",
                        color: "#8b5cf6"
                    },
                    {
                        title: "CazaPalabras",
                        description: "CazaPalabra es un juego en el que tienes que adivinar una palabra misteriosa, pero lo emocionante es que la longitud de las palabras varía. Puedes enfrentarte a una palabra de 3, 4, 5, 6 letras o más, y tendrás 6 intentos para adivinarla. Con cada intento, te daremos pistas visuales para que puedas acercarte a la respuesta. ¡Entre más rápido lo logres, mejor!",
                        technologies: ["JavaScript", "HTML5", "CSS3"],
                        repo: "https://github.com/SantiagoFleitasIbarra/CazaPalabras-Juego-2025",
                        demo: "https://santiagofleitasibarra.github.io/CazaPalabras-Juego-2025/",
                        color: "#ec4899"
                    },
                    {
                        title: "Inglés Divertido",
                        description: "Una plataforma interactiva diseñada para hacer el aprendizaje del inglés más ameno y efectivo.",
                        technologies: ["HTML5", "CSS3", "JavaScript"],
                        repo: "https://github.com/SantiagoFleitasIbarra/ingles-divertido",
                        demo: "https://santiagofleitasibarra.github.io/ingles-divertido/",
                        color: "#10b981"
                    },
                    {
                        title: "Organiza tu día con alegría",
                        description: "Es tu espacio para organizar tus tareas diarias de una manera fácil y entretenida. Con nuestro gestor, podrás añadir, completar, editar y eliminar tareas. ¡Comienza a organizar tu día con una sonrisa!",
                        technologies: ["HTML5", "CSS3", "JavaScript"],
                        repo: "https://github.com/SantiagoFleitasIbarra/Organiza-tu-dia",
                        demo: "https://santiagofleitasibarra.github.io/Organiza-tu-dia/",
                        color: "#f59e0b"
                    },
                    {
                        title: "Warded",
                        description: "Aplicación móvil que crea comunidades seguras a través de grupos privados. Desarrollé el backend completo, incluyendo sistema de notificaciones y gestión de base de datos. La app permite compartir ubicaciones, enviar alertas en tiempo real y asistir a personas con discapacidad.",
                        technologies: ["Flutter", "Jira", "Figma", "Firebase"],
                        demoDay: "https://www.youtube.com/watch?v=Lfbt74-kG8c",
                        color: "#3b82f6"
                    },
                    {
                        title: "Calculadora Científica",
                        description: "Una herramienta avanzada diseñada para facilitar cálculos matemáticos complejos con una interfaz adaptable y multilingüe. Dicha página es adaptada a celulares.",
                        technologies: ["JavaScript", "HTML5", "CSS3"],
                        repo: "https://github.com/SantiagoFleitasIbarra/calculadora-cientifica",
                        demo: "https://santiagofleitasibarra.github.io/calculadora-cientifica/",
                        color: "#6366f1"
                    },
                    {
                        title: "Librería Online",
                        description: "Un espacio donde puedes publicar y descargar libros de forma gratuita. Explora una gran variedad de ebooks en múltiples categorías y contribuye compartiendo tus propios escritos con la comunidad.",
                        technologies: ["HTML5", "CSS3", "JavaScript"],
                        repo: "https://github.com/SantiagoFleitasIbarra/Libreria-Online",
                        demo: "https://santiagofleitasibarra.github.io/Libreria-Online/",
                        color: "#14b8a6"
                    }
                ]
            },
            contact: {
                title: "¿Interesado en trabajar juntos?",
                subtitle: "Estoy disponible para proyectos freelance, colaboraciones y oportunidades laborales a tiempo completo.",
                name: "Nombre",
                email: "Email",
                message: "Mensaje",
                send: "Enviar"
            }
        },
        en: {
            home: {
                title: "Home",
                subtitle: "Welcome to my professional space. Here you will find my career path, technical skills, and the projects I have worked on. I invite you to learn more about my profile and explore how I can contribute to your team or project.",
                typedTexts: ["Computer Engineer", "Full Stack Developer"],
                btnProjects: "See Projects",
                btnContact: "Contact"
            },
            about: {
                title: "About Me",
                description: "I am a Holberton School graduate with experience in backend and frontend development. I completed the first year of Mathematics education at the Instituto de Profesores Artigas (IPA), although it is currently paused. I am currently studying Computer Engineering at UdelaR and participating in various projects. I feel prepared to take on new professional challenges, bringing solid technical skills and a great passion for technology."
            },
            education: {
                title: "Education",
                description: "My academic journey reflects my commitment to continuous learning and professional development. Here you will find details of my training in engineering, software development and mathematics."
                // Education items are hard-coded in the component for this implementation
            },
            skills: {
                title: "Technical Skills",
                description: "A comprehensive overview of my technical experience and the tools I regularly work with in software development.",
                categories: [
                    {
                        name: "Frontend",
                        skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"]
                    },
                    {
                        name: "Backend",
                        skills: ["Node.js", "Python"]
                    },
                    {
                        name: "Databases",
                        skills: ["MySQL", "MongoDB"]
                    },
                    {
                        name: "Tools",
                        skills: ["Git", "Docker", "Figma", "Jira"]
                    },
                    {
                        name: "Mobile",
                        skills: ["Flutter"]
                    }
                ]
            },
            projects: {
                title: "Projects",
                description: "A showcase of the most significant projects I have worked on, demonstrating my technical skills and problem-solving abilities.",
                items: [
                    {
                        title: "IbaEduca",
                        description: "Educational platform for selling online courses. Includes content management system, video playback, and payment processing.",
                        technologies: [],
                        status: "Currently working",
                        color: "#8b5cf6"
                    },
                    {
                        title: "WordHunter",
                        description: "WordHunter is a game where you have to guess a mystery word, but the exciting part is that the word length varies. You might face a word with 3, 4, 5, 6 letters, or even more, and you’ll have 6 attempts to guess it. With each attempt, you'll receive visual clues to help you get closer to the answer. The faster you succeed, the better!",
                        technologies: ["JavaScript", "HTML5", "CSS3"],
                        repo: "https://github.com/SantiagoFleitasIbarra/CazaPalabras-Juego-2025",
                        demo: "https://santiagofleitasibarra.github.io/CazaPalabras-Juego-2025/",
                        color: "#ec4899"
                    },
                    {
                        title: "Fun English",
                        description: "An interactive platform designed to make learning English more enjoyable and effective.",
                        technologies: ["HTML5", "CSS3", "JavaScript"],
                        repo: "https://github.com/SantiagoFleitasIbarra/ingles-divertido",
                        demo: "https://santiagofleitasibarra.github.io/ingles-divertido/",
                        color: "#10b981"
                    },
                    {
                        title: "Organize Your Day with Joy",
                        description: "It's your space to organize your daily tasks in an easy and entertaining way. With our manager, you can add, complete, edit and delete tasks. Start organizing your day with a smile!",
                        technologies: ["HTML5", "CSS3", "JavaScript"],
                        repo: "https://github.com/SantiagoFleitasIbarra/Organiza-tu-dia",
                        demo: "https://santiagofleitasibarra.github.io/Organiza-tu-dia/",
                        color: "#f59e0b"
                    },
                    {
                        title: "Warded",
                        description: "Mobile application that creates safe communities through private groups. I developed the complete backend, including notification system and database management. The app allows sharing locations, sending real-time alerts and assisting people with disabilities.",
                        technologies: ["Flutter", "Jira", "Figma", "Firebase"],
                        demoDay: "https://www.youtube.com/watch?v=Lfbt74-kG8c",
                        color: "#3b82f6"
                    },
                    {
                        title: "Scientific Calculator",
                        description: "An advanced tool designed to facilitate complex mathematical calculations with an adaptable and multilingual interface. This page is adapted to mobile phones.",
                        technologies: ["JavaScript", "HTML5", "CSS3"],
                        repo: "https://github.com/SantiagoFleitasIbarra/calculadora-cientifica",
                        demo: "https://santiagofleitasibarra.github.io/calculadora-cientifica/",
                        color: "#6366f1"
                    },
                    {
                        title: "Online Library",
                        description: "A space where you can publish and download books for free. Explore a wide variety of ebooks in multiple categories and contribute by sharing your own writings with the community.",
                        technologies: ["HTML5", "CSS3", "JavaScript"],
                        repo: "https://github.com/SantiagoFleitasIbarra/Libreria-Online",
                        demo: "https://santiagofleitasibarra.github.io/Libreria-Online/",
                        color: "#14b8a6"
                    }
                ]
            },
            contact: {
                title: "Interested in working together?",
                subtitle: "I am available for freelance projects, collaborations and full-time job opportunities.",
                name: "Name",
                email: "Email",
                message: "Message",
                send: "Send"
            }
        }
    }
};

export const loadConfig = async () => {
    // This function can be expanded to load configuration from external sources
    return config;
};