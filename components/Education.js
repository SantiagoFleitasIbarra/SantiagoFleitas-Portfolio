import { translate } from '../utils/languageManager.js';

export default function Education() {
    const section = document.createElement('section');
    section.id = 'education';
    section.className = 'section py-20 bg-gradient-to-b from-dark to-darker';
    
    const educationContent = `
        <div class="container mx-auto px-5">
            <h2 class="text-3xl md:text-4xl mb-8 text-center font-bold relative fade-in after:content-[''] after:absolute after:w-20 after:h-1 after:bg-primary after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2">
                ${translate('education.title')}
            </h2>
            
            <p class="text-center max-w-3xl mx-auto mb-16 text-grey fade-in">
                ${translate('education.summary')}
            </p>
            
            <div class="relative max-w-3xl mx-auto py-10">
                <!-- Timeline Line -->
                <div class="absolute w-0.5 h-full bg-primary left-1/2 transform -translate-x-1/2 md:block hidden"></div>
                
                <!-- Timeline Items -->
                <div class="mb-16 relative fade-in">
                    <!-- Timeline Dot -->
                    <div class="w-5 h-5 bg-primary rounded-full absolute left-1/2 top-2.5 transform -translate-x-1/2 z-10 shadow-lg shadow-primary/30 md:block hidden"></div>
                    
                    <div class="bg-dark/80 rounded-lg p-6 shadow-lg relative border-l-3 border-primary md:w-[calc(50%-40px)] md:ml-0 ml-[60px]">
                        <span class="inline-block px-4 py-1 bg-primary text-light rounded-full text-sm font-medium mb-4">2025 - ${translate('education.present')}</span>
                        <h3 class="text-xl font-medium mb-2.5 text-light">${translate('education.degree1.title')}</h3>
                        <p class="font-medium mb-2.5">${translate('education.degree1.institution')}</p>
                        <p class="text-grey mb-3">${translate('education.degree1.description')}</p>
                        <ul class="text-grey list-disc pl-5">
                            <li>${translate('education.degree1.bullet1')}</li>
                            <li>${translate('education.degree1.bullet2')}</li>
                            <li>${translate('education.degree1.bullet3')}</li>
                            <li>${translate('education.degree1.bullet4')}</li>
                        </ul>
                    </div>
                </div>
                
                <div class="mb-16 relative fade-in">
                    <div class="w-5 h-5 bg-primary rounded-full absolute left-1/2 top-2.5 transform -translate-x-1/2 z-10 shadow-lg shadow-primary/30 md:block hidden"></div>
                    
                    <div class="bg-dark/80 rounded-lg p-6 shadow-lg relative border-l-3 border-primary md:w-[calc(50%-40px)] md:ml-[calc(50%+40px)] ml-[60px]">
                        <span class="inline-block px-4 py-1 bg-primary text-light rounded-full text-sm font-medium mb-4">2025 - ${translate('education.present')}</span>
                        <h3 class="text-xl font-medium mb-2.5 text-light">${translate('education.degree2.title')}</h3>
                        <p class="font-medium mb-2.5">${translate('education.degree2.institution')}</p>
                        <p class="text-grey">${translate('education.degree2.description')}</p>
                    </div>
                </div>
                
                <div class="mb-16 relative fade-in">
                    <div class="w-5 h-5 bg-primary rounded-full absolute left-1/2 top-2.5 transform -translate-x-1/2 z-10 shadow-lg shadow-primary/30 md:block hidden"></div>
                    
                    <div class="bg-dark/80 rounded-lg p-6 shadow-lg relative border-l-3 border-primary md:w-[calc(50%-40px)] md:ml-0 ml-[60px]">
                        <div class="flex items-center mb-4">
                            <span class="inline-block px-4 py-1 bg-primary text-light rounded-full text-sm font-medium">2023 - 2024</span>
                            <span class="ml-3 inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">${translate('education.completed')}</span>
                        </div>
                        <h3 class="text-xl font-medium mb-2.5 text-light">${translate('education.degree3.title')}</h3>
                        <p class="font-medium mb-2.5">${translate('education.degree3.institution')}</p>
                        <p class="text-grey mb-3">${translate('education.degree3.description')}</p>
                        <ul class="text-grey list-disc pl-5 mb-4">
                            <li>${translate('education.degree3.bullet1')}</li>
                            <li>${translate('education.degree3.bullet2')}</li>
                            <li>${translate('education.degree3.bullet3')}</li>
                        </ul>
                        <a href="/pdf/MVD-0224_Foundations of Computer Science_FLEITAS_SantiagoFleitas.pdf" class="inline-block bg-primary hover:bg-secondary text-light px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:-translate-y-1">
                            <i class="fas fa-certificate mr-2"></i> ${translate('education.viewCertificate')}
                        </a>
                    </div>
                </div>
                
                <div class="relative fade-in">
                    <div class="w-5 h-5 bg-primary rounded-full absolute left-1/2 top-2.5 transform -translate-x-1/2 z-10 shadow-lg shadow-primary/30 md:block hidden"></div>
                    
                    <div class="bg-dark/80 rounded-lg p-6 shadow-lg relative border-l-3 border-primary md:w-[calc(50%-40px)] md:ml-[calc(50%+40px)] ml-[60px]">
                        <span class="inline-block px-4 py-1 bg-primary text-light rounded-full text-sm font-medium mb-4">2021 - 2022</span>
                        <h3 class="text-xl font-medium mb-2.5 text-light">${translate('education.degree4.title')}</h3>
                        <p class="font-medium mb-2.5">${translate('education.degree4.institution')}</p>
                        <p class="text-grey mb-3">${translate('education.degree4.description')}</p>
                        <ul class="text-grey list-disc pl-5">
                            <li>${translate('education.degree4.bullet1')}</li>
                            <li>${translate('education.degree4.bullet2')}</li>
                            <li>${translate('education.degree4.bullet3')}</li>
                            <li>${translate('education.degree4.bullet4')}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    section.innerHTML = educationContent;
    return section;
}