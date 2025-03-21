let menuOpen = false;

function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    menuOpen = !menuOpen;
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuOpen = false;
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuOpen && !e.target.closest('.nav-content')) {
        menuOpen = false;
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});