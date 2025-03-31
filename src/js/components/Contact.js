import { store } from '../store.js';

export const renderContact = () => {
    const section = document.createElement('section');
    section.id = 'contact';
    section.className = 'section';
    
    // Create beige glow background effect
    const glowEffect = document.createElement('div');
    glowEffect.className = 'absolute inset-0 w-full h-full';
    glowEffect.innerHTML = `
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#d4b996] opacity-20 filter blur-[100px]"></div>
        <div class="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-[#d4b996] opacity-10 filter blur-[80px]"></div>
        <div class="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-[#d4b996] opacity-15 filter blur-[90px]"></div>
    `;
    section.appendChild(glowEffect);
    
    const container = document.createElement('div');
    container.className = 'container relative z-10';
    
    const heading = document.createElement('h2');
    heading.className = 'heading';
    heading.textContent = store.getText('contact', 'title');
    
    const subtitle = document.createElement('p');
    subtitle.className = 'text-gray-300 mb-10 max-w-3xl';
    subtitle.textContent = store.getText('contact', 'subtitle');
    
    const contactContent = document.createElement('div');
    contactContent.className = 'grid grid-cols-1 gap-10';
    
    // Contact info (left side)
    const contactInfo = document.createElement('div');
    contactInfo.className = 'bg-gray-800 bg-opacity-80 backdrop-blur-sm p-8 rounded-lg shadow-lg border-l-4 border-amber-600';
    
    // Contact details
    const contactDetails = document.createElement('div');
    contactDetails.className = 'space-y-8 mb-10';
    
    const renderContactItems = () => {
        contactDetails.innerHTML = '';
        
        const lang = store.currentLanguage;
        
        const contactItems = [
            { 
                icon: 'envelope', 
                label: lang === 'es' ? 'Email' : 'Email', 
                value: 'santiagofle8@gmail.com', 
                link: 'mailto:santiagofle8@gmail.com' 
            },
            { 
                icon: 'phone', 
                label: lang === 'es' ? 'Teléfono' : 'Phone', 
                value: '+598 92 564 819', 
                link: 'tel:+59892564819' 
            },
            { 
                icon: 'location-dot', 
                label: lang === 'es' ? 'Ubicación' : 'Location', 
                value: lang === 'es' ? 'Barros Blancos, Canelones, Uruguay' : 'Barros Blancos, Canelones, Uruguay', 
                link: null 
            }
        ];
        
        contactItems.forEach(item => {
            const contactItem = document.createElement('div');
            contactItem.className = 'flex items-start';
            
            const iconContainer = document.createElement('div');
            iconContainer.className = 'mr-4 p-3 bg-amber-600 bg-opacity-20 rounded-full flex items-center justify-center';
            iconContainer.innerHTML = `<i class="fas fa-${item.icon} text-amber-400"></i>`;
            
            const detailsContainer = document.createElement('div');
            
            const label = document.createElement('h3');
            label.className = 'text-amber-400 font-semibold text-lg';
            label.textContent = item.label;
            
            const value = document.createElement('p');
            value.className = 'text-gray-300';
            
            if (item.link) {
                const link = document.createElement('a');
                link.href = item.link;
                link.className = 'hover:text-amber-400 transition-colors';
                link.textContent = item.value;
                value.appendChild(link);
            } else {
                value.textContent = item.value;
            }
            
            detailsContainer.appendChild(label);
            detailsContainer.appendChild(value);
            
            contactItem.appendChild(iconContainer);
            contactItem.appendChild(detailsContainer);
            
            contactDetails.appendChild(contactItem);
        });
    };
    
    // Initial render
    renderContactItems();
    
    // Social links
    const socialLinks = document.createElement('div');
    socialLinks.className = 'mt-10';
    
    const socialTitle = document.createElement('h3');
    socialTitle.className = 'text-xl font-semibold text-gray-300 mb-4';
    
    // Update title based on language
    const updateSocialTitle = () => {
        socialTitle.textContent = store.currentLanguage === 'es' ? 'Redes Sociales' : 'Social Media';
    };
    
    updateSocialTitle();
    
    const socialButtons = document.createElement('div');
    socialButtons.className = 'flex flex-wrap gap-4';
    
    const socials = [
        { platform: 'github', url: 'https://github.com/SantiagoFleitasIbarra', color: 'bg-gray-700 hover:bg-gray-600' },
        { platform: 'linkedin', url: 'https://www.linkedin.com/in/santiago-mauricio-fleitas-ibarra-852075280/', color: 'bg-blue-700 hover:bg-blue-600' },
        { platform: 'instagram', url: 'https://instagram.com/sancolett_', color: 'bg-pink-700 hover:bg-pink-600' }
    ];
    
    socials.forEach(social => {
        const button = document.createElement('a');
        button.href = social.url;
        button.target = "_blank";
        button.className = `${social.color} w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg`;
        button.innerHTML = `<i class="fab fa-${social.platform} text-white text-xl"></i>`;
        socialButtons.appendChild(button);
    });
    
    socialLinks.appendChild(socialTitle);
    socialLinks.appendChild(socialButtons);
    
    contactInfo.appendChild(contactDetails);
    contactInfo.appendChild(socialLinks);
    
    // Quote section (right side)
    const quoteSection = document.createElement('div');
    quoteSection.className = 'bg-gray-800 bg-opacity-80 backdrop-blur-sm p-8 rounded-lg shadow-lg border-r-4 border-amber-600 flex flex-col justify-center relative overflow-hidden';
    
    const updateQuote = () => {
        const lang = store.currentLanguage;
        
        // Light effect in background
        quoteSection.innerHTML = `
            <div class="absolute top-0 right-0 w-32 h-32 rounded-full bg-amber-400 opacity-10 filter blur-2xl"></div>
            <div class="absolute bottom-10 left-10 w-20 h-20 rounded-full bg-amber-300 opacity-10 filter blur-xl"></div>
            
            <div class="relative z-10">
                <svg class="w-10 h-10 text-amber-400 opacity-30 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                
                <p class="text-gray-300 italic text-lg mb-6">${lang === 'es' 
                    ? 'El único modo de hacer un gran trabajo es amar lo que haces. Si no has encontrado algo que ames, sigue buscando. No te conformes.' 
                    : 'The only way to do great work is to love what you do. If you haven\'t found it yet, keep looking. Don\'t settle.'}</p>
                
                <div class="flex items-center">
                    <div class="w-12 h-12 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div>
                        <p class="font-bold text-amber-400">Steve Jobs</p>
                        <p class="text-sm text-gray-400">${lang === 'es' ? 'Co-fundador de Apple Inc.' : 'Co-founder of Apple Inc.'}</p>
                    </div>
                </div>
            </div>
        `;
    };
    
    // Initial quote render
    updateQuote();
    
    contactContent.appendChild(contactInfo);
    contactContent.appendChild(quoteSection);
    
    container.appendChild(heading);
    container.appendChild(subtitle);
    container.appendChild(contactContent);
    section.appendChild(container);
    
    // Footer
    const footer = document.createElement('footer');
    footer.className = 'mt-16 py-8 border-t border-gray-800 relative';
    
    const updateFooter = () => {
        const lang = store.currentLanguage;
        footer.innerHTML = `
            <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p class="text-gray-400 mb-4 md:mb-0"> 2025 Santiago Fleitas | ${lang === 'es' ? 'Portfolio Profesional' : 'Professional Portfolio'}</p>
                
                <button id="back-to-top" class="btn-outline rounded-full w-12 h-12 flex items-center justify-center animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </button>
            </div>
        `;
    };
    
    // Initial footer render
    updateFooter();
    
    section.appendChild(footer);
    
    // Language change subscription
    store.subscribe(() => {
        heading.textContent = store.getText('contact', 'title');
        subtitle.textContent = store.getText('contact', 'subtitle');
        renderContactItems();
        updateSocialTitle();
        updateQuote();
        updateFooter();
        
        // Back to top functionality
        const backToTopBtn = document.getElementById('back-to-top');
        if (backToTopBtn) {
            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    });
    
    // Back to top functionality
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
    }, 100);
    
    return section;
};