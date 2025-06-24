import { translate, toggleLanguage, getCurrentLanguage } from '../utils/languageManager.js';

export default function Header() {
    const header = document.createElement('header');
    header.className = 'fixed top-0 left-0 w-full z-[1000] bg-darker/95 shadow-md backdrop-blur-md';
    
    const headerContent = `
        <div class="container mx-auto px-5">
            <nav class="flex justify-between items-center py-5">
                <div class="logo">
                    <a href="#home" class="text-xl font-bold text-light hover:text-primary transition-colors duration-300">Santiago Fleitas</a>
                </div>
                <div class="nav-toggle lg:hidden text-2xl cursor-pointer">
                    <i class="fas fa-bars"></i>
                </div>
                <ul class="nav-links hidden lg:flex space-x-8 items-center">
                    <li><a href="#home" class="nav-item active relative font-medium py-1 hover:text-primary transition-colors duration-300">${translate('nav.home')}</a></li>
                    <li><a href="#about" class="nav-item relative font-medium py-1 hover:text-primary transition-colors duration-300">${translate('nav.about')}</a></li>
                    <li><a href="#education" class="nav-item relative font-medium py-1 hover:text-primary transition-colors duration-300">${translate('nav.education')}</a></li>
                    <li><a href="#skills" class="nav-item relative font-medium py-1 hover:text-primary transition-colors duration-300">${translate('nav.skills')}</a></li>
                    <li><a href="#projects" class="nav-item relative font-medium py-1 hover:text-primary transition-colors duration-300">${translate('nav.projects')}</a></li>
                    <li><a href="#contact" class="nav-item relative font-medium py-1 hover:text-primary transition-colors duration-300">${translate('nav.contact')}</a></li>
                    <li>
                        <button class="language-toggle border border-primary text-light px-3 py-1 rounded text-sm hover:bg-primary transition-all duration-300" id="language-toggle">
                            ${getCurrentLanguage() === 'es' ? 'EN' : 'ES'}
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    `;
    
    header.innerHTML = headerContent;
    
    // Add CSS for active nav items and hover effects
    const style = document.createElement('style');
    style.textContent = `
        .nav-item::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: #8d4fe7;
            transition: width 0.3s ease;
        }
        .nav-item:hover::after, .nav-item.active::after {
            width: 100%;
        }
    `;
    document.head.appendChild(style);
    
    // Add event listeners after the component is mounted
    setTimeout(() => {
        const navToggle = document.querySelector('.nav-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        navToggle.addEventListener('click', () => {
            if (navLinks.classList.contains('hidden')) {
                navLinks.classList.remove('hidden');
                navLinks.classList.add('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'w-full', 'bg-darker', 'py-5', 'shadow-lg', 'space-y-4', 'items-center', 'space-x-0');
            } else {
                navLinks.classList.add('hidden');
                navLinks.classList.remove('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'w-full', 'bg-darker', 'py-5', 'shadow-lg', 'space-y-4', 'items-center', 'space-x-0');
            }
        });
        
        const languageToggle = document.getElementById('language-toggle');
        languageToggle.addEventListener('click', () => {
            toggleLanguage();
            window.location.reload();
        });
    }, 0);
    
    return header;
}