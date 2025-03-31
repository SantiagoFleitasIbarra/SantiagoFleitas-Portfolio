import { store } from '../store.js';
import { navigateTo } from '../app.js';

export const renderHome = () => {
    const section = document.createElement('section');
    section.id = 'home';
    section.className = 'section';
    
    const container = document.createElement('div');
    container.className = 'container grid grid-cols-1 md:grid-cols-2 items-center';
    
    // Left content
    const leftContent = document.createElement('div');
    leftContent.className = 'left-content px-4 py-8 md:pl-10';
    
    const name = document.createElement('h1');
    name.className = 'text-4xl md:text-5xl font-bold mb-2';
    name.textContent = 'Santiago Fleitas';
    
    const fadeTextContainer = document.createElement('div');
    fadeTextContainer.className = 'fade-text-container text-xl md:text-2xl text-purple-400 font-medium mb-6 h-8';
    
    const subtitle = document.createElement('p');
    subtitle.className = 'text-gray-300 max-w-lg mb-8';
    subtitle.textContent = store.getText('home', 'subtitle');
    
    const btnContainer = document.createElement('div');
    btnContainer.className = 'flex flex-col sm:flex-row gap-4';
    
    const btnProjects = document.createElement('button');
    btnProjects.className = 'btn';
    btnProjects.textContent = store.getText('home', 'btnProjects');
    btnProjects.addEventListener('click', () => navigateTo('projects'));
    
    const btnContact = document.createElement('button');
    btnContact.className = 'btn btn-outline';
    btnContact.textContent = store.getText('home', 'btnContact');
    btnContact.addEventListener('click', () => navigateTo('contact'));
    
    btnContainer.appendChild(btnProjects);
    btnContainer.appendChild(btnContact);
    
    leftContent.appendChild(name);
    leftContent.appendChild(fadeTextContainer);
    leftContent.appendChild(subtitle);
    leftContent.appendChild(btnContainer);
    
    // Right content - Animation container
    const rightContent = document.createElement('div');
    rightContent.className = 'home-right-animation';
    
    // SVG animation for right side
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 200 200");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.classList.add("animate-float");
    
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill", "#6d28d9");
    path.setAttribute("d", "M45.5,-51.6C59.3,-40.9,71.3,-27.2,74.6,-11.4C77.9,4.4,72.5,22.4,62.3,36.2C52.1,50,37.2,59.6,20.6,66.4C4,73.1,-14.2,76.9,-30.3,71.1C-46.4,65.3,-60.3,49.9,-68.7,31.3C-77.1,12.8,-79.9,-8.8,-72.8,-25.6C-65.7,-42.3,-48.6,-54.1,-32.2,-63.7C-15.9,-73.4,-0.2,-80.8,13.3,-77.7C26.9,-74.6,31.6,-62.2,45.5,-51.6Z");
    
    svg.appendChild(path);
    rightContent.appendChild(svg);
    
    container.appendChild(leftContent);
    container.appendChild(rightContent);
    section.appendChild(container);
    
    // Initialize fade text animation
    let fadeIndex = 0;
    
    // Render fade text animation
    const animateFadeText = () => {
        const textElement = document.createElement('div');
        textElement.className = 'fade-text absolute opacity-0';
        textElement.textContent = store.getText('home', 'typedTexts')[fadeIndex];
        fadeTextContainer.innerHTML = '';
        fadeTextContainer.appendChild(textElement);
        
        // Fade in
        setTimeout(() => {
            textElement.classList.add('opacity-100');
            textElement.classList.remove('opacity-0');
        }, 200);
        
        // Fade out
        setTimeout(() => {
            textElement.classList.add('opacity-0');
            textElement.classList.remove('opacity-100');
        }, 3000);
        
        // Next text
        setTimeout(() => {
            fadeIndex = (fadeIndex + 1) % store.getText('home', 'typedTexts').length;
            animateFadeText();
        }, 4000);
    };
    
    // Start animation after a short delay
    setTimeout(animateFadeText, 500);
    
    // Update texts when language changes
    store.subscribe(() => {
        subtitle.textContent = store.getText('home', 'subtitle');
        btnProjects.textContent = store.getText('home', 'btnProjects');
        btnContact.textContent = store.getText('home', 'btnContact');
        fadeIndex = 0;
    });
    
    return section;
};