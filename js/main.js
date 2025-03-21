import { config } from './config.js';
import { projectsConfig } from './projects-config.js';

let currentLanguage = 'es';
let currentTextIndex = 0;

// Typing effect
async function typeText(text, element) {
    element.textContent = '';
    for (let char of text) {
        element.textContent += char;
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    for (let i = text.length; i >= 0; i--) {
        element.textContent = text.substring(0, i);
        await new Promise(resolve => setTimeout(resolve, 50));
    }
}

async function typingEffect() {
    const typingElement = document.querySelector('.typing-text');
    while (true) {
        const texts = config.typingTexts[currentLanguage];
        await typeText(texts[currentTextIndex], typingElement);
        currentTextIndex = (currentTextIndex + 1) % texts.length;
    }
}

// Language toggle
function toggleLanguage() {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    updateLanguage();
}

function updateLanguage() {
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        element.textContent = config.translations[currentLanguage][key];
    });
    
    // Update timeline items (new)
    document.querySelectorAll('.timeline-item').forEach(item => {
        const dateKey = item.querySelector('.timeline-date').getAttribute('data-date-key');
        const titleKey = item.querySelector('.timeline-title').getAttribute('data-title-key');
        const institutionKey = item.querySelector('.timeline-institution').getAttribute('data-institution-key');
        const detailsKey = item.querySelector('.timeline-details').getAttribute('data-details-key');
        
        if (dateKey) item.querySelector('.timeline-date').textContent = config.translations[currentLanguage][dateKey];
        if (titleKey) item.querySelector('.timeline-title').textContent = config.translations[currentLanguage][titleKey];
        if (institutionKey) item.querySelector('.timeline-institution').textContent = config.translations[currentLanguage][institutionKey];
        if (detailsKey) {
            const details = config.translations[currentLanguage][detailsKey];
            item.querySelector('.timeline-details').innerHTML = details;
        }
    });
    
    // Update projects
    updateProjects();
    
    // Update VSCode content
    const codeContent = document.querySelector('.code-content');
    if (codeContent) {
        typeCode(codeContent);
    }
    
    // Update loading text
    const loadingText = document.querySelector('.loading-text');
    if (loadingText) {
        loadingText.textContent = config.translations[currentLanguage]['loading-text'];
    }
    
    // Update footer
    const footerContent = document.querySelector('.footer-content p');
    if (footerContent) {
        footerContent.textContent = `2025 ${config.translations[currentLanguage]['footer-text']}`;
    }
}

// Projects section
function createProjectElement(project) {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    
    projectCard.innerHTML = `
        ${project.working ? `<span class="working-badge" data-lang-key="working-badge">En desarrollo</span>` : ''}
        <div class="project-thumbnail"></div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech-stack">
                ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
            <div class="project-links">
                ${project.repo ? `
                    <a href="${project.repo}" class="project-link" target="_blank" data-lang-key="repository">Repo</a>
                ` : ''}
                ${project.demo ? `
                    <a href="${project.demo}" class="project-link" target="_blank" data-lang-key="demo">Demo</a>
                ` : ''}
                ${project.youtube ? `
                    <a href="${project.youtube}" class="project-link" target="_blank" data-lang-key="demo-day">Demo Day</a>
                ` : ''}
            </div>
        </div>
    `;
    
    return projectCard;
}

function updateProjects() {
    const projectsContainer = document.querySelector('.projects-grid');
    if (!projectsContainer) return;
    
    projectsContainer.innerHTML = '';
    
    projectsConfig[currentLanguage].forEach(project => {
        projectsContainer.appendChild(createProjectElement(project));
    });
}

// Event Listeners
document.getElementById('languageToggle').addEventListener('click', toggleLanguage);

// Skills section
function initializeSkillsSection() {
    const skillsSection = document.querySelector('#skills');
    if (!skillsSection) return;

    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'loading-screen';
    loadingScreen.innerHTML = `
        <div class="loading-content">
            <div class="loading-text">Iniciando Sistema...</div>
            <div class="loading-bar">
                <div class="loading-progress"></div>
            </div>
            <div class="loading-percentage">0%</div>
        </div>
    `;

    const vsCodeContainer = createVSCodeInterface();
    vsCodeContainer.style.display = 'none';
    
    skillsSection.appendChild(loadingScreen);
    skillsSection.appendChild(vsCodeContainer);

    // Start loading animation
    setTimeout(() => {
        const progress = loadingScreen.querySelector('.loading-progress');
        const percentage = loadingScreen.querySelector('.loading-percentage');
        let currentProgress = 0;
        
        const progressInterval = setInterval(() => {
            currentProgress += 1;
            progress.style.width = `${currentProgress}%`;
            percentage.textContent = `${currentProgress}%`;
            
            if (currentProgress >= 100) {
                clearInterval(progressInterval);
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    vsCodeContainer.style.display = 'block';
                    typeCode(vsCodeContainer.querySelector('.code-content'));
                }, 500);
            }
        }, 30);
    }, 500);
}

function createVSCodeInterface() {
    const container = document.createElement('div');
    container.className = 'vscode-container';
    
    container.innerHTML = `
        <div class="vscode-header">
            <div class="window-controls">
                <div class="control close"></div>
                <div class="control minimize"></div>
                <div class="control maximize"></div>
            </div>
            <div class="file-tab">
                <span class="file-icon">📄</span>
                skills.js
            </div>
        </div>
        <div class="code-content"></div>
    `;
    
    return container;
}

async function typeCode(element) {
    const code = `// Technical Skills Definition
const skills = {
    frontend: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    backend: ['Python', 'Node.js', 'MySQL', 'MongoDB'],
    mobile: ['Flutter'],
    tools: ['Git', 'Docker', 'Figma', 'Jira'],
    
    // Calculate overall proficiency
    calculateOverallProficiency() {
        return 'Advanced Full Stack Developer';
    }
};

// Current Focus & Goals
const careerPath = {
    strongPoints: ['Frontend Development', 'Backend Architecture'],
    currentFocus: 'Performance Optimization',
    nextGoals: ['WebAssembly', 'Serverless Architecture']
};`;

    element.innerHTML = '';
    const lines = code.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
        const lineContainer = document.createElement('div');
        lineContainer.className = 'code-line';
        
        const lineNumber = document.createElement('span');
        lineNumber.className = 'line-numbers';
        lineNumber.textContent = (i + 1).toString().padStart(2, '0');
        
        const lineContent = document.createElement('span');
        lineContent.className = 'line-content';
        lineContent.textContent = lines[i];
        
        lineContainer.appendChild(lineNumber);
        lineContainer.appendChild(lineContent);
        element.appendChild(lineContainer);
        await new Promise(resolve => setTimeout(resolve, 50));
    }
}

// Add star background
function createStarBackground() {
    const starContainer = document.createElement('div');
    starContainer.className = 'star-background';
    document.body.appendChild(starContainer);

    // Create stars
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 20}s`;
        starContainer.appendChild(star);
    }

    // Create comets periodically
    setInterval(() => {
        const comet = document.createElement('div');
        comet.className = 'comet';
        comet.style.left = '0';
        comet.style.top = `${Math.random() * 100}%`;
        starContainer.appendChild(comet);

        comet.animate([
            { transform: 'translate(-100%, -100%)', opacity: 1 },
            { transform: 'translate(200%, 200%)', opacity: 0 }
        ], {
            duration: 2000,
            easing: 'linear'
        }).onfinish = () => comet.remove();
    }, 8000);
}

// Initialize skill cards
function initializeSkillCards() {
    document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('expanded');
        });
    });
}

// Back to top functionality
document.querySelector('.back-to-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show/hide back to top button
window.addEventListener('scroll', () => {
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 500) {
        backToTop.style.opacity = '1';
    } else {
        backToTop.style.opacity = '0';
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        backToTop.title = config.translations[currentLanguage]['back-to-top'];
    }
    
    // Initialize other elements
    updateLanguage();
    typingEffect();
    initializeSkillsSection();
    createStarBackground();
    initializeSkillCards();
});