import { translate } from '../utils/languageManager.js';

export default function Footer() {
    const footer = document.createElement('footer');
    footer.className = 'bg-darker py-10';
    
    const footerContent = `
        <div class="container mx-auto px-5">
            <div class="flex flex-col md:flex-row justify-between items-center mb-8">
                <div class="logo mb-6 md:mb-0">
                    <a href="#home" class="text-xl font-bold text-light hover:text-primary transition-colors duration-300">Santiago Fleitas</a>
                </div>
                
                <div class="flex gap-6 md:gap-10">
                    <a href="#home" class="text-grey hover:text-primary transition-colors duration-300">${translate('nav.home')}</a>
                    <a href="#about" class="text-grey hover:text-primary transition-colors duration-300">${translate('nav.about')}</a>
                    <a href="#projects" class="text-grey hover:text-primary transition-colors duration-300">${translate('nav.projects')}</a>
                    <a href="#contact" class="text-grey hover:text-primary transition-colors duration-300">${translate('nav.contact')}</a>
                </div>
                
                <div class="flex gap-4 mt-6 md:mt-0">
                    <a href="https://github.com/SantiagoFleitasIbarra" target="_blank" class="w-10 h-10 flex items-center justify-center bg-dark rounded-full hover:bg-primary transition-all duration-300">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/santiago-mauricio-fleitas-ibarra-852075280/" target="_blank" class="w-10 h-10 flex items-center justify-center bg-dark rounded-full hover:bg-primary transition-all duration-300">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://instagram.com/sancolett_" target="_blank" class="w-10 h-10 flex items-center justify-center bg-dark rounded-full hover:bg-primary transition-all duration-300">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
            
            <div class="border-t border-dark pt-8 flex flex-col md:flex-row justify-between items-center">
                <p class="text-grey text-sm mb-4 md:mb-0">© 2025 Santiago Fleitas. ${translate('footer.subtitle')}</p>
                
                <button id="back-to-top" class="px-5 py-2 bg-primary hover:bg-secondary text-light rounded-full transition-colors duration-300 inline-flex items-center">
                    <i class="fas fa-arrow-up mr-2"></i> ${translate('footer.backToTop')}
                </button>
            </div>
        </div>
    `;
    
    footer.innerHTML = footerContent;
    
    // Add event listeners after the component is mounted
    setTimeout(() => {
        const backToTopBtn = document.getElementById('back-to-top');
        if (backToTopBtn) {
            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }, 0);
    
    return footer;
}