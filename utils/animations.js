export function setupScrollAnimation() {
    const elements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Once the animation is complete, remove the observer
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null, // viewport
        threshold: 0.1, // 10% of the item must be visible
        rootMargin: '0px' // no margin
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
    
    // Add stagger effect to multiple elements
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const fadeElements = section.querySelectorAll('.fade-in');
        fadeElements.forEach((element, index) => {
            element.style.transitionDelay = `${index * 0.1}s`;
        });
    });
    
    // Add classes for active nav items
    const navItems = document.querySelectorAll('.nav-item');
    const updateActiveNavItem = () => {
        const hash = window.location.hash || '#home';
        navItems.forEach(item => {
            if (item.getAttribute('href') === hash) {
                item.classList.add('active', 'text-primary');
            } else {
                item.classList.remove('active', 'text-primary');
            }
        });
    };
    
    updateActiveNavItem();
    window.addEventListener('hashchange', updateActiveNavItem);
}