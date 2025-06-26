import { translate } from '../utils/languageManager.js';

export default function Projects() {
    const section = document.createElement('section');
    section.id = 'projects';
    section.className = 'section py-20 bg-gradient-to-b from-darker to-dark';
    
    const projectsContent = `
        <div class="container mx-auto px-5">
            <h2 class="text-3xl md:text-4xl mb-8 text-center font-bold relative fade-in after:content-[''] after:absolute after:w-20 after:h-1 after:bg-primary after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2">
                ${translate('projects.title')}
            </h2>
            
            <p class="text-center max-w-3xl mx-auto mb-16 text-grey fade-in">
                ${translate('projects.summary')}
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Project 1: IbaEduca -->
                <div class="bg-darker/80 rounded-xl overflow-hidden shadow-xl hover:transform hover:-translate-y-2 transition-all duration-500 border border-primary/30 fade-in">
                    <div class="relative h-56">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                        <img src="/images/IbaEduca/ibaedu.png" alt="IbaEduca" class="w-full h-full object-cover">
                        <div class="absolute top-4 left-4 z-20">
                            <span class="bg-primary/90 text-white text-xs px-3 py-1 rounded-full uppercase">
                                ${translate('projects.currentlyWorking')}
                            </span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-2xl font-bold mb-3 text-white">IbaEduca</h3>
                        <p class="text-gray-300 mb-4">${translate('projects.project1.description')}</p>
                        
                        <div class="mb-5">
                            <h4 class="text-sm font-semibold mb-2 text-gray-400">${translate('projects.technologies')}:</h4>
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">React.js</span>
                                <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Node.js</span>
                                <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">MongoDB</span>
                                <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Tailwind CSS</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Project 2: CazaPalabras -->
                <div class="bg-darker/80 rounded-xl overflow-hidden shadow-xl hover:transform hover:-translate-y-2 transition-all duration-500 border border-primary/30 fade-in">
                    <div class="relative h-56">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                        <img src="/images/CazaPalabras/CP.png" alt="CazaPalabras" class="w-full h-full object-cover">
                    </div>
                    <div class="p-6">
                        <h3 class="text-2xl font-bold mb-3 text-white">CazaPalabras</h3>
                        <p class="text-gray-300 mb-4">${translate('projects.project2.description')}</p>
                        
                        <div class="mb-5">
                            <h4 class="text-sm font-semibold mb-2 text-gray-400">${translate('projects.technologies')}:</h4>
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">JavaScript</span>
                                <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">HTML5</span>
                                <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">CSS3</span>
                            </div>
                        </div>
                        
                        <div class="flex flex-wrap gap-3">
                            <a href="https://github.com/SantiagoFleitasIbarra/CazaPalabras-Juego-2025" target="_blank" class="text-sm px-4 py-2 bg-primary hover:bg-secondary text-white rounded-full transition-colors flex items-center">
                                <i class="fab fa-github mr-1"></i> ${translate('projects.viewRepo')}
                            </a>
                            <a href="https://santiagofleitasibarra.github.io/CazaPalabras-Juego-2025/" target="_blank" class="text-sm px-4 py-2 bg-dark hover:bg-dark/70 text-white rounded-full transition-colors border border-primary flex items-center">
                                <i class="fas fa-external-link-alt mr-1"></i> ${translate('projects.viewDemo')}
                            </a>
                        </div>
                    </div>
                </div>
                
                <!-- Project 3: Inglés Divertido -->
                <div class="bg-darker/80 rounded-xl overflow-hidden shadow-xl hover:transform hover:-translate-y-2 transition-all duration-500 border border-primary/30 fade-in">
                    <div class="relative h-56">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                        <img src="/images/ingles-divertido/Ingles.png" alt="Inglés Divertido" class="w-full h-full object-cover">
                    </div>
                    <div class="p-6">
                        <h3 class="text-2xl font-bold mb-3 text-white">${translate('projects.project3.title')}</h3>
                        <p class="text-gray-300 mb-4">${translate('projects.project3.description')}</p>
                        
                        <div class="mb-5">
                            <h4 class="text-sm font-semibold mb-2 text-gray-400">${translate('projects.technologies')}:</h4>
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">HTML5</span>
                                <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">CSS3</span>
                                <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">JavaScript</span>
                            </div>
                        </div>
                        
                        <div class="flex flex-wrap gap-3">
                            <a href="https://github.com/SantiagoFleitasIbarra/ingles-divertido" target="_blank" class="text-sm px-4 py-2 bg-primary hover:bg-secondary text-white rounded-full transition-colors flex items-center">
                                <i class="fab fa-github mr-1"></i> ${translate('projects.viewRepo')}
                            </a>
                            <a href="https://santiagofleitasibarra.github.io/ingles-divertido/" target="_blank" class="text-sm px-4 py-2 bg-dark hover:bg-dark/70 text-white rounded-full transition-colors border border-primary flex items-center">
                                <i class="fas fa-external-link-alt mr-1"></i> ${translate('projects.viewDemo')}
                            </a>
                        </div>
                    </div>
                </div>
                
                <!-- Project 4: Organiza tu día -->
                <div class="bg-darker/80 rounded-xl overflow-hidden shadow-xl hover:transform hover:-translate-y-2 transition-all duration-500 border border-primary/30 fade-in">
                    <div class="relative h-56">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                        <img src="/images/Gestor-tareas/Tareas.png" alt="Organiza tu día" class="w-full h-full object-cover">
                    </div>
                    <div class="p-6">
                        <h3 class="text-2xl font-bold mb-3 text-white">${translate('projects.project4.title')}</h3>
                        <p class="text-gray-300 mb-4">${translate('projects.project4.description')}</p>
                        
                        <div class="mb-5">
                            <h4 class="text-sm font-semibold mb-2 text-gray-400">${translate('projects.technologies')}:</h4>
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">HTML5</span>
                                <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">CSS3</span>
                                <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">JavaScript</span>
                            </div>
                        </div>
                        
                        <div class="flex flex-wrap gap-3">
                            <a href="https://github.com/SantiagoFleitasIbarra/Organiza-tu-dia" target="_blank" class="text-sm px-4 py-2 bg-primary hover:bg-secondary text-white rounded-full transition-colors flex items-center">
                                <i class="fab fa-github mr-1"></i> ${translate('projects.viewRepo')}
                            </a>
                            <a href="https://santiagofleitasibarra.github.io/Organiza-tu-dia/" target="_blank" class="text-sm px-4 py-2 bg-dark hover:bg-dark/70 text-white rounded-full transition-colors border border-primary flex items-center">
                                <i class="fas fa-external-link-alt mr-1"></i> ${translate('projects.viewDemo')}
                            </a>
                        </div>
                    </div>
                </div>
                
                <!-- Project 5: Warded -->
                <div class="bg-darker/80 rounded-xl overflow-hidden shadow-xl hover:transform hover:-translate-y-2 transition-all duration-500 border border-primary/30 fade-in md:col-span-2">
                    <div class="relative h-56 md:h-64">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                        <img src="/images/Warded/warded.jpg" alt="Warded" class="w-full h-full object-cover">
                    </div>
                    <div class="p-6">
                        <h3 class="text-2xl font-bold mb-3 text-white">Warded</h3>
                        <p class="text-gray-300 mb-4">${translate('projects.project5.description')}</p>
                        
                        <div class="mb-5">
                            <h4 class="text-sm font-semibold mb-2 text-gray-400">${translate('projects.technologies')}:</h4>
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Flutter</span>
                                <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Firebase</span>
                                <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Jira</span>
                                <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Figma</span>
                            </div>
                        </div>
                        
                        <div class="flex flex-wrap gap-3">
                            <a href="https://www.youtube.com/watch?v=Lfbt74-kG8c&t=5643s" target="_blank" class="text-sm px-4 py-2 bg-primary hover:bg-secondary text-white rounded-full transition-colors flex items-center">
                                <i class="fab fa-youtube mr-1"></i> ${translate('projects.demoDay')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    section.innerHTML = projectsContent;
    
    return section;
}