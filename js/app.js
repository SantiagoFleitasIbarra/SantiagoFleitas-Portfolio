import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Language and Theme variables
let currentLang = localStorage.getItem('language') || 'es';
let currentTheme = localStorage.getItem('theme') || 'light';

// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const header = document.getElementById('header');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');
const contactForm = document.getElementById('contactForm');
const themeToggle = document.getElementById('themeToggle');
const languageToggles = document.querySelectorAll('.lang-btn');

// Apply saved theme on load
if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.checked = true;
}

// Apply saved language on load
function updateLanguage(lang) {
    fetch(`/lang/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (data[key]) {
                    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        element.placeholder = data[key];
                    } else {
                        element.innerHTML = data[key];
                    }
                }
            });
            
            // Handle placeholder translations
            document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
                const key = element.getAttribute('data-i18n-placeholder');
                if (data[key]) {
                    element.placeholder = data[key];
                }
            });
            
            // Update document title
            if (data.pageTitle) {
                document.title = data.pageTitle;
            }
            
            // Update typed text array if it exists in translations
            if (data.typedTextArray && Array.isArray(data.typedTextArray)) {
                textArray = data.typedTextArray;
                // Reset typing effect with new language
                resetTypingEffect();
            }
        })
        .catch(error => console.error('Error loading language file:', error));
}
updateLanguage(currentLang);

// Theme toggle functionality
themeToggle.addEventListener('change', function() {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    }
});

// Language toggle functionality
languageToggles.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        currentLang = lang;
        localStorage.setItem('language', lang);
        
        // Update UI
        languageToggles.forEach(b => {
            b.classList.remove('active');
        });
        btn.classList.add('active');
        
        updateLanguage(lang);
    });
    
    // Set active class based on current language
    if (btn.getAttribute('data-lang') === currentLang) {
        btn.classList.add('active');
    }
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Sticky header on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Project filter functionality
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        // Filter projects
        projectItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                gsap.to(item, { scale: 1, opacity: 1, duration: 0.5 });
                item.style.display = 'block';
            } else {
                gsap.to(item, { scale: 0.8, opacity: 0, duration: 0.5, onComplete: () => {
                    item.style.display = 'none';
                }});
            }
        });
    });
});

// Skill category filter functionality
const skillTags = document.querySelectorAll('.skill-tag');
const skillItems = document.querySelectorAll('.skill-item');

skillTags.forEach(tag => {
    tag.addEventListener('click', () => {
        // Remove active class from all tags
        skillTags.forEach(tag => tag.classList.remove('active'));
        
        // Add active class to clicked tag
        tag.classList.add('active');
        
        const filterValue = tag.getAttribute('data-filter');
        
        // Filter skills
        skillItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                gsap.to(item, { scale: 1, opacity: 1, duration: 0.5 });
                item.style.display = 'block';
            } else {
                gsap.to(item, { scale: 0.8, opacity: 0, duration: 0.5, onComplete: () => {
                    item.style.display = 'none';
                }});
            }
        });
    });
});

// Contact form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send this data to a server
    console.log(`Form submitted: ${name}, ${email}, ${subject}, ${message}`);
    
    // Show success message
    alert('¡Gracias por tu mensaje! Te responderé pronto.');
    
    // Reset form
    contactForm.reset();
});

// Typed text effect
const typedTextElement = document.querySelector('.typed-text');
let textArray = currentLang === 'es' 
    ? ['Frontend', 'Backend', 'Web', 'Ingeniero en Computación', 'Freelance'] 
    : ['Frontend', 'Backend', 'Web', 'Computer Engineer', 'Freelance'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 50;
let newTextDelay = 2000;

function resetTypingEffect() {
    textIndex = 0;
    charIndex = 0;
    isDeleting = false;
    typedTextElement.textContent = '';
    setTimeout(typeText, 1000);
}

function typeText() {
    const currentText = textArray[textIndex];
    
    if (isDeleting) {
        typedTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = erasingDelay;
    } else {
        typedTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingDelay = newTextDelay;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
    }

    setTimeout(typeText, typingDelay);
}

// Initialize typing effect
setTimeout(typeText, 1000);

document.addEventListener('DOMContentLoaded', function() {
    // Initialize project video functionality
    const videoThumbnail = document.getElementById('projectVideoThumbnail');
    const videoModal = document.getElementById('videoModal');
    const closeModal = document.getElementById('closeModal');
    const videoIframe = document.getElementById('videoIframe');
    
    if (videoThumbnail && videoModal) {
        videoThumbnail.addEventListener('click', () => {
            videoModal.classList.add('active');
            // Set the iframe src when opening to prevent autoplay when page loads
            videoIframe.setAttribute('src', 'https://www.youtube.com/embed/dQw4w9WgXcQ');
        });
        
        closeModal.addEventListener('click', () => {
            videoModal.classList.remove('active');
            // Reset iframe src when closing
            videoIframe.setAttribute('src', '');
        });
    }
    
    // Project typing effect
    const projectTitles = document.querySelectorAll('.typing-effect');
    
    projectTitles.forEach(title => {
        const text = title.getAttribute('data-text');
        title.textContent = '';
        
        let charIndex = 0;
        
        function typeText() {
            if (charIndex < text.length) {
                title.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeText, 100);
            }
        }
        
        // Start typing when element comes into view
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(typeText, 200);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(title);
    });

    // Hero section animations
    gsap.from('.hero-text h1', { opacity: 0, y: 50, duration: 1, delay: 0.2 });
    gsap.from('.hero-text h2', { opacity: 0, y: 50, duration: 1, delay: 0.4 });
    gsap.from('.hero-text p', { opacity: 0, y: 50, duration: 1, delay: 0.6 });
    gsap.from('.hero-buttons', { opacity: 0, y: 50, duration: 1, delay: 0.8 });
    gsap.from('.social-icons', { opacity: 0, y: 50, duration: 1, delay: 1 });
    gsap.from('.hero-image', { opacity: 0, scale: 0.8, duration: 1, delay: 1.2 });
    
    // Animate sections when scrolled into view
    gsap.utils.toArray('.section').forEach(section => {
        gsap.from(section.querySelector('.section-header'), {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%'
            },
            opacity: 0,
            y: 50,
            duration: 1
        });
        
        gsap.from(section.querySelectorAll('.skill-item, .project-item, .about-text, .contact-info, .contact-form, .education-timeline'), {
            scrollTrigger: {
                trigger: section,
                start: 'top 70%'
            },
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 0.8
        });
    });

    // Animate timeline items
    gsap.utils.toArray('.timeline-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%'
            },
            opacity: 0,
            x: i % 2 === 0 ? -50 : 50,
            duration: 0.8,
            delay: i * 0.2
        });
    });

    // Initialize code collapsible sections
    const collapsibles = document.querySelectorAll('.code-collapsible');

    collapsibles.forEach(collapsible => {
        collapsible.addEventListener('click', () => {
            // Toggle the open class on the clicked element
            collapsible.classList.toggle('open');
            
            // Get the target content ID
            const targetId = collapsible.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            
            // Toggle the content visibility
            if (targetContent) {
                targetContent.classList.toggle('show');
                
                // Update line numbers visibility based on expanded content
                updateSkillsLineNumbersVisibility();
                
                // Animate skill progress bars when content is shown
                if (targetContent.classList.contains('show')) {
                    const progressBars = targetContent.querySelectorAll('.progress');
                    progressBars.forEach(bar => {
                        const width = bar.parentElement.getAttribute('data-value') + '%';
                        setTimeout(() => {
                            bar.style.width = width;
                        }, 100);
                    });
                }
            }
        });
    });

    function updateSkillsLineNumbersVisibility() {
        const lineNumbers = document.getElementById('skillsLineNumbers');
        if (!lineNumbers) return;
        
        // Count visible lines in the code content
        const visibleLines = document.querySelectorAll('.code-content .code-line:not([style*="display: none"])').length;
        
        // Ensure all needed line numbers are visible
        for (let i = 0; i < lineNumbers.children.length; i++) {
            if (i < visibleLines) {
                lineNumbers.children[i].style.display = 'block';
            } else {
                lineNumbers.children[i].style.display = 'none';
            }
        }
    }

    // Show frontend section by default and update line numbers
    const frontendCollapsible = document.querySelector('[data-target="frontend-block"]');
    if (frontendCollapsible) {
        frontendCollapsible.click();
        updateSkillsLineNumbersVisibility();
    }
    
    // Animate projects when scrolled into view
    gsap.utils.toArray('.project-item').forEach(project => {
        gsap.from(project, {
            scrollTrigger: {
                trigger: project,
                start: 'top 85%'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    });
    
    // Video container animation
    gsap.from('.project-video-container', {
        scrollTrigger: {
            trigger: '.project-video-container',
            start: 'top 80%'
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });
    
    // Initialize Windows 98 Desktop
    initWindows98Desktop();
    
    function initWindows98Desktop() {
        const desktopIcons = document.querySelectorAll('.desktop-icon');
        const windows = document.querySelectorAll('.win98-window');
        const closeButtons = document.querySelectorAll('.window-close');
        const minimizeButtons = document.querySelectorAll('.window-minimize');
        const maximizeButtons = document.querySelectorAll('.window-maximize');
        const taskbarTime = document.querySelector('.taskbar-time');
        
        // Update taskbar time
        function updateTime() {
            const now = new Date();
            let hours = now.getHours();
            const minutes = now.getMinutes();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            
            hours = hours % 12;
            hours = hours ? hours : 12; // Convert 0 to 12
            
            const timeString = `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
            if (taskbarTime) taskbarTime.textContent = timeString;
        }
        
        // Initial time update and set interval
        updateTime();
        setInterval(updateTime, 60000);
        
        // Make windows draggable
        windows.forEach(makeWindowDraggable);
        
        function makeWindowDraggable(windowElement) {
            const titlebar = windowElement.querySelector('.window-titlebar');
            let offsetX, offsetY, isDragging = false;
            
            titlebar.addEventListener('mousedown', function(e) {
                isDragging = true;
                offsetX = e.clientX - windowElement.getBoundingClientRect().left;
                offsetY = e.clientY - windowElement.getBoundingClientRect().top;
                
                // Bring window to front
                windows.forEach(w => w.style.zIndex = 100);
                windowElement.style.zIndex = 101;
            });
            
            document.addEventListener('mousemove', function(e) {
                if (!isDragging) return;
                
                // Don't drag on small screens
                if (window.innerWidth <= 768) return;
                
                const x = e.clientX - offsetX;
                const y = e.clientY - offsetY;
                
                // Keep window within desktop bounds
                const desktop = document.querySelector('.win98-desktop');
                const desktopRect = desktop.getBoundingClientRect();
                
                const maxX = desktopRect.width - windowElement.offsetWidth;
                const maxY = desktopRect.height - windowElement.offsetHeight - 30; // 30px for taskbar
                
                windowElement.style.left = `${Math.max(0, Math.min(x - desktopRect.left, maxX))}px`;
                windowElement.style.top = `${Math.max(0, Math.min(y - desktopRect.top, maxY))}px`;
            });
            
            document.addEventListener('mouseup', function() {
                isDragging = false;
            });
        }
        
        // Handle desktop icon clicks
        desktopIcons.forEach(icon => {
            icon.addEventListener('click', function() {
                const windowId = this.getAttribute('data-window');
                const targetWindow = document.getElementById(windowId);
                
                if (targetWindow) {
                    // Hide all windows
                    windows.forEach(w => w.classList.remove('active'));
                    
                    // Show clicked window
                    targetWindow.classList.add('active');
                    
                    // If it's the video window, set the iframe src
                    if (windowId === 'video-window') {
                        const videoIframe = document.getElementById('videoIframe');
                        if (videoIframe) {
                            videoIframe.setAttribute('src', 'https://www.youtube.com/embed/dQw4w9WgXcQ');
                        }
                    }
                    
                    // Highlight the active icon
                    desktopIcons.forEach(i => i.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Bring window to front
                    windows.forEach(w => w.style.zIndex = 100);
                    targetWindow.style.zIndex = 101;
                }
            });
        });
        
        // Handle window control buttons
        closeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const windowElement = this.closest('.win98-window');
                windowElement.classList.remove('active');
                
                // If closing video window, reset iframe src
                if (windowElement.id === 'video-window') {
                    const videoIframe = document.getElementById('videoIframe');
                    if (videoIframe) {
                        videoIframe.setAttribute('src', '');
                    }
                }
                
                // Remove active class from corresponding icon
                const iconSelector = `.desktop-icon[data-window="${windowElement.id}"]`;
                const icon = document.querySelector(iconSelector);
                if (icon) icon.classList.remove('active');
            });
        });
        
        // Minimize and maximize functionality would go here
        minimizeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const windowElement = this.closest('.win98-window');
                windowElement.classList.remove('active');
            });
        });
        
        maximizeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const windowElement = this.closest('.win98-window');
                
                if (windowElement.style.width === '100%') {
                    // Restore
                    windowElement.style.width = '';
                    windowElement.style.height = '';
                    windowElement.style.top = '50px';
                    windowElement.style.left = '100px';
                } else {
                    // Maximize
                    windowElement.style.width = '100%';
                    windowElement.style.height = 'calc(100% - 30px)'; // 30px for taskbar
                    windowElement.style.top = '0';
                    windowElement.style.left = '0';
                }
            });
        });
    }
    
    // Mobile desktop button
    const mobileDesktopBtn = document.getElementById('mobileDesktopBtn');
    const win98Desktop = document.getElementById('win98Desktop');
    
    if (mobileDesktopBtn && win98Desktop) {
        mobileDesktopBtn.addEventListener('click', function() {
            win98Desktop.classList.toggle('mobile-active');
            
            // Change button text based on desktop visibility
            const buttonText = mobileDesktopBtn.querySelector('span');
            if (win98Desktop.classList.contains('mobile-active')) {
                if (currentLang === 'es') {
                    buttonText.textContent = 'Cerrar Escritorio de Windows 98';
                } else {
                    buttonText.textContent = 'Close Windows 98 Desktop';
                }
                mobileDesktopBtn.innerHTML = '<i class="fas fa-times"></i> ' + buttonText.outerHTML;
            } else {
                if (currentLang === 'es') {
                    buttonText.textContent = 'Abrir Escritorio de Windows 98';
                } else {
                    buttonText.textContent = 'Open Windows 98 Desktop';
                }
                mobileDesktopBtn.innerHTML = '<i class="fas fa-desktop"></i> ' + buttonText.outerHTML;
            }
        });
    }
});