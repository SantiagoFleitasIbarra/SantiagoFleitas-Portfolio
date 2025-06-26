import { translate } from '../utils/languageManager.js';

export default function Home() {
    const section = document.createElement('section');
    section.id = 'home';
    section.className = 'section min-h-screen flex items-center bg-gradient-to-br from-dark to-darker relative overflow-hidden pt-20';
    
    // Add space background with stars
    const starsBackground = document.createElement('div');
    starsBackground.className = 'absolute top-0 left-0 w-full h-full pointer-events-none';
    starsBackground.innerHTML = `
        <div class="stars-container"></div>
    `;
    section.appendChild(starsBackground);
    
    // Add background gradient effect
    const bgGradient = document.createElement('div');
    bgGradient.className = 'absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(93,50,165,0.15),transparent_60%)] pointer-events-none';
    section.appendChild(bgGradient);
    
    const homeContent = `
        <div class="container mx-auto px-5">
            <div class="flex flex-col lg:flex-row justify-between items-center gap-20">
                <div class="lg:max-w-[600px] mb-20 lg:mb-0 mt-28 lg:mt-10">
                    <h1 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-light to-primary bg-clip-text text-transparent shadow-text fade-in">
                        Santiago Fleitas
                    </h1>
                    <h2 class="text-xl md:text-2xl font-medium mb-10 text-grey shadow-text fade-in">
                        ${translate('home.title')}
                    </h2>
                    <p class="text-base md:text-lg leading-relaxed mb-14 fade-in">
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
                    <div class="text-5xl md:text-6xl text-primary mt-12 float-animation fade-in">
                        <i class="fas fa-rocket"></i>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    section.innerHTML += homeContent;
    
    // Add CSS for star background
    const style = document.createElement('style');
    style.textContent = `
        .stars-container {
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: 
                radial-gradient(2px 2px at 20px 30px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 40px 70px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 50px 160px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 90px 40px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 130px 80px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 160px 120px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 200px 50px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 240px 90px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 280px 30px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 320px 70px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 360px 120px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 400px 50px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 440px 80px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 480px 30px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 520px 60px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 560px 90px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 600px 40px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 640px 70px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 680px 100px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 720px 50px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 760px 80px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 800px 30px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 840px 60px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 880px 90px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 920px 40px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 960px 70px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 1000px 100px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 1040px 50px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 1080px 80px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 1120px 30px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 1160px 60px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 1200px 90px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 1240px 40px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 1280px 70px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 1320px 100px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 1360px 50px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 1400px 80px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 1440px 30px, #ffffff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 1480px 60px, #ffffff, rgba(0,0,0,0));
            background-size: 1500px 800px;
            background-position: 0 0;
            background-repeat: repeat;
            opacity: 0.5;
        }
    `;
    document.head.appendChild(style);
    
    return section;
}