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
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Project 1: IbaEduca -->
                <div class="project-card fade-in">
                    <div class="relative h-[420px] perspective">
                        <div class="project-card-inner absolute w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer">
                            <div class="project-front absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-xl">
                                <div class="relative w-full h-full">
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                                    <img src="/images/IbaEduca/iba.png" alt="IbaEduca" class="w-full h-full object-cover">
                                    <div class="absolute bottom-0 left-0 p-6 z-20 w-full">
                                        <span class="bg-primary/90 text-white text-xs px-3 py-1 rounded-full uppercase">${translate('projects.currentlyWorking')}</span>
                                        <h3 class="text-2xl font-bold mt-2 text-white">IbaEduca</h3>
                                        <p class="text-sm text-gray-300 mt-1 line-clamp-2">${translate('projects.project1.shortDescription')}</p>
                                        <p class="mt-4 text-sm text-white">${translate('projects.clickToFlip')}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="project-back absolute w-full h-full backface-hidden bg-darker rounded-xl p-6 shadow-xl rotate-y-180">
                                <h3 class="text-xl font-bold mb-3 text-primary">IbaEduca</h3>
                                <p class="text-sm text-gray-300 mb-4">${translate('projects.project1.description')}</p>
                                <div class="mb-4">
                                    <h4 class="text-sm font-semibold mb-2 text-gray-400">${translate('projects.technologies')}:</h4>
                                    <div class="flex flex-wrap gap-2">
                                        <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">React.js</span>
                                        <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Node.js</span>
                                        <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">MongoDB</span>
                                        <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Tailwind CSS</span>
                                    </div>
                                </div>
                                <div class="mt-auto pt-4 flex justify-center">
                                    <button class="flip-back-btn text-sm px-4 py-2 bg-primary hover:bg-secondary text-white rounded-full transition-colors">
                                        <i class="fas fa-undo mr-1"></i> ${translate('projects.flipBack')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Project 2: CazaPalabras -->
                <div class="project-card fade-in">
                    <div class="relative h-[420px] perspective">
                        <div class="project-card-inner absolute w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer">
                            <div class="project-front absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-xl">
                                <div class="relative w-full h-full">
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                                    <img src="project2.jpg" alt="CazaPalabras" class="w-full h-full object-cover">
                                    <div class="absolute bottom-0 left-0 p-6 z-20 w-full">
                                        <h3 class="text-2xl font-bold mt-2 text-white">CazaPalabras</h3>
                                        <p class="text-sm text-gray-300 mt-1 line-clamp-2">${translate('projects.project2.shortDescription')}</p>
                                        <p class="mt-4 text-sm text-white">${translate('projects.clickToFlip')}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="project-back absolute w-full h-full backface-hidden bg-darker rounded-xl p-6 shadow-xl rotate-y-180">
                                <h3 class="text-xl font-bold mb-3 text-primary">CazaPalabras</h3>
                                <p class="text-sm text-gray-300 mb-4">${translate('projects.project2.description')}</p>
                                <div class="mb-4">
                                    <h4 class="text-sm font-semibold mb-2 text-gray-400">${translate('projects.technologies')}:</h4>
                                    <div class="flex flex-wrap gap-2">
                                        <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">JavaScript</span>
                                        <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">HTML5</span>
                                        <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">CSS3</span>
                                    </div>
                                </div>
                                <div class="mt-4 flex flex-wrap gap-3 justify-center">
                                    <a href="#" target="_blank" class="text-sm px-4 py-2 bg-primary hover:bg-secondary text-white rounded-full transition-colors flex items-center">
                                        <i class="fab fa-github mr-1"></i> ${translate('projects.viewRepo')}
                                    </a>
                                    <a href="#" target="_blank" class="text-sm px-4 py-2 bg-dark hover:bg-dark/70 text-white rounded-full transition-colors border border-primary flex items-center">
                                        <i class="fas fa-external-link-alt mr-1"></i> ${translate('projects.viewDemo')}
                                    </a>
                                </div>
                                <div class="mt-4 flex justify-center">
                                    <button class="flip-back-btn text-sm px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-full transition-colors">
                                        <i class="fas fa-undo mr-1"></i> ${translate('projects.flipBack')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Project 3: Inglés Divertido -->
                <div class="project-card fade-in">
                    <div class="relative h-[420px] perspective">
                        <div class="project-card-inner absolute w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer">
                            <div class="project-front absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-xl">
                                <div class="relative w-full h-full">
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                                    <img src="project3.jpg" alt="Inglés Divertido" class="w-full h-full object-cover">
                                    <div class="absolute bottom-0 left-0 p-6 z-20 w-full">
                                        <h3 class="text-2xl font-bold mt-2 text-white">${translate('projects.project3.title')}</h3>
                                        <p class="text-sm text-gray-300 mt-1 line-clamp-2">${translate('projects.project3.shortDescription')}</p>
                                        <p class="mt-4 text-sm text-white">${translate('projects.clickToFlip')}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="project-back absolute w-full h-full backface-hidden bg-darker rounded-xl p-6 shadow-xl rotate-y-180">
                                <h3 class="text-xl font-bold mb-3 text-primary">${translate('projects.project3.title')}</h3>
                                <p class="text-sm text-gray-300 mb-4">${translate('projects.project3.description')}</p>
                                <div class="mb-4">
                                    <h4 class="text-sm font-semibold mb-2 text-gray-400">${translate('projects.technologies')}:</h4>
                                    <div class="flex flex-wrap gap-2">
                                        <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">HTML5</span>
                                        <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">CSS3</span>
                                        <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">JavaScript</span>
                                    </div>
                                </div>
                                <div class="mt-4 flex flex-wrap gap-3 justify-center">
                                    <a href="#" target="_blank" class="text-sm px-4 py-2 bg-primary hover:bg-secondary text-white rounded-full transition-colors flex items-center">
                                        <i class="fab fa-github mr-1"></i> ${translate('projects.viewRepo')}
                                    </a>
                                    <a href="#" target="_blank" class="text-sm px-4 py-2 bg-dark hover:bg-dark/70 text-white rounded-full transition-colors border border-primary flex items-center">
                                        <i class="fas fa-external-link-alt mr-1"></i> ${translate('projects.viewDemo')}
                                    </a>
                                </div>
                                <div class="mt-4 flex justify-center">
                                    <button class="flip-back-btn text-sm px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-full transition-colors">
                                        <i class="fas fa-undo mr-1"></i> ${translate('projects.flipBack')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Project 4: Organiza tu día -->
                <div class="project-card fade-in">
                    <div class="relative h-[420px] perspective">
                        <div class="project-card-inner absolute w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer">
                            <div class="project-front absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-xl">
                                <div class="relative w-full h-full">
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                                    <img src="project4.jpg" alt="Organiza tu día" class="w-full h-full object-cover">
                                    <div class="absolute bottom-0 left-0 p-6 z-20 w-full">
                                        <h3 class="text-2xl font-bold mt-2 text-white">${translate('projects.project4.title')}</h3>
                                        <p class="text-sm text-gray-300 mt-1 line-clamp-2">${translate('projects.project4.shortDescription')}</p>
                                        <p class="mt-4 text-sm text-white">${translate('projects.clickToFlip')}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="project-back absolute w-full h-full backface-hidden bg-darker rounded-xl p-6 shadow-xl rotate-y-180">
                                <h3 class="text-xl font-bold mb-3 text-primary">${translate('projects.project4.title')}</h3>
                                <p class="text-sm text-gray-300 mb-4">${translate('projects.project4.description')}</p>
                                <div class="mb-4">
                                    <h4 class="text-sm font-semibold mb-2 text-gray-400">${translate('projects.technologies')}:</h4>
                                    <div class="flex flex-wrap gap-2">
                                        <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">HTML5</span>
                                        <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">CSS3</span>
                                        <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">JavaScript</span>
                                    </div>
                                </div>
                                <div class="mt-4 flex flex-wrap gap-3 justify-center">
                                    <a href="#" target="_blank" class="text-sm px-4 py-2 bg-primary hover:bg-secondary text-white rounded-full transition-colors flex items-center">
                                        <i class="fab fa-github mr-1"></i> ${translate('projects.viewRepo')}
                                    </a>
                                    <a href="#" target="_blank" class="text-sm px-4 py-2 bg-dark hover:bg-dark/70 text-white rounded-full transition-colors border border-primary flex items-center">
                                        <i class="fas fa-external-link-alt mr-1"></i> ${translate('projects.viewDemo')}
                                    </a>
                                </div>
                                <div class="mt-4 flex justify-center">
                                    <button class="flip-back-btn text-sm px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-full transition-colors">
                                        <i class="fas fa-undo mr-1"></i> ${translate('projects.flipBack')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Project 5: Warded -->
                <div class="project-card fade-in">
                    <div class="relative h-[420px] perspective">
                        <div class="project-card-inner absolute w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer">
                            <div class="project-front absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-xl">
                                <div class="relative w-full h-full">
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                                    <img src="project5.jpg" alt="Warded" class="w-full h-full object-cover">
                                    <div class="absolute bottom-0 left-0 p-6 z-20 w-full">
                                        <h3 class="text-2xl font-bold mt-2 text-white">Warded</h3>
                                        <p class="text-sm text-gray-300 mt-1 line-clamp-2">${translate('projects.project5.shortDescription')}</p>
                                        <p class="mt-4 text-sm text-white">${translate('projects.clickToFlip')}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="project-back absolute w-full h-full backface-hidden bg-darker rounded-xl p-6 shadow-xl rotate-y-180">
                                <h3 class="text-xl font-bold mb-3 text-primary">Warded</h3>
                                <p class="text-sm text-gray-300 mb-4">${translate('projects.project5.description')}</p>
                                <div class="mb-4">
                                    <h4 class="text-sm font-semibold mb-2 text-gray-400">${translate('projects.technologies')}:</h4>
                                    <div class="flex flex-wrap gap-2">
                                        <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Flutter</span>
                                        <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Firebase</span>
                                        <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Jira</span>
                                        <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Figma</span>
                                    </div>
                                </div>
                                <div class="mt-4 flex flex-wrap gap-3 justify-center">
                                    <a href="#" target="_blank" class="text-sm px-4 py-2 bg-primary hover:bg-secondary text-white rounded-full transition-colors flex items-center">
                                        <i class="fab fa-youtube mr-1"></i> ${translate('projects.demoDay')}
                                    </a>
                                </div>
                                <div class="mt-4 flex justify-center">
                                    <button class="flip-back-btn text-sm px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-full transition-colors">
                                        <i class="fas fa-undo mr-1"></i> ${translate('projects.flipBack')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    section.innerHTML = projectsContent;
    
    // Add styles for 3D card effect
    const style = document.createElement('style');
    style.textContent = `
        .perspective {
            perspective: 1000px;
        }
        
        .transform-style-3d {
            transform-style: preserve-3d;
        }
        
        .backface-hidden {
            backface-visibility: hidden;
        }
        
        .rotate-y-180 {
            transform: rotateY(180deg);
        }
        
        .project-card-inner.flipped {
            transform: rotateY(180deg);
        }
        
        .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);
    
    // Add event listeners after the component is mounted
    setTimeout(() => {
        // Flip card functionality
        const projectCards = document.querySelectorAll('.project-card-inner');
        projectCards.forEach(card => {
            card.addEventListener('click', function() {
                this.classList.toggle('flipped');
            });
        });
        
        // Flip back buttons
        const flipBackBtns = document.querySelectorAll('.flip-back-btn');
        flipBackBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                this.closest('.project-card-inner').classList.remove('flipped');
            });
        });
    }, 0);
    
    return section;
}