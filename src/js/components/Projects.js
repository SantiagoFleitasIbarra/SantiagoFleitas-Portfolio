import { store } from '../store.js';

export const renderProjects = () => {
    const section = document.createElement('section');
    section.id = 'projects';
    section.className = 'section';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const heading = document.createElement('h2');
    heading.className = 'heading';
    heading.textContent = store.getText('projects', 'title');
    
    const description = document.createElement('p');
    description.className = 'text-gray-300 mt-4 max-w-3xl';
    description.textContent = store.getText('projects', 'description');
    
    const projectsGrid = document.createElement('div');
    projectsGrid.className = 'mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';
    
    // Background shapes animation
    const shapesContainer = document.createElement('div');
    shapesContainer.className = 'absolute inset-0 overflow-hidden pointer-events-none';
    shapesContainer.innerHTML = `
        <div class="absolute top-1/4 left-[10%] w-32 h-32 bg-purple-600 opacity-15 rounded-full filter blur-xl animate-float"></div>
        <div class="absolute top-[60%] right-[15%] w-40 h-40 bg-pink-500 opacity-10 rounded-full filter blur-xl animate-float-delayed"></div>
        <div class="absolute bottom-[10%] left-[30%] w-36 h-36 bg-amber-400 opacity-10 rounded-full filter blur-xl animate-float"></div>
    `;
    section.appendChild(shapesContainer);
    
    // Function to render project cards
    const renderProjectCards = () => {
        projectsGrid.innerHTML = '';
        
        const projects = store.getText('projects', 'items');
        
        projects.forEach(project => {
            // Create card container with flip effect
            const cardContainer = document.createElement('div');
            cardContainer.className = 'flip-card-container h-[300px] md:h-[350px] perspective w-full max-w-sm mx-auto';
            
            // Create the flip card
            const flipCard = document.createElement('div');
            flipCard.className = 'flip-card relative preserve-3d w-full h-full transition-transform duration-1000 cursor-pointer';
            
            // Front of card
            const cardFront = document.createElement('div');
            cardFront.className = 'flip-card-front absolute w-full h-full backface-hidden rounded-xl shadow-xl overflow-hidden';
            cardFront.style.backgroundColor = project.color || '#6d28d9';
            
            // Card front content
            cardFront.innerHTML = `
                <div class="h-full w-full flex flex-col items-center justify-center text-white p-6 text-center">
                    <div class="absolute top-0 right-0 m-4 opacity-30">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-32 w-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    </div>
                    
                    <h3 class="text-2xl font-bold mb-4 relative z-10">${project.title}</h3>
                    
                    <div class="mt-4 text-sm opacity-80 relative z-10">${store.currentLanguage === 'es' ? 'Click para ver detalles' : 'Click to see details'}</div>
                </div>
            `;
            
            // Back of card
            const cardBack = document.createElement('div');
            cardBack.className = 'flip-card-back absolute w-full h-full backface-hidden bg-gray-800 rounded-xl shadow-xl overflow-hidden';
            cardBack.style.borderTop = `4px solid ${project.color || '#6d28d9'}`;
            cardBack.style.transform = 'rotateY(180deg)';
            
            // Card back content
            let cardBackContent = `
                <div class="h-full flex flex-col p-6">
                    <h3 class="text-xl font-bold text-purple-400 mb-2">${project.title}</h3>
                    <p class="text-gray-300 text-sm mb-4 flex-grow">${project.description}</p>
                    
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${project.technologies.map(tech => 
                            `<span class="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">${tech}</span>`
                        ).join('')}
                    </div>
                    
                    <div class="flex flex-wrap gap-2 mt-auto">
            `;
            
            // Add appropriate buttons
            if (project.status) {
                cardBackContent += `
                    <span class="px-3 py-1 bg-purple-600 bg-opacity-30 text-purple-300 rounded-full text-xs font-medium">
                        ${project.status}
                    </span>
                `;
            }
            
            if (project.repo) {
                cardBackContent += `
                    <a href="${project.repo}" target="_blank" class="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-full text-xs flex items-center transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        ${store.currentLanguage === 'es' ? 'Ver repositorio' : 'View repository'}
                    </a>
                `;
            }
            
            if (project.demo) {
                cardBackContent += `
                    <a href="${project.demo}" target="_blank" class="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-full text-xs flex items-center transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        ${store.currentLanguage === 'es' ? 'Ver demo' : 'View demo'}
                    </a>
                `;
            }
            
            if (project.demoDay) {
                cardBackContent += `
                    <a href="${project.demoDay}" target="_blank" class="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-full text-xs flex items-center transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Demo Day
                    </a>
                `;
            }
            
            cardBackContent += `
                    </div>
                </div>
            `;
            
            cardBack.innerHTML = cardBackContent;
            
            // Add flip animation on click
            flipCard.addEventListener('click', () => {
                flipCard.classList.toggle('rotate-y-180');
            });
            
            // Assemble card
            flipCard.appendChild(cardFront);
            flipCard.appendChild(cardBack);
            cardContainer.appendChild(flipCard);
            projectsGrid.appendChild(cardContainer);
        });
    };
    
    renderProjectCards();
    
    container.appendChild(heading);
    container.appendChild(description);
    container.appendChild(projectsGrid);
    section.appendChild(container);
    
    // Update texts when language changes
    store.subscribe(() => {
        heading.textContent = store.getText('projects', 'title');
        description.textContent = store.getText('projects', 'description');
        renderProjectCards();
    });
    
    return section;
};