import { setupBackground } from './background.js';
import { renderApp } from './app.js';
import { loadConfig } from './config.js';

// Initialize the application
document.addEventListener('DOMContentLoaded', async () => {
    // Setup the 3D background
    setupBackground();
    
    // Load configuration
    await loadConfig();
    
    // Render the main application
    renderApp();
});

