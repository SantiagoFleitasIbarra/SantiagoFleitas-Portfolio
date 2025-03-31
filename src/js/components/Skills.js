import { store } from '../store.js';

export const renderSkills = () => {
    const section = document.createElement('section');
    section.id = 'skills';
    section.className = 'section';
    
    // Create beige glow background effect
    const glowEffect = document.createElement('div');
    glowEffect.className = 'absolute inset-0 w-full h-full';
    glowEffect.innerHTML = `
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#d4b996] opacity-30 filter blur-[100px]"></div>
        <div class="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-[#d4b996] opacity-20 filter blur-[80px]"></div>
        <div class="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-[#d4b996] opacity-25 filter blur-[90px]"></div>
    `;
    section.appendChild(glowEffect);
    
    const container = document.createElement('div');
    container.className = 'container relative z-10';
    
    const heading = document.createElement('h2');
    heading.className = 'heading';
    heading.textContent = store.getText('skills', 'title');
    
    const description = document.createElement('p'); 
    description.className = 'text-gray-300 mt-4 max-w-3xl';
    description.textContent = store.getText('skills', 'description');
    
    // Create skill accordion
    const skillsAccordion = document.createElement('div');
    skillsAccordion.className = 'mt-12 max-w-4xl mx-auto';
    
    // Function to render skill categories as accordion
    const renderSkillCategories = () => {
        skillsAccordion.innerHTML = '';
        
        const categories = store.getText('skills', 'categories');
        
        categories.forEach((category, index) => {
            // Create accordion item
            const accordionItem = document.createElement('div');
            accordionItem.className = 'mb-4 bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg overflow-hidden transition-all duration-300';
            accordionItem.dataset.expanded = 'false';
            
            // Create header
            const header = document.createElement('div');
            header.className = 'flex justify-between items-center p-4 cursor-pointer';
            header.style.borderLeft = `4px solid ${getColorForCategory(index)}`;
            
            // Create title
            const title = document.createElement('h3');
            title.className = 'text-xl font-bold text-purple-400';
            title.textContent = category.name;
            
            // Create icon
            const icon = document.createElement('div');
            icon.className = 'transform transition-transform duration-300';
            icon.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            `;
            
            // Create content
            const content = document.createElement('div');
            content.className = 'overflow-hidden max-h-0 transition-all duration-500';
            
            // Create skills grid
            const skillsGrid = document.createElement('div');
            skillsGrid.className = 'grid grid-cols-2 md:grid-cols-3 gap-3 p-4';
            
            // Add skills
            category.skills.forEach(skill => {
                const skillBadge = document.createElement('div');
                skillBadge.className = 'p-3 bg-gray-700 rounded-lg text-center hover:bg-gray-600 transition-colors duration-300';
                skillBadge.innerHTML = `
                    <div class="text-sm font-medium text-gray-300">${skill}</div>
                `;
                skillsGrid.appendChild(skillBadge);
            });
            
            // Add event listener to toggle accordion
            header.addEventListener('click', () => {
                const isExpanded = accordionItem.dataset.expanded === 'true';
                
                // Close all accordions first
                document.querySelectorAll('[data-expanded="true"]').forEach(item => {
                    if (item !== accordionItem) {
                        item.dataset.expanded = 'false';
                        item.querySelector('.transform').classList.remove('rotate-180');
                        item.querySelector('.max-h-0').style.maxHeight = '0px';
                    }
                });
                
                // Toggle current accordion
                accordionItem.dataset.expanded = isExpanded ? 'false' : 'true';
                icon.classList.toggle('rotate-180', !isExpanded);
                
                if (!isExpanded) {
                    content.style.maxHeight = `${skillsGrid.scrollHeight}px`;
                } else {
                    content.style.maxHeight = '0px';
                }
            });
            
            // Assemble accordion item
            header.appendChild(title);
            header.appendChild(icon);
            content.appendChild(skillsGrid);
            accordionItem.appendChild(header);
            accordionItem.appendChild(content);
            skillsAccordion.appendChild(accordionItem);
        });
    };
    
    // Helper function to get a color for category
    const getColorForCategory = (index) => {
        const colors = [
            '#d4b996', // Beige
            '#c4a77d', // Darker beige
            '#e6d7c0', // Lighter beige
            '#d5b895', // Medium beige
            '#c7ad87'  // Warm beige
        ];
        return colors[index % colors.length];
    };
    
    renderSkillCategories();
    
    // Animated shapes in background
    const shapes = document.createElement('div');
    shapes.className = 'absolute inset-0 overflow-hidden pointer-events-none';
    shapes.innerHTML = `
        <div class="absolute top-[20%] right-[10%] w-20 h-20 bg-purple-500 opacity-20 rounded-full animate-float"></div>
        <div class="absolute top-[40%] left-[5%] w-16 h-16 border-2 border-amber-400 opacity-20 animate-float-delayed"></div>
        <div class="absolute bottom-[30%] right-[20%] w-24 h-24 border-2 border-pink-400 opacity-20 rounded-lg rotate-45 animate-float"></div>
        <div class="absolute bottom-[10%] left-[15%] w-20 h-20 bg-blue-500 opacity-20 rounded-full animate-float-delayed"></div>
    `;
    
    container.appendChild(heading);
    container.appendChild(description);
    container.appendChild(skillsAccordion);
    container.appendChild(shapes);
    section.appendChild(container);
    
    // Update texts when language changes
    store.subscribe(() => {
        heading.textContent = store.getText('skills', 'title');
        description.textContent = store.getText('skills', 'description');
        renderSkillCategories();
    });
    
    // Auto-open the first accordion after a small delay
    setTimeout(() => {
        const firstAccordion = skillsAccordion.querySelector('[data-expanded="false"]');
        if (firstAccordion) {
            firstAccordion.querySelector('.flex').click();
        }
    }, 500);
    
    return section;
};