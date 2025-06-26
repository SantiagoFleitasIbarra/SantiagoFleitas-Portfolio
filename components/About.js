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
            
            <div class="flex flex-col lg:flex-row items-start gap-14">
                <div class="lg:flex-[1.5] fade-in">
                    <!-- Comic/News style layout -->
                    <div class="bg-darker border-2 border-primary/30 rounded-lg p-6 shadow-lg mb-8 relative">
                        <div class="absolute top-0 right-0 bg-primary text-white text-xs px-3 py-1 rounded-bl-lg font-bold uppercase">
                            BREAKING NEWS
                        </div>
                        <h3 class="text-2xl font-bold mb-4 text-primary border-b border-primary/30 pb-2">
                            <i class="fas fa-newspaper mr-2"></i> ${translate('about.subtitle')}
                        </h3>
                        <p class="mb-4 leading-relaxed bg-dark/30 p-3 rounded-lg">${translate('about.paragraph1')}</p>
                        
                        <a href="/pdf/Santiago Fleitas Curriculum.pdf" class="inline-block bg-primary hover:bg-secondary text-light px-6 py-3 rounded-md font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg shadow-primary/30 mb-6">
                            <i class="fas fa-download mr-2"></i> ${translate('about.downloadCV')}
                        </a>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div class="bg-dark/80 p-5 rounded-lg border-l-4 border-primary shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                            <div class="absolute top-0 right-0 w-16 h-16">
                                <div class="absolute transform rotate-45 bg-primary text-xs text-white font-semibold py-1 right-[-35px] top-[32px] w-[170px] text-center">
                                    HIGHLIGHT
                                </div>
                            </div>
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
                            <div class="flex items-center mb-3">
                                <h3 class="text-lg font-medium text-primary mr-2">${translate('about.skill5.title')}</h3>
                                <span class="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full">FEATURED</span>
                            </div>
                            <p class="text-grey">${translate('about.skill5.description')}</p>
                        </div>
                    </div>
                </div>
                
                <div class="flex flex-col gap-6 fade-in">
                    <!-- Comic style image frames -->
                    <div class="relative">
                        <div class="w-64 h-64 md:w-72 md:h-72 rounded-lg overflow-hidden shadow-lg shadow-primary/30 border-4 border-white">
                            <img src="./images/SantiagoF.jpg" alt="Santiago Fleitas" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500">
                        </div>
                        <div class="absolute -bottom-4 -right-4 bg-primary text-white p-2 rounded-lg transform rotate-6 shadow-lg">
                            <i class="fas fa-code mr-1"></i> Developer
                        </div>
                    </div>
                    
                    <div class="relative mt-8">
                        <div class="w-64 h-64 md:w-72 md:h-72 rounded-lg overflow-hidden shadow-lg shadow-primary/30 border-4 border-white transform -rotate-3">
                            <img src="./images/SantiagoF2.jpg" alt="Santiago Fleitas" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500">
                        </div>
                        <div class="absolute -top-4 -left-4 bg-primary text-white p-2 rounded-lg transform -rotate-6 shadow-lg">
                            <i class="fas fa-rocket mr-1"></i> Innovator
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    section.innerHTML = aboutContent;
    return section;
}