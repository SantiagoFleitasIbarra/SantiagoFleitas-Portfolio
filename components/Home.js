import { translate } from '../utils/languageManager.js';

export default function Home() {
    const section = document.createElement('section');
    section.id = 'home';
    section.className = 'section min-h-screen flex items-center bg-gradient-to-br from-dark to-darker relative overflow-hidden pt-20';
    
    // Add background gradient effect
    const bgGradient = document.createElement('div');
    bgGradient.className = 'absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(93,50,165,0.15),transparent_60%)] pointer-events-none';
    section.appendChild(bgGradient);
    
    const homeContent = `
        <div class="container mx-auto px-5">
            <div class="flex flex-col lg:flex-row justify-between items-center">
                <div class="lg:max-w-[600px] mb-12 lg:mb-0">
                    <h1 class="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-light to-primary bg-clip-text text-transparent shadow-text fade-in">
                        Santiago Fleitas
                    </h1>
                    <h2 class="text-xl md:text-2xl font-medium mb-5 text-grey shadow-text fade-in">
                        ${translate('home.title')}
                    </h2>
                    <p class="text-base md:text-lg leading-relaxed mb-8 fade-in">
                        ${translate('home.description')}
                    </p>
                    <div class="flex gap-4 fade-in">
                        <a href="#projects" class="bg-primary hover:bg-secondary text-light px-6 py-3 rounded-md font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg shadow-primary/30">
                            ${translate('home.projectsBtn')}
                        </a>
                        <a href="#contact" class="border-2 border-primary hover:bg-primary text-light px-6 py-[10px] rounded-md font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                            ${translate('home.contactBtn')}
                        </a>
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <h2 class="text-3xl md:text-5xl font-bold text-primary text-center lg:text-right leading-tight shadow-text fade-in">
                        ${translate('home.tagline')}
                    </h2>
                    <div class="text-5xl md:text-6xl text-primary mt-8 float-animation fade-in">
                        <i class="fas fa-rocket"></i>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    section.innerHTML += homeContent;
    return section;
}