import Header from '../components/Header.js';
import Home from '../components/Home.js';
import About from '../components/About.js';
import Education from '../components/Education.js';
import Skills from '../components/Skills.js';
import Projects from '../components/Projects.js';
import Contact from '../components/Contact.js';
import Footer from '../components/Footer.js';
import { loadLanguage, getCurrentLanguage } from '../utils/languageManager.js';
import { setupScrollAnimation } from '../utils/animations.js';

// Initialize language
loadLanguage(getCurrentLanguage());

// Render components
document.addEventListener('DOMContentLoaded', () => {
    const headerContainer = document.getElementById('header-container');
    const contentContainer = document.getElementById('content-container');
    const footerContainer = document.getElementById('footer-container');
    
    // Render header
    headerContainer.appendChild(Header());
    
    // Create sections container
    const sectionsContainer = document.createElement('div');
    sectionsContainer.id = 'sections-container';
    
    // Add all sections
    sectionsContainer.appendChild(Home());
    sectionsContainer.appendChild(About());
    sectionsContainer.appendChild(Education());
    sectionsContainer.appendChild(Skills());
    sectionsContainer.appendChild(Projects());
    sectionsContainer.appendChild(Contact());
    
    // Add sections to main content
    contentContainer.appendChild(sectionsContainer);
    
    // Render footer
    footerContainer.appendChild(Footer());
    
    // Set up animations
    setupScrollAnimation();
    
    // Handle navigation
    handleNavigation();
    
    // Add helper class for text shadows (for the design in the screenshot)
    const style = document.createElement('style');
    style.textContent = `
        .shadow-text {
            text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        }
    `;
    document.head.appendChild(style);
});

function handleNavigation() {
    // Set active section based on URL hash or default to home
    const setActiveSection = () => {
        const hash = window.location.hash || '#home';
        const sections = document.querySelectorAll('.section');
        
        // Display all sections initially for a SPA-like experience
        sections.forEach(section => {
            section.style.display = 'block';
        });
        
        // Update active nav item
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === hash) {
                item.classList.add('active');
            }
        });
    };
    
    // Initial setup
    setActiveSection();
    
    // Listen for hash changes
    window.addEventListener('hashchange', setActiveSection);
}