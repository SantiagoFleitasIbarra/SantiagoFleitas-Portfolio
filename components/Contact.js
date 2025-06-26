import { translate } from '../utils/languageManager.js';

export default function Contact() {
    const section = document.createElement('section');
    section.id = 'contact';
    section.className = 'section py-20 bg-gradient-to-b from-darker to-dark';
    
    const contactContent = `
        <div class="container mx-auto px-5">
            <h2 class="text-3xl md:text-4xl mb-8 text-center font-bold relative fade-in after:content-[''] after:absolute after:w-20 after:h-1 after:bg-primary after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2">
                ${translate('contact.title')}
            </h2>
            
            <h3 class="text-2xl text-center mb-6 text-primary font-medium fade-in">
                ${translate('contact.subtitle')}
            </h3>
            
            <p class="text-center max-w-3xl mx-auto mb-16 text-grey fade-in">
                ${translate('contact.description')}
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-16">
                <div class="bg-darker/80 rounded-xl p-8 shadow-lg border-t-4 border-primary hover:transform hover:-translate-y-2 transition-all duration-500 backdrop-blur-sm fade-in">
                    <div class="space-y-8">
                        <div class="flex flex-col md:flex-row md:items-center gap-4">
                            <div class="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full">
                                <i class="fas fa-envelope text-primary text-2xl"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold mb-2">${translate('contact.email')}</h3>
                                <p class="text-grey">santiagofle8@gmail.com</p>
                            </div>
                        </div>
                        
                        <div class="flex flex-col md:flex-row md:items-center gap-4">
                            <div class="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full">
                                <i class="fas fa-phone text-primary text-2xl"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold mb-2">${translate('contact.phone')}</h3>
                                <p class="text-grey">+598 92 564 819</p>
                            </div>
                        </div>
                        
                        <div class="flex flex-col md:flex-row md:items-center gap-4">
                            <div class="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full">
                                <i class="fas fa-map-marker-alt text-primary text-2xl"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold mb-2">${translate('contact.location')}</h3>
                                <p class="text-grey">${translate('contact.locationDetails')}</p>
                            </div>
                        </div>
                        
                        <div class="flex flex-col md:flex-row md:items-center gap-4">
                            <div class="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full">
                                <i class="fas fa-share-alt text-primary text-2xl"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold mb-2">${translate('contact.social')}</h3>
                                <div class="flex gap-4 mt-2">
                                    <a href="https://github.com/SantiagoFleitasIbarra" target="_blank" class="social-icon">
                                        <i class="fab fa-github text-2xl text-light hover:text-primary transition-colors duration-300"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/santiago-mauricio-fleitas-ibarra-852075280/" target="_blank" class="social-icon">
                                        <i class="fab fa-linkedin text-2xl text-light hover:text-primary transition-colors duration-300"></i>
                                    </a>
                                    <a href="https://instagram.com/sancolett_" target="_blank" class="social-icon">
                                        <i class="fab fa-instagram text-2xl text-light hover:text-primary transition-colors duration-300"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="bg-darker/80 rounded-xl p-8 shadow-lg border-t-4 border-primary hover:transform hover:-translate-y-2 transition-all duration-500 backdrop-blur-sm fade-in">
                    <h3 class="text-xl font-semibold mb-6 text-primary">
                        ${translate('contact.quote.title')}
                    </h3>
                    <div class="relative">
                        <div class="text-5xl text-primary/20 absolute top-0 left-0">
                            <i class="fas fa-quote-left"></i>
                        </div>
                        <blockquote class="pl-12 pr-4 py-2 text-lg italic text-grey">
                            ${translate('contact.quote.text')}
                        </blockquote>
                        <div class="text-right mt-4 text-primary font-medium">
                            - ${translate('contact.quote.author')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    section.innerHTML = contactContent;
    
    return section;
}