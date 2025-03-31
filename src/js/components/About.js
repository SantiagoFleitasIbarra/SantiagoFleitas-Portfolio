import { store } from '../store.js';

export const renderAbout = () => {
    const section = document.createElement('section');
    section.id = 'about';
    section.className = 'section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const heading = document.createElement('h2');
    heading.className = 'heading';
    heading.textContent = store.getText('about', 'title');
    
    const content = document.createElement('div');
    content.className = 'mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center';
    
    // About text and cards (left side)
    const aboutTextSection = document.createElement('div');
    
    const aboutText = document.createElement('div');
    aboutText.className = 'text-gray-300 leading-relaxed mb-6';
    aboutText.innerHTML = `
        <p class="mb-6">${store.getText('about', 'description')}</p>
    `;
    
    // Download CV button
    const cvButton = document.createElement('a');
    cvButton.className = 'btn mb-10 inline-flex items-center';
    cvButton.href = './pdf/Santiago Fleitas - Curriculum.pdf';
    cvButton.download = 'Santiago_Fleitas_CV.pdf';
    cvButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        ${store.currentLanguage === 'es' ? 'Descargar CV' : 'Download CV'}
    `;
    
    aboutTextSection.appendChild(aboutText);
    aboutTextSection.appendChild(cvButton);
    
    // Skill cards - make them stack better on mobile
    const skillCards = document.createElement('div');
    skillCards.className = 'grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6';
    
    const skills = [
        {
            title: store.currentLanguage === 'es' ? 'Comunicación Efectiva' : 'Effective Communication',
            description: store.currentLanguage === 'es' 
                ? 'Habilidad para transmitir ideas técnicas de forma clara y accesible a diferentes audiencias.'
                : 'Ability to convey technical ideas clearly and accessibly to different audiences.'
        },
        {
            title: store.currentLanguage === 'es' ? 'Gestión de Equipos' : 'Team Management',
            description: store.currentLanguage === 'es'
                ? 'Experiencia coordinando equipos técnicos y fomentando un ambiente colaborativo.'
                : 'Experience coordinating technical teams and fostering a collaborative environment.'
        },
        {
            title: store.currentLanguage === 'es' ? 'Resolución de Problemas' : 'Problem Solving',
            description: store.currentLanguage === 'es'
                ? 'Enfoque analítico para identificar soluciones eficientes ante desafíos complejos.'
                : 'Analytical approach to identify efficient solutions to complex challenges.'
        },
        {
            title: store.currentLanguage === 'es' ? 'Pensamiento Matemático' : 'Mathematical Thinking',
            description: store.currentLanguage === 'es'
                ? 'Aplicación de conceptos matemáticos para modelar y resolver problemas de programación.'
                : 'Application of mathematical concepts to model and solve programming problems.'
        },
        {
            title: store.currentLanguage === 'es' ? 'Inglés Técnico Intermedio' : 'Intermediate Technical English',
            description: store.currentLanguage === 'es'
                ? 'Capacidad para comunicarme en inglés en contextos técnicos y profesionales.'
                : 'Ability to communicate in English in technical and professional contexts.'
        }
    ];
    
    skills.forEach(skill => {
        const card = document.createElement('div');
        card.className = 'bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-purple-600 transition-transform hover:transform hover:-translate-y-2';
        
        card.innerHTML = `
            <h3 class="text-lg font-bold text-purple-400 mb-2">${skill.title}</h3>
            <p class="text-gray-300 text-sm">${skill.description}</p>
        `;
        
        skillCards.appendChild(card);
    });
    
    aboutTextSection.appendChild(skillCards);
    
    // Profile images with animation (right side)
    const profileImagesContainer = document.createElement('div');
    profileImagesContainer.className = 'relative h-[500px] flex justify-center items-center';
    
    // Beige glowing background
    const glowEffect = document.createElement('div');
    glowEffect.className = 'absolute w-[300px] h-[300px] rounded-full bg-[#d4b996] opacity-20 filter blur-3xl';
    
    // Profile images
    const profileImage1 = document.createElement('div');
    profileImage1.className = 'absolute w-[250px] h-[300px] rounded-lg shadow-2xl overflow-hidden transform -rotate-6 animate-float z-10 left-0';
    profileImage1.innerHTML = `
        <img src="./images/Santiago2.jpg" alt="Santiago Fleitas" class="w-full h-full object-cover" />
    `;
    
    const profileImage2 = document.createElement('div');
    profileImage2.className = 'absolute w-[250px] h-[300px] rounded-lg shadow-2xl overflow-hidden transform rotate-6 animate-float-delayed z-20 right-0';
    profileImage2.innerHTML = `
        <img src="./images/Santiago.jpg" alt="Santiago Fleitas" class="w-full h-full object-cover" />
    `;
    
    profileImagesContainer.appendChild(glowEffect);
    profileImagesContainer.appendChild(profileImage1);
    profileImagesContainer.appendChild(profileImage2);
    
    content.appendChild(aboutTextSection);
    content.appendChild(profileImagesContainer);
    
    container.appendChild(heading);
    container.appendChild(content);
    section.appendChild(container);
    
    // Update texts when language changes
    store.subscribe(() => {
        heading.textContent = store.getText('about', 'title');
        aboutText.innerHTML = `
            <p class="mb-6">${store.getText('about', 'description')}</p>
        `;
        
        // Update CV button text
        cvButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            ${store.currentLanguage === 'es' ? 'Descargar CV' : 'Download CV'}
        `;
        
        // Update skill cards
        skillCards.innerHTML = '';
        
        const lang = store.currentLanguage;
        const skillsUpdated = [
            {
                title: lang === 'es' ? 'Comunicación Efectiva' : 'Effective Communication',
                description: lang === 'es' 
                    ? 'Habilidad para transmitir ideas técnicas de forma clara y accesible a diferentes audiencias.'
                    : 'Ability to convey technical ideas clearly and accessibly to different audiences.'
            },
            {
                title: lang === 'es' ? 'Gestión de Equipos' : 'Team Management',
                description: lang === 'es'
                    ? 'Experiencia coordinando equipos técnicos y fomentando un ambiente colaborativo.'
                    : 'Experience coordinating technical teams and fostering a collaborative environment.'
            },
            {
                title: lang === 'es' ? 'Resolución de Problemas' : 'Problem Solving',
                description: lang === 'es'
                    ? 'Enfoque analítico para identificar soluciones eficientes ante desafíos complejos.'
                    : 'Analytical approach to identify efficient solutions to complex challenges.'
            },
            {
                title: lang === 'es' ? 'Pensamiento Matemático' : 'Mathematical Thinking',
                description: lang === 'es'
                    ? 'Aplicación de conceptos matemáticos para modelar y resolver problemas de programación.'
                    : 'Application of mathematical concepts to model and solve programming problems.'
            },
            {
                title: lang === 'es' ? 'Inglés Técnico Intermedio' : 'Intermediate Technical English',
                description: lang === 'es'
                    ? 'Capacidad para comunicarme en inglés en contextos técnicos y profesionales.'
                    : 'Ability to communicate in English in technical and professional contexts.'
            }
        ];
        
        skillsUpdated.forEach(skill => {
            const card = document.createElement('div');
            card.className = 'bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-purple-600 transition-transform hover:transform hover:-translate-y-2';
            
            card.innerHTML = `
                <h3 class="text-lg font-bold text-purple-400 mb-2">${skill.title}</h3>
                <p class="text-gray-300 text-sm">${skill.description}</p>
            `;
            
            skillCards.appendChild(card);
        });
    });
    
    return section;
};