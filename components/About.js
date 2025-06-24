import { translate } from '../utils/languageManager.js';

export default function About() {
    const section = document.createElement('section');
    section.id = 'about';
    section.className = 'section py-20 bg-darker';
    
    const aboutContent = `
        <div class="container mx-auto px-5">
            <h2 class="text-3xl md:text-4xl mb-12 text-center font-bold relative fade-in after:content-[''] after:absolute after:w-20 after:h-1 after:bg-primary after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2">
                ${translate('about.title')}
            </h2>
            <div class="flex flex-col lg:flex-row items-center gap-14">
                <div class="lg:flex-[1.5] fade-in">
                    <p class="mb-8 leading-relaxed">${translate('about.paragraph1')}</p>
                    
                    <a href="/pdf/Santiago Fleitas - Curriculum.pdf" class="inline-block bg-primary hover:bg-secondary text-light px-6 py-3 rounded-md font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg shadow-primary/30 mb-10">
                        <i class="fas fa-download mr-2"></i> ${translate('about.downloadCV')}
                    </a>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
                        <div class="bg-dark/80 p-5 rounded-lg border-l-4 border-primary shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
                            <h3 class="text-lg font-medium mb-3 text-primary">${translate('about.skill1.title')}</h3>
                            <p class="text-grey">${translate('about.skill1.description')}</p>
                        </div>
                        
                        <div class="bg-dark/80 p-5 rounded-lg border-l-4 border-primary shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
                            <h3 class="text-lg font-medium mb-3 text-primary">${translate('about.skill2.title')}</h3>
                            <p class="text-grey">${translate('about.skill2.description')}</p>
                        </div>
                        
                        <div class="bg-dark/80 p-5 rounded-lg border-l-4 border-primary shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
                            <h3 class="text-lg font-medium mb-3 text-primary">${translate('about.skill3.title')}</h3>
                            <p class="text-grey">${translate('about.skill3.description')}</p>
                        </div>
                        
                        <div class="bg-dark/80 p-5 rounded-lg border-l-4 border-primary shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
                            <h3 class="text-lg font-medium mb-3 text-primary">${translate('about.skill4.title')}</h3>
                            <p class="text-grey">${translate('about.skill4.description')}</p>
                        </div>
                        
                        <div class="bg-dark/80 p-5 rounded-lg border-l-4 border-primary shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300 md:col-span-2">
                            <h3 class="text-lg font-medium mb-3 text-primary">${translate('about.skill5.title')}</h3>
                            <p class="text-grey">${translate('about.skill5.description')}</p>
                        </div>
                    </div>
                </div>
                
                <div class="flex flex-col gap-6 fade-in">
                    <div class="w-64 h-64 md:w-72 md:h-72 rounded-lg overflow-hidden shadow-lg shadow-primary/30">
                        <img src="/images/Santiago2.jpg" alt="Santiago Fleitas" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500">
                    </div>
                    <div class="w-64 h-64 md:w-72 md:h-72 rounded-lg overflow-hidden shadow-lg shadow-primary/30">
                        <img src="/images/Santiago.jpg" alt="Santiago Fleitas" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500">
                    </div>
                </div>
            </div>
        </div>
    `;
    
    section.innerHTML = aboutContent;
    return section;
}