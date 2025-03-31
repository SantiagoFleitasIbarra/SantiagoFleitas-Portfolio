import { renderNavigation } from './components/Navigation.js';
import { renderHome } from './components/Home.js';
import { renderAbout } from './components/About.js';
import { renderEducation } from './components/Education.js';
import { renderSkills } from './components/Skills.js';
import { renderProjects } from './components/Projects.js';
import { renderContact } from './components/Contact.js';
import { store } from './store.js';

export const renderApp = () => {
    const app = document.getElementById('app');
    
    // Create container for all content
    const container = document.createElement('div');
    container.className = 'app-container';
    
    // Render navigation
    const nav = renderNavigation();
    container.appendChild(nav);
    
    // Create main content container
    const mainContent = document.createElement('main');
    mainContent.className = 'main-content';
    
    // Add each section
    mainContent.appendChild(renderHome());
    mainContent.appendChild(renderAbout());
    mainContent.appendChild(renderEducation());
    mainContent.appendChild(renderSkills());
    mainContent.appendChild(renderProjects());
    mainContent.appendChild(renderContact());
    
    container.appendChild(mainContent);
    app.appendChild(container);
    
    // Initialize active section
    updateActiveSection();
    
    // Add scroll event listener to update active section
    window.addEventListener('scroll', updateActiveSection);
};

const updateActiveSection = () => {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
};

// Export navigation function for other components
export const navigateTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }
};