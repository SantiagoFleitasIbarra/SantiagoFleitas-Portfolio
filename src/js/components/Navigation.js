import { store } from '../store.js';
import { navigateTo } from '../app.js';

export const renderNavigation = () => {
    // Desktop navigation
    const nav = document.createElement('nav');
    nav.className = 'nav-container';
    
    const navLinks = document.createElement('div');
    navLinks.className = 'nav-links';
    
    // Create navigation links with dynamic text
    const createNavLinks = () => {
        navLinks.innerHTML = '';
        
        // Get section titles based on current language
        const sectionTitles = {
            home: store.currentLanguage === 'es' ? 'Inicio' : 'Home',
            about: store.currentLanguage === 'es' ? 'Sobre mí' : 'About me',
            education: store.currentLanguage === 'es' ? 'Educación' : 'Education',
            skills: store.currentLanguage === 'es' ? 'Habilidades' : 'Skills',
            projects: store.currentLanguage === 'es' ? 'Proyectos' : 'Projects',
            contact: store.currentLanguage === 'es' ? 'Contacto' : 'Contact'
        };
        
        // Create section links
        Object.entries(sectionTitles).forEach(([id, text]) => {
            const link = document.createElement('div');
            link.className = 'nav-link';
            link.textContent = text;
            link.addEventListener('click', () => navigateTo(id));
            navLinks.appendChild(link);
        });
    };
    
    // Initial render
    createNavLinks();
    
    nav.appendChild(navLinks);
    
    // Add language toggle
    const languageToggle = document.createElement('div');
    languageToggle.className = 'language-toggle';
    
    const languages = [
        { code: 'es', label: 'ES' },
        { code: 'en', label: 'EN' }
    ];
    
    languages.forEach(lang => {
        const btn = document.createElement('button');
        btn.className = `language-btn ${lang.code === store.currentLanguage ? 'active' : ''}`;
        btn.textContent = lang.label;
        btn.addEventListener('click', () => {
            store.setLanguage(lang.code);
            document.querySelectorAll('.language-btn').forEach(button => {
                button.classList.toggle('active', button.textContent === lang.label);
            });
        });
        languageToggle.appendChild(btn);
    });
    
    document.body.appendChild(languageToggle);
    
    // MOBILE NAVIGATION
    // Create mobile navigation button
    const mobileNavButton = document.createElement('div');
    mobileNavButton.className = 'mobile-nav-button';
    mobileNavButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    `;
    
    // Create mobile navigation menu
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-nav-menu';
    
    // Close button
    const closeButton = document.createElement('div');
    closeButton.className = 'mobile-nav-close';
    closeButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
    `;
    closeButton.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
    
    // Mobile nav links
    const mobileNavLinks = document.createElement('div');
    mobileNavLinks.className = 'mobile-nav-links';
    
    const createMobileNavLinks = () => {
        mobileNavLinks.innerHTML = '';
        
        // Get section titles based on current language
        const sectionTitles = {
            home: store.currentLanguage === 'es' ? 'Inicio' : 'Home',
            about: store.currentLanguage === 'es' ? 'Sobre mí' : 'About me',
            education: store.currentLanguage === 'es' ? 'Educación' : 'Education',
            skills: store.currentLanguage === 'es' ? 'Habilidades' : 'Skills',
            projects: store.currentLanguage === 'es' ? 'Proyectos' : 'Projects',
            contact: store.currentLanguage === 'es' ? 'Contacto' : 'Contact'
        };
        
        // Create section links
        Object.entries(sectionTitles).forEach(([id, text]) => {
            const link = document.createElement('div');
            link.className = 'mobile-nav-link';
            link.textContent = text;
            link.addEventListener('click', () => {
                navigateTo(id);
                mobileMenu.classList.remove('active');
            });
            mobileNavLinks.appendChild(link);
        });
    };
    
    // Initial mobile render
    createMobileNavLinks();
    
    // Toggle mobile menu
    mobileNavButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
    
    // Assemble mobile menu
    mobileMenu.appendChild(closeButton);
    mobileMenu.appendChild(mobileNavLinks);
    
    // Add mobile elements to body
    document.body.appendChild(mobileNavButton);
    document.body.appendChild(mobileMenu);
    
    // Update navigation when language changes
    store.subscribe(() => {
        createNavLinks();
        createMobileNavLinks();
        
        // Update active state for navigation
        const updateActiveSection = () => {
            const scrollPosition = window.scrollY;
            const sections = document.querySelectorAll('.section');
            const navLinks = document.querySelectorAll('.nav-link');
            const mobileLinks = document.querySelectorAll('.mobile-nav-link');
            
            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    mobileLinks.forEach(link => link.classList.remove('active'));
                    
                    if (navLinks[index]) {
                        navLinks[index].classList.add('active');
                    }
                    
                    if (mobileLinks[index]) {
                        mobileLinks[index].classList.add('active');
                    }
                }
            });
        };
        
        updateActiveSection();
    });
    
    return nav;
};