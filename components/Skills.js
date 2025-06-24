import { translate } from '../utils/languageManager.js';

export default function Skills() {
    const section = document.createElement('section');
    section.id = 'skills';
    section.className = 'section py-20 bg-dark';
    
    const skillsContent = `
        <div class="container mx-auto px-5">
            <h2 class="text-3xl md:text-4xl mb-8 text-center font-bold relative fade-in after:content-[''] after:absolute after:w-20 after:h-1 after:bg-primary after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2">
                ${translate('skills.title')}
            </h2>
            
            <p class="text-center max-w-3xl mx-auto mb-16 text-grey fade-in">
                ${translate('skills.summary')}
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in">
                <!-- Frontend Skills -->
                <div class="bg-darker/80 rounded-xl p-8 shadow-lg border-t-4 border-primary hover:transform hover:-translate-y-2 transition-all duration-500 backdrop-blur-sm">
                    <h3 class="text-2xl font-semibold mb-6 text-primary">
                        <i class="fas fa-code mr-3"></i>${translate('skills.frontend.title')}
                    </h3>
                    <div class="space-y-4">
                        <div class="skill-item flex items-center gap-3 bg-dark/50 p-3 rounded-lg hover:bg-primary/10 transition-all duration-300">
                            <i class="fab fa-html5 text-2xl text-orange-500"></i>
                            <span>HTML5</span>
                        </div>
                        <div class="skill-item flex items-center gap-3 bg-dark/50 p-3 rounded-lg hover:bg-primary/10 transition-all duration-300">
                            <i class="fab fa-css3-alt text-2xl text-blue-500"></i>
                            <span>CSS3</span>
                        </div>
                        <div class="skill-item flex items-center gap-3 bg-dark/50 p-3 rounded-lg hover:bg-primary/10 transition-all duration-300">
                            <i class="fab fa-js text-2xl text-yellow-400"></i>
                            <span>JavaScript</span>
                        </div>
                        <div class="skill-item flex items-center gap-3 bg-dark/50 p-3 rounded-lg hover:bg-primary/10 transition-all duration-300">
                            <i class="fab fa-react text-2xl text-blue-400"></i>
                            <span>React.js</span>
                        </div>
                        <div class="skill-item flex items-center gap-3 bg-dark/50 p-3 rounded-lg hover:bg-primary/10 transition-all duration-300">
                            <i class="fab fa-css3 text-2xl text-teal-400"></i>
                            <span>Tailwind CSS</span>
                        </div>
                    </div>
                </div>
                
                <!-- Backend Skills -->
                <div class="bg-darker/80 rounded-xl p-8 shadow-lg border-t-4 border-primary hover:transform hover:-translate-y-2 transition-all duration-500 backdrop-blur-sm">
                    <h3 class="text-2xl font-semibold mb-6 text-primary">
                        <i class="fas fa-server mr-3"></i>${translate('skills.backend.title')}
                    </h3>
                    <div class="space-y-4">
                        <div class="skill-item flex items-center gap-3 bg-dark/50 p-3 rounded-lg hover:bg-primary/10 transition-all duration-300">
                            <i class="fab fa-node-js text-2xl text-green-500"></i>
                            <span>Node.js</span>
                        </div>
                        <div class="skill-item flex items-center gap-3 bg-dark/50 p-3 rounded-lg hover:bg-primary/10 transition-all duration-300">
                            <i class="fab fa-python text-2xl text-blue-500"></i>
                            <span>Python</span>
                        </div>
                        
                        <h3 class="text-xl font-semibold mb-2 mt-6 text-primary">
                            <i class="fas fa-database mr-2"></i>${translate('skills.databases.title')}
                        </h3>
                        <div class="skill-item flex items-center gap-3 bg-dark/50 p-3 rounded-lg hover:bg-primary/10 transition-all duration-300">
                            <i class="fas fa-database text-2xl text-blue-400"></i>
                            <span>MySQL</span>
                        </div>
                        <div class="skill-item flex items-center gap-3 bg-dark/50 p-3 rounded-lg hover:bg-primary/10 transition-all duration-300">
                            <i class="fas fa-leaf text-2xl text-green-400"></i>
                            <span>MongoDB</span>
                        </div>
                    </div>
                </div>
                
                <!-- Tools and Mobile -->
                <div class="bg-darker/80 rounded-xl p-8 shadow-lg border-t-4 border-primary hover:transform hover:-translate-y-2 transition-all duration-500 backdrop-blur-sm">
                    <h3 class="text-2xl font-semibold mb-6 text-primary">
                        <i class="fas fa-tools mr-3"></i>${translate('skills.tools.title')}
                    </h3>
                    <div class="space-y-4">
                        <div class="skill-item flex items-center gap-3 bg-dark/50 p-3 rounded-lg hover:bg-primary/10 transition-all duration-300">
                            <i class="fab fa-git-alt text-2xl text-orange-500"></i>
                            <span>Git</span>
                        </div>
                        <div class="skill-item flex items-center gap-3 bg-dark/50 p-3 rounded-lg hover:bg-primary/10 transition-all duration-300">
                            <i class="fab fa-docker text-2xl text-blue-500"></i>
                            <span>Docker</span>
                        </div>
                        <div class="skill-item flex items-center gap-3 bg-dark/50 p-3 rounded-lg hover:bg-primary/10 transition-all duration-300">
                            <i class="fab fa-figma text-2xl text-purple-400"></i>
                            <span>Figma</span>
                        </div>
                        <div class="skill-item flex items-center gap-3 bg-dark/50 p-3 rounded-lg hover:bg-primary/10 transition-all duration-300">
                            <i class="fas fa-tasks text-2xl text-blue-400"></i>
                            <span>Jira</span>
                        </div>
                        <div class="skill-item flex items-center gap-3 bg-dark/50 p-3 rounded-lg hover:bg-primary/10 transition-all duration-300">
                            <i class="fas fa-fire text-2xl text-orange-500"></i>
                            <span>Firebase</span>
                        </div>
                        
                        <h3 class="text-xl font-semibold mb-2 mt-6 text-primary">
                            <i class="fas fa-mobile-alt mr-2"></i>${translate('skills.mobile.title')}
                        </h3>
                        <div class="skill-item flex items-center gap-3 bg-dark/50 p-3 rounded-lg hover:bg-primary/10 transition-all duration-300">
                            <i class="fas fa-mobile-alt text-2xl text-blue-400"></i>
                            <span>Flutter</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    section.innerHTML = skillsContent;
    return section;
}