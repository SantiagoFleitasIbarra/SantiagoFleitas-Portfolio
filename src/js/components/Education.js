import { store } from '../store.js';

export const renderEducation = () => {
    const section = document.createElement('section');
    section.id = 'education';
    section.className = 'section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const heading = document.createElement('h2');
    heading.className = 'heading';
    heading.textContent = store.getText('education', 'title');
    
    const description = document.createElement('p');
    description.className = 'text-gray-300 mt-4 max-w-3xl';
    description.textContent = store.getText('education', 'description');
    
    const timeline = document.createElement('div');
    timeline.className = 'mt-12 relative';
    
    // Timeline vertical line - hide on mobile
    const line = document.createElement('div');
    line.className = 'absolute left-0 md:left-1/2 h-full w-1 bg-purple-800 transform -translate-x-1/2 hidden md:block';
    timeline.appendChild(line);
    
    // Education timeline data - using store to get translated data
    const renderEducationTimeline = () => {
        // Clear existing timeline items
        const existingItems = timeline.querySelectorAll('.relative.z-10');
        existingItems.forEach(item => item.remove());
        
        // Current language
        const lang = store.currentLanguage;
        
        // Education timeline data - this would ideally come from config
        const educationData = [
            {
                period: lang === 'es' ? "2025 - Presente" : "2025 - Present",
                degree: lang === 'es' ? "Ingeniería en Computación" : "Computer Engineering",
                institution: lang === 'es' ? "Facultad de Ingeniería - UdelaR" : "Faculty of Engineering - UdelaR",
                description: lang === 'es' 
                    ? "Estudiante activo en Ingeniería en Computación, desarrollando conocimiento en:" 
                    : "Active student in Computer Engineering, developing knowledge in:",
                items: lang === 'es' 
                    ? [
                        "Programación y Desarrollo de Software",
                        "Algoritmos y Estructuras de Datos",
                        "Sistemas Operativos y Redes",
                        "Matemáticas Aplicadas a la Ingeniería"
                    ]
                    : [
                        "Programming and Software Development",
                        "Algorithms and Data Structures",
                        "Operating Systems and Networks",
                        "Engineering Mathematics"
                    ],
                hasButton: false
            },
            {
                period: lang === 'es' ? "2023 - 2024" : "2023 - 2024",
                degree: lang === 'es' ? "Desarrollo Full Stack" : "Full Stack Development",
                institution: "Holberton School",
                description: lang === 'es' 
                    ? "Formación intensiva en desarrollo de software especializada en:"
                    : "Intensive software development training specialized in:",
                items: lang === 'es' 
                    ? [
                        "Desarrollo Frontend (HTML, CSS, JavaScript)",
                        "Desarrollo Backend (Python, SQL)",
                        "DevOps y Control de Versiones"
                    ]
                    : [
                        "Frontend Development (HTML, CSS, JavaScript)",
                        "Backend Development (Python, SQL)",
                        "DevOps and Version Control"
                    ],
                hasButton: true,
                buttonText: lang === 'es' ? "Ver certificado" : "View certificate",
                buttonLink: "./pdf/MVD-0224_Foundations of Computer Science_FLEITAS_Santiago.pdf"
            },
            {
                period: lang === 'es' ? "2021 - 2022" : "2021 - 2022",
                degree: lang === 'es' ? "Especialización en Matemáticas" : "Mathematics Specialization",
                institution: lang === 'es' ? "Instituto de Profesores Artigas (IPA)" : "Artigas Teachers Institute (IPA)",
                description: lang === 'es' 
                    ? "Formación en pedagogía y didáctica de las matemáticas:"
                    : "Training in mathematics pedagogy and didactics:",
                items: lang === 'es' 
                    ? [
                        "Pedagogía y Didáctica de las Matemáticas",
                        "Análisis Matemático",
                        "Álgebra y Geometría",
                        "Prácticas de Enseñanza de Matemáticas"
                    ]
                    : [
                        "Mathematics Pedagogy and Didactics",
                        "Mathematical Analysis",
                        "Algebra and Geometry",
                        "Mathematics Teaching Practices"
                    ],
                hasButton: false
            }
        ];
        
        // Create timeline items - simplified for mobile
        educationData.forEach((item, index) => {
            const timelineItem = document.createElement('div');
            timelineItem.className = `relative z-10 mb-12 flex flex-col items-start md:items-center`;
            
            // Timeline dot - hide on mobile
            const dot = document.createElement('div');
            dot.className = 'absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-purple-600 transform -translate-x-1/2 border-4 border-gray-900 hidden md:block';
            
            // Content box - simplified for mobile
            const content = document.createElement('div');
            content.className = `w-full md:w-5/12 p-6 bg-gray-800 rounded-lg shadow-lg 
                                ${index % 2 === 0 ? 'md:mr-auto md:pr-16 md:text-right' : 'md:ml-auto md:pl-16'} 
                                transition-transform duration-300 hover:transform hover:scale-105`;
            
            // Build content HTML
            let contentHTML = `
                <span class="inline-block px-3 py-1 mb-3 text-sm font-medium text-purple-400 bg-purple-900 bg-opacity-30 rounded-full">${item.period}</span>
                <h3 class="text-xl font-bold text-purple-400">${item.degree}</h3>
                <h4 class="text-lg font-semibold text-gray-300">${item.institution}</h4>
                <p class="text-gray-400 mt-2">${item.description}</p>
                <ul class="mt-2 space-y-1 list-disc list-inside ${index % 2 === 0 ? 'md:text-right' : ''}">
            `;
            
            // Add list items
            item.items.forEach(listItem => {
                contentHTML += `<li class="text-gray-300 text-sm">${listItem}</li>`;
            });
            
            contentHTML += `</ul>`;
            
            // Add button if needed
            if (item.hasButton) {
                contentHTML += `
                    <div class="mt-4 ${index % 2 === 0 ? 'md:text-right' : ''}">
                        <a href="${item.buttonLink}" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 transition-colors" target="_blank" download>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            ${item.buttonText}
                        </a>
                    </div>
                `;
            }
            
            content.innerHTML = contentHTML;
            
            timelineItem.appendChild(dot);
            timelineItem.appendChild(content);
            timeline.appendChild(timelineItem);
        });
    };
    
    // Initial render
    renderEducationTimeline();
    
    container.appendChild(heading);
    container.appendChild(description);
    container.appendChild(timeline);
    section.appendChild(container);
    
    // Update when language changes
    store.subscribe(() => {
        heading.textContent = store.getText('education', 'title');
        description.textContent = store.getText('education', 'description');
        renderEducationTimeline();
    });
    
    return section;
};